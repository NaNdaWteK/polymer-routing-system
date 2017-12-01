class Index{
    constructor(){
        this.octopus = document.getElementById('octopus');
        this.menu = this.octopus.menu;
        this.child = this.octopus.child;
        this.subchild = this.octopus.subchild;
        this.child.addEventListener('child', this._changeSubchildButton.bind(this));
        this.subchild.addEventListener('subchild', this._changeChildButton.bind(this));
    }
    _changeChildButton() {
        this.child.param = {
          'button': 'New child Button'
        }
    }
    _changeSubchildButton() {
        this.subchild.param = {
          'button': 'New subchild Button'
        }
    }
}
new Index();
