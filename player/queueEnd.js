module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - moosic stop because no one in vc`);
};