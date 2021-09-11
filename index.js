const Telegraf = require('telegraf');
const Markup = require("telegraf/markup");
const Stage = require("telegraf/stage");
const session = require("telegraf/session");
const WizardScene = require("telegraf/scenes/wizard");

var nodemailer = require('nodemailer');

const bot = new Telegraf('1969516967:AAFPXAcbSn3pZHCfcE3MD6rfyMq-sLvLgIA')

bot.start(ctx => {
  ctx.reply(
    `Hola ${ctx.from.first_name}, como estas???, este es un bot para enviar email`,
    Markup.inlineKeyboard([
      Markup.callbackButton("enviar Mail", "LOVE_CALCULATE"),
      { text: 'Ir a Habilitar gmail como aplicacion segura', url: 'google.com' }
    ]).extra()
  );
});



const stage = new Stage([loveCalculate], { default: "love_calculate" });
bot.use(session());
bot.use(stage.middleware());
bot.launch();
