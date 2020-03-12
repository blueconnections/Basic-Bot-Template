const path = require('path');
const { ActivityHandler } = require('botbuilder');

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async turnContext => { 
        await turnContext.sendActivity(`You said '${ turnContext.activity.text }'`);
        console.log(`${ turnContext.activity.text }`);
    });
    }
}

module.exports.EchoBot = EchoBot;






