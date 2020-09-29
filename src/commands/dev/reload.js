const { Command, CommandHandler } = require("discord-akairo");
const { Message } = require('discord.js');

module.exports = class Reload extends Command {
    constructor() {
        super('reload', {
            ownerOnly: true,
            aliases: ['reload', '리로드', 'ㄹㄹㄷ'],
            category: 'dev'
        })
    }

    /**
     * @param {Message} msg 
     */
    async exec(msg) {
        /**
         * @type {CommandHandler}
         */
        this.client.commandHandler.reloadAll()
        this.client.inhibitorHandler.reloadAll()
        this.client.listenerHandler.reloadAll()
        await msg.react('✔')
    }
}