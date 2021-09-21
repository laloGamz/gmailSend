const Telegraf = require('telegraf');
const session = require('telegraf/session');
const Stage = require('telegraf/stage');
const WizardScene = require('telegraf/scenes/wizard');

const nodemailer = require("nodemailer");

const superWizard = new WizardScene(
  'super-wizard',
  ctx => {
    ctx.reply("Ingrese el mail de destino?");
    ctx.wizard.state.data = {};
    return ctx.wizard.next();
  },
  ctx => {
    ctx.wizard.state.data.name = ctx.message.text;
    ctx.reply('Ingrese su mensaje');
    return ctx.wizard.next();
  },
  ctx => {
    ctx.wizard.state.data.phone = ctx.message.text;
    
    const mails =['golondrinasient@gmail.com','axonzte58@gmail.com','greciatonally@gmail.com','aaronpinzon30q@gmail.com','golondrina202221@gmail.com','fuegocruzado2020@gmail.com','plugin8080@gmail.com','plugin252525@gmail.com','guilleamazon.2016@gmail.com','mexicotierrahackers2020@gmail.com','musicaalairelibre2020@gmail.com','greciatonally@gmail.com','valeriaruiz2300@gmail.com'];
    
    mails.forEach(function myFunction(value) {
      
      var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: value,
          pass: 'Alor_1130'
      }
    });

    var mailOptions = {
      from: value,
      to: ctx.wizard.state.data.name,
      subject: 'Asunto',
      text: ctx.wizard.state.data.phone
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
    
    });

    

    return ctx.scene.leave();
  }
);
const stage = new Stage([superWizard]);

const bot = new Telegraf('1969516967:AAFPXAcbSn3pZHCfcE3MD6rfyMq-sLvLgIA');
bot.use(session());
bot.use(stage.middleware());
bot.command('enviar', ctx => {
  ctx.scene.enter('super-wizard');
});
bot.launch();
