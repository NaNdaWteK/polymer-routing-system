class Service {
  constructor(baseUrl) {
    this.baseUrl = 'http://colmena.local';
    this._subscribe();
  }
  doRequest(endpoint, data, callback) {
    var endpointURL = this.baseUrl + endpoint;
    var request = new XMLHttpRequest();
    var OK = 200;

    request.open('POST', endpointURL);
    request.setRequestHeader('Content-Type', 'text/plain');
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === OK) {
                callback (JSON.parse(request.responseText));
            }else{
              Bus.publish('call.error');
            }
        }
    };
    request.send(JSON.stringify(data));
  }
  _subscribe() {
    console.error(this.toString() + ' not subscribed!, implement subscribe method' );
  }
}
