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
		    .addField('__**Ich störe mal kurz, hier sind alle wichtigen IPs etc.:**__', ':arrow_right: *Unsere FiveM Server IP ist 134.255.220.185:32024, oder einfach nach Simreports suchen*\n\n:arrow_right: Unsere TS3 IP ist SRB.zap-ts3.com\n\n:arrow_right: Unser Discord-Invite-Link ist https://discord.gg/eNcCHYA1\n\n**:small_blue_diamond: Viel Spaß noch auf SimReportsRP!** :small_blue_diamond:')
			.setColor('ORANGE')
		wchannel.sendEmbed(embed)
	}
	
	if(message.content.startsWith(prefix + 'admin')){
		
		message.delete();

	const banned = '215488160304463872';
	let achannel = client.channels.get('517449527947427851')
	
	nachricht = message.content.slice (6);
	
	if(message.author.bot)return;
	if(message.author.id === banned){
		var embed = new Discord.RichEmbed(embed)
		  .addField('Du wurdest von der anonymen Nachrichtenfunktion ausgeschlossen', 'Du wurdest vermutlich gebannt, da du die Regeln missachtest hast')
		  .addField('Du denkst das ist zu unrecht?', 'Dann schreibe eine Nachricht in den Support-Channel und achte darauf, dass du die Uhrzeit deiner letzten Admin-Anfrage dazu schreibst.')
		  .setColor('RED')
		message.author.sendEmbed(embed)
		
		return;
	}
	
	var embed = new Discord.RichEmbed()
	     .addField('Ein User möchte anonym etwas melden. Hier ist das Problem:', '=> ' + nachricht)
		 .addField('Die ID der Anfrage ist:', '' + message.author.id)
		 .setColor('RED')
	achannel.sendEmbed(embed)
	
	var embed = new Discord.RichEmbed()
	    .addField(':rotating_light: Bestätigung deiner Adminanfrage :rotating_light:', 'Deine Anfrage wurde anonym gesendet und ein Admin kümmert sich so schnell wie möglich darum!')
		.setColor('RED')
	message.author.sendEmbed(embed)
	
	}

});

client.on('guildMemberAdd', member => {                 //wenn user beitritt
	
	let wchannel = client.channels.get('417297950889213955')
		
    var embed = new Discord.RichEmbed()
	    
		.addField(':rotating_light: Herzlich Willkommen auf dem Discord Server von SimReportsRP :rotating_light: ', 'Hier sind alle wichtigen Infos für einen guten Start bei uns:')
		.addField(':arrow_right: TeamSpeak 3 IP:', 'SRB.zap-ts3.com')
		.addField(':arrow_right: FiveM-Server IP:', '185.249.197.141:30120\nlink: https://servers.fivem.net/#/servers/detail/185.249.197.141:30120')
		.addField(':arrow_right: Internetseite von SimReportsRP:', 'simreportsrp.com\nlink: http://simreportsrp.com/index.html')
		.addField(':arrow_right: Internetseite von unserem Partner Top Mods:', 'www.topmods.de/wpnew/\nlink: https://topmods.de/wpnew/')
		.addField(':arrow_right: Um den Server zu unterstützen kannst du gerne hier spenden:', 'https://paypal.me/pools/c/82u1RI28aZ')
		.addField(':exclamation: Bei Fragen oder Problemen folgendes machen: :exclamation:', 'Im TS3 in den Support-Raum kommen oder hier auf dem Discord-Server in den Support-Channel schreiben')

		.addField(':star: Viel Spaß :star:', 'Wünscht dir dein SimReportsRP Team')
		
		.setColor('GREEN')
		
	member.sendEmbed(embed);                      //Nachricht mit allen infos (Privat)
	

	member.addRole('470449935700066305')
	
	     var embed = new Discord.RichEmbed()

		.addField(':fire: Willkommen auf dem Discord-Server von SimReportsRP :fire:', ':diamonds: Ich habe dir Privat alle Infos für einen guten Start bei uns geschickt :diamonds:' + member)
		
		.setColor('GREEN')
		
	wchannel.sendEmbed(embed);                   //Nachricht mit join info (Server)
	
});

client.login(process.env.BOT_TOKEN);          //Mit token eingloggen (Heroku)
