module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Selection cancalled bruh **cancelled** !`);
    } else message.channel.send(`${client.emotes.error} - Send a valid number between **1** and **${tracks.length}** bruh`);
};