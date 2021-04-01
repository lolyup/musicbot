module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} is added to the queue m8 !`);
};