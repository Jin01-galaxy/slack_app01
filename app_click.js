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

app.message('hey',async ({message,say}) => {
  await say({
    blocks:[
      {
        type:'section',
        text: {
          type:'mrkdwn',
          text: `Hey <@${message.user}>!`
        },
        accessory: {
          type: 'button',
          text: {
            type:'plain_text',
            text: 'click here!'
          },
          action_id:'button_click'
        }
      }
    ]
  });
});

app.action('button_click', async({body, ack, say}) => {
  await ack();
  await say(`<@${body.user.id}> clicked button`);
});