const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token
const prefix = ("_");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('🆘 _help | ➡️ Sur 1 Serveur !').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

if(message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff5858")
    .setTitle("Voici les commandes D'aide")
    .setDescription("Je suis un test")
    .addField("Bonjour")
    .addField("statistiques","Test")
    .setFooter("Menu")
    message.channel.sendMessage(help_embed);
    console.log("Commande help utilisé")
};


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://alexpgm.000webhostapp.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token);
