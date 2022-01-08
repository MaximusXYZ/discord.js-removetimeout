const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
		const fetch = require('node-fetch');
		const ms = require('ms');
		const user = message.mentions.users.first();

		if(!user) return message.channel.send('Kullanıcı etiketle!');

		await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: 0 }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${client.token}`,
			},
		});
		message.channel.send(`${user.username} isimli kişinin zaman aşımı kalktı.`);
	},
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['removetimeout', 'rtimeout'],
	permLevel: 2
};
	exports.help = {
		name: 'rt',
		description: 'zaman aşımını kaldırıyo işte la',
		usage: 'rt @etiket'
	  };
  
