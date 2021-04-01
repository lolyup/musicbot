module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - get in vc`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - no moosic playing`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - moosic already playing oof`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed`);
    },
};