module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ya arent in a vc son`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - no music  playing`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - eepeat mode **disabled** `);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - repeat mode **enabled** the whole queue will be repeated endlessly `);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - repeat mode **disabled** `);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** the  moosic will be repeated endlessly`);
            };
        };
    },
};