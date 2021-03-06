/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.

app.import("bower_components/bootstrap/dist/js/bootstrap.js");
app.import("bower_components/bootstrap/dist/css/bootstrap.css");
app.import("bower_components/typeahead.js/dist/typeahead.jquery.js");
app.import("bower_components/typeahead.js-bootstrap3.less/typeahead.css");

// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
