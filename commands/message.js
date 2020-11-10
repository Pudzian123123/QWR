const Discord = require('discord.js')

exports.run = function(bot, message, args) {
    let sentmessage = args.splice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.sendMessage("Musisz wspomnieć o użytkowniku, do którego chcesz wysłać wiadomość.").catch(console.error);
    if (message.length < 1) return message.channel.sendMessage('Wpisz wiadomość.');
    const embed = new Discord.RichEmbed()
    .setAuthor("Otrzymałeś wiadomość!", message.author.avatarURL)
    .setDescription(`${message.author.tag} wysłał Ci wiadomość wiadomość!`)
    .addField("User", message.author.tag)
    .addField("Message", sentmessage)
    .setFooter("Jak odesłać wiadomość. Idź do dowolnego serwera, który ma tego samego bota i zrób to (message @user Message here")
    .setColor(message.guild.me.displayHexColor)
    user.send({embed, embed}).then(message.channel.send("Message Sent!"))
}
