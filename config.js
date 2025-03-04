const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/2ygfgRSt/SJw-MLCOb-UOC.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi, I Am Here! I Am FILMPUBLISHER.LK Official WhatsApp Bot.",
};