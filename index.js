const Telegraf = require('telegraf');
const Markup = require("telegraf/markup");
const Stage = require("telegraf/stage");
const session = require("telegraf/session");
const WizardScene = require("telegraf/scenes/wizard");

var nodemailer = require('nodemailer');

const bot = new Telegraf('1964075051:AAEnaiTI6yd-3OydWFMH0m6wLg0BpSN4OAk')

bot.start(ctx => {
  ctx.reply(
    `Hola ${ctx.from.first_name}, como estas???, este es un bot para enviar email`,
    Markup.inlineKeyboard([
      Markup.callbackButton("enviar Mail", "LOVE_CALCULATE")
    ]).extra()
  );
});

const loveCalculate = new WizardScene(
  "love_calculate",
  ctx => {
    ctx.reply("ingrese el correo de envio");
    return ctx.wizard.next();
  },
  ctx => {
    ctx.wizard.state.yourName = ctx.message.text;
    ctx.reply(
      "ingrese el mensaje que quiere enviar."
    );
    return ctx.wizard.next();
  },
  ctx => {
    const partnerName = ctx.message.text;
    const yourName = ctx.wizard.state.yourName;

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'guilleamazon.2016@gmail.com',
          pass: '153221081'
      }
    });

    var mailOptions = {
      from: 'guillermoguzman.2016@gmail.com',
      to: yourName,
      subject: 'Asunto',
      text: partnerName
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error){
          console.log(error);
          //res.send(500, err.message);
      } else {
          console.log("Email sent");
          ctx.reply('mensaje enviado');
          //res.status(200).jsonp(req.body);
      }
  })
    

    return ctx.reply('mensaje enviado');
  }
);

const stage = new Stage([loveCalculate], { default: "love_calculate" });
bot.use(session());
bot.use(stage.middleware());
bot.launch();
