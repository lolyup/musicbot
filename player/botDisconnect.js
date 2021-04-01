module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} -  music stopped because i have been disconnected`);
};