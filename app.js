const {App} = require('@slack/bolt');

const app = new App({
  token:process.env.SLACK_BOT_TOKEN,
  signingSecret:process.env.SLACK_SIGNING_SECRET
});

(async () => {
  //boot web_app
  await app.start(3000);
  console.log('Bolt app is running!!');
})();
