class Index{
    constructor(){
        console.log('Load index');
        this.request = false;
        this._ajaxCall();
        this._subscribe();
    }
    ajaxRetrieved(retrieved_data) {
      this.request = retrieved_data.name + " " + retrieved_data.surname;
      this._chargeOctopus();
    }
    chargeAjaxError() {
      this._chargeOctopus();
    }
    _chargeOctopus() {
      this.octopus = document.createElement('index-octopus');
      this.octopus.addEventListener('initialize', this._initialize.bind(this));
      document.body.appendChild(this.octopus);
    }
    _initialize() {
      console.log('initialize')
      this._setOctopusComponents();
      this._addEvents();
      this._loadAjaxCall();
    }
    _setOctopusComponents() {
      this.menu = this.octopus.menu;
      this.child = this.octopus.child;
      this.subchild = this.octopus.subchild;
    }
    _addEvents() {
      this.child.addEventListener('child', this._changeSubchildButton.bind(this));
      this.subchild.addEventListener('subchild', this._changeChildButton.bind(this));
    }
    _loadAjaxCall() {
      if(this.request) this.menu.name = this.request;
    }
    _changeChildButton() {
      this.child.button ='New child Button'
    }
    _changeSubchildButton() {
      this.subchild.button = 'New subchild Button'
    }
    _ajaxCall() {
      Bus.publish('index.retrieve');
    }
    _subscribe() {
      Bus.subscribe('index.retrieved', this.ajaxRetrieved.bind(this));
      Bus.subscribe('call.error', this.chargeAjaxError.bind(this));
    }
}
