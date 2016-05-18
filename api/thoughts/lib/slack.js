var Slack = require('slack-node');

module.exports = {
  send: function(incomingWebhook, channel_id, user, text, postText, next) {
    var slack = new Slack();
    slack.setWebhook(incomingWebhook);

    slack.webhook({
      channel: channel_id,
      username: user + " would rather ",
      icon_emoji: ":eyes:",
      text: text + " than " + postText
    }, function(err, response) {
      if(err){
        console.log('SLACK ERROR', err);
      }
      else {
        console.log(response);
      }
      next(err, response);
    });
  }
}