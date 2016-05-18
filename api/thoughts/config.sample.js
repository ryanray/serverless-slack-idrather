/**
 * export an object where the property name is the slack token for your team and the value is an object 
 * containing at least the incomingWebhookUri so the lambda can post messages to your team.
 * (you can add more than 1 team if you'd like)
 */
module.exports = {
  'aaaBBBBccccDDDDeeee': {
    incomingWebhookUri: 'https://hooks.slack.com/services/T0000000/B1111111/zzzzzWWWWWqqqqEEEErrrrTTTy'
  }
};
