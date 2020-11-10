const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Zmień głośność aktualnie odtwarzanej muzyki",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Nic nie gra.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 Bieżąca głośność to: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Użyj liczby, aby ustawić głośność.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Użyj liczby między 0 - 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Głośność ustawiona na: **${args[0]}%**`).catch(console.error);
  }
};
