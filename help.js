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
