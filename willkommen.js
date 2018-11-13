const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")               //Konsolen Log
});

client.on('message', message => {            //Liest nachrichten
	
	if(message.content.startsWith('Now playing'))
	{
		message.delete();                                     //Musik Bot Nachrichten löschen
	}
		
	
	if(message.content.toLowerCase() === prefix + 'info'){
		
		let wchannel = client.channels.get('417297950889213955')
		
		if(message.author.bot)return;
		
		var embed = new Discord.RichEmbed()
		    .addField('__**Ich störe mal kurz, hier sind alle wichtigen IPs etc.:**__', '*Unsere FiveM Server IP ist 134.255.220.108:32024, oder einfach nach Simreports suchen*\n\nUnsere TS3 IP ist srb.zap-ts3.com\n\nUnser Discord-Invite-Link ist https://discord.gg/eNcCHYA1\n\n**Viel Spaß noch auf SimReportsRP!**')
			.setColor('ORANGE')
		wchannel.sendEmbed(embed)
	}

});

client.on('guildMemberAdd', member => {                 //wenn user beitritt
	
	let wchannel = client.channels.get('417297950889213955')
		
    var embed = new Discord.RichEmbed()
	    
		.addField('Herzlich Willkommen auf dem Discord Server von SimReportsRP', 'Hier sind alle wichtigen Infos für einen guten Start bei uns:')
		.addField('TeamSpeak 3 IP:', 'srb.zap-ts3.com ')
		.addField('FiveM-Server IP:', '185.249.197.141:30120\nlink: https://servers.fivem.net/#/servers/detail/185.249.197.141:30120')
		.addField('Internetseite von SimReportsRP:', 'simreportsrp.com\nlink: http://simreportsrp.com/index.html')
		.addField('Internetseite von unserem Partner Top Mods:', 'www.topmods.de/wpnew/\nlink: https://topmods.de/wpnew/')
		.addField('Um den Server zu unterstützen kannst du gerne hier spenden:', 'https://paypal.me/pools/c/82u1RI28aZ')
		.addField('Bei Fragen oder Problemen folgendes machen:', 'Im TS3 in den Support-Raum kommen oder hier auf dem Discord-Server in den Support-Channel schreiben')

		.addField('Viel Spaß', 'Wünscht dir dein SimReportsRP Team')
		
		.setColor('GREEN')
		
	member.sendEmbed(embed);                      //Nachricht mit allen infos (Privat)
	

	member.addRole('470449935700066305')
	
	     var embed = new Discord.RichEmbed()

		.addField(':fire: Willkommen auf dem Discord-Server von SimReportsRP :fire:', 'Ich habe dir Privat alle Infos für einen guten Start bei uns geschickt ' + member)
		
		.setColor('GREEN')
		
	wchannel.sendEmbed(embed);                   //Nachricht mit join info (Server)
	
});

client.login(process.env.BOT_TOKEN);          //Mit token eingloggen (Heroku)
