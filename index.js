const Telegraf = require('telegraf');
const session = require('telegraf/session');
const Stage = require('telegraf/stage');
const WizardScene = require('telegraf/scenes/wizard');
const mysql = require('mysql');
const nodemailer = require("nodemailer");
const util = require('util');

var con = mysql.createConnection({
        host: "185.201.11.128",
        user: "u270568211_pablod",
        password: "Guillermo2020.",
        database: "u270568211_juegosgamer"
      });

const bot = new Telegraf('1969516967:AAFPXAcbSn3pZHCfcE3MD6rfyMq-sLvLgIA');
bot.use(session());
//bot.use(stage.middleware());
bot.command('info', (ctx) => {
  
  var username = ctx.from.username;
       
  const query = util.promisify(con.query).bind(con);
 
        
  (async () => {
  
    const info = await query(`SELECT * FROM user WHERE first_name ="Guille1120"`);
  
    console.log(info[0].llave);
    ctx.reply(info[0].llave);
  
  })()
  
  
});
bot.command('nombre', (ctx) => ctx.reply(ctx.from.username));

bot.launch();
