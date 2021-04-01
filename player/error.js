module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - no music being played idiot !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - get in a vc genius`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - make me admin or i aint playing no songs`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Error bruh : ${error}`);
    };
};
