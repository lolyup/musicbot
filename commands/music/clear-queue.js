module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - u aint in vc boi`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - get in same vc`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - no music currently playing`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - there is only one song in  queue.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - the queue has  been **removed** `);
    },
};