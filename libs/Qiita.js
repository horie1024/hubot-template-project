const request = require('request');

module.exports = class Qiita {
  constructor(params) {
    var baseOptions = {
      url: `https://${params.team}.qiita.com`,
      headers: {
        'Authorization': 'Bearer ' + params.token,
        'Content-Type': 'application/json; charset=utf-8"',
        'User-Agent': 'Hubot'
      }
    };

    this.Project = new Project(baseOptions);
    this.Item = new Item(baseOptions);
  }
}

class Project {
  constructor(baseOptions) {
    this.options = baseOptions;
  }

  getProject(projectId, callback) {
    var options = {
      url: this.options.url + '/api/v2/projects/' + projectId,
      headers: this.options.headers
    };

    request.get(options, (err, res, body) => {
      var _body = JSON.parse(body);
      if (typeof _body.message !== "undefined" && _body.message !== null) {
        callback(_body, null);
      } else {
        callback(null, _body);
      }
    });
  }

  updateProject(projectId, params, callback) {
    var options = {
      url: this.options.url + '/api/v2/projects/' + projectId,
      headers: this.options.headers,
      body: JSON.stringify(params)
    };

    request.patch(options, (err, res, body) => {
      var _body = JSON.parse(body);
      if (typeof _body.message !== "undefined" && _body.message !== null) {
        callback(_body, null);
      } else {
        callback(null, _body);
      }
    });
  }
}

class Item {

  constructor(baseOptions) {
    this.options = baseOptions;
  }

  list(params, callback) {

    var options = {
      url: this.options.url + '/api/v2/items',
      headers: this.options.headers,
      qs: {
        page: params.page || 1,
        per_page: params.per_page || 10,
        query: params.query
      }
    };

    request.get(options, (err, res, body) => {
      var _body = JSON.parse(body);
      if (typeof _body.message !== "undefined" && _body.message !== null) {
        callback(_body, null);
      } else {
        callback(null, _body);
      }
    });
  }

  createItem(params, callback) {

    var options = {
      url: this.options.url + '/api/v2/items',
      headers: this.options.headers,
      body: JSON.stringify(params)
    };

    request.post(options, (err, res, body) => {
      var _body = JSON.parse(body);
      if (typeof _body.message !== "undefined" && _body.message !== null) {
        callback(_body, null);
      } else {
        callback(null, _body);
      }
    });
  }
}

