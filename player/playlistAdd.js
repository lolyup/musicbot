module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} is been added to the queue (**${playlist.tracks.length}** songs) !`);
};