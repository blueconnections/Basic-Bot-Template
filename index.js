const dotenv = require('dotenv');
const path = require('path');
const restify = require('restify');

const { BotFrameworkAdapter } = require('botbuilder');
const { EchoBot } = require('./bot');

const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`\nhttp://localhost:3978/api/messages`);
});

const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

const myBot = new EchoBot();

server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await myBot.run(context);
    });
});
