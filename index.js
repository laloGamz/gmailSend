const Telegraf = require('telegraf');
const Markup = require("telegraf/markup");
const Stage = require("telegraf/stage");
const session = require("telegraf/session");
const WizardScene = require("telegraf/scenes/wizard");

var nodemailer = require('nodemailer');

const bot = new Telegraf('1964075051:AAEnaiTI6yd-3OydWFMH0m6wLg0BpSN4OAk')

bot.start(ctx => {
  ctx.reply(
    `Hola ${ctx.from.first_name}, como estas???, este es un bot para enviar mail`,
    Markup.inlineKeyboard([
      Markup.callbackButton("enviar Mail", "LOVE_CALCULATE")
    ]).extra()
  );
});


bot.launch();
