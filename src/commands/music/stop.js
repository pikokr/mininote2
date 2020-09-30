const { Command } = require("discord-akairo");
const { Message } = require("discord.js");

module.exports = class Play extends Command {
    constructor() {
        super('정지', {
            aliases: ['정지', 'stop'],
            category: 'music'
        })
    }
    /**
     * @param {Message} msg 
     */
    async exec(msg) {
        const player = this.client.music.players.get(msg.guild.id)
        if (!player) return msg.util.reply('재생 안하고있는데요')
        player.destroy()
        return msg.util.send('정지함')
    }
}