# serverless-slack-idrather
Example of Slack slash command integration with Severless Framework

If you named your slash command `/idratherthan` if a user name Bob typed `/idratherthan do yard work` and a message would be posted 
back to the slack channel(or private message) that says "Bob would rather <RANDOM_MESSAGE> than do yard work".

## Setup
1. Setup slash command and add token to config.js
2. Setup webhook and add to config.js
3. `serverless project init` to create your own `_meta` folder
4. `serverless dash deploy`

## TODO
1. allow people to customize messages from slack(dynamodb or something)
