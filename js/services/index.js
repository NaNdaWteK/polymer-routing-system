class IndexService extends Service{
  retrieve() {
    this.doRequest('/avatar/get', '', this._changeHome.bind(this));
  }
  _changeHome(result) {
    Bus.publish('index.retrieved', result);
  }
  _subscribe() {
    Bus.subscribe('index.retrieve', this.retrieve.bind(this));
  }
}
