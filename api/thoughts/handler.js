'use strict';
var thoughts = require('./lib/thoughts.js');
var slack = require('./lib/slack.js');
var querystring = require('querystring');
var config = require('./config.js');

module.exports.handler = function(event, context, cb) {
  console.log('EVENT', event);
  var data = querystring.parse(event.body);
  var team = config[data.token];

  if(!team) {
    return cb('[UNAUTHORIZED]');
  }

  slack.send(team.incomingWebhookUri, data.channel_id, data.user_name, thoughts.get(), data.text, function(err) {
    if(err) {
      return cb('[INTERNAL_ERROR]');
    }

    cb(null);
  });

};
