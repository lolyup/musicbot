module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - playing ${track.title} into ${message.member.voice.channel.name} ...`);
};