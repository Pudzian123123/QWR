module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.send("Najpierw musisz dołączyć do kanału głosowego!").catch(console.error);
      return;
    }

    return true;
  }
};
