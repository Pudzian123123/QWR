const Discord = require('discord.js')

exports.run = function(bot, message, config, args){
    const embed = new Discord.RichEmbed()
    .setTitle("🖥 | Raport o stanie Botrappa", bot.user.avatarURL)
    .setColor(message.guild.me.displayHexColor)
    .setFooter(`The stats of Botrappa`)
    .setTimestamp()
    .setDescription('Wszystkie statystyki dla Botrappy')
    .addField("Ping", `${bot.ping} ms`, true)
    .addField('Pamięć Ram', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
    .addField('Serwery', `${bot.guilds.size}`)
    .addField("Dostępność", (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes", true)
    .addField("Członkowie", bot.users.size, true)
    .addField("Kanały", bot.channels.size, true)
    .addField("Node wersja", process.version, true)
    .addField("CPUs", require('os').cpus().length)
    message.channel.send({embed, embed})
}