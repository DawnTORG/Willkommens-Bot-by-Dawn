const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")               //Konsolen Log
});

client.on('message', msg => {            //Liest nachrichten
	
	if(msg.content.startsWith('Now playing'))
	{
		msg.delete();                                     //Musik Bot Nachrichten löschen
	}
	
       if(msg.content.toLowerCase() === prefix + 'status'){          //check 
		msg.channel.send('```\n Checked GitHub status. Status: WORKING \n Checked Code for faults. Status: WORKING \n Checked Heroku status. Status: WORKING```')
	}
	
	if(msg.content.startsWith(prefix + 'admin')){              //Anonyme Admin nachrichten funktion / 03-07-03
		
		msg.delete();

	const banned = '';             //gebannte leute / M-HÜL-GK
	let achannel = client.channels.get('517449527947427851')                 //define achannel = channel für nachricht an admins
	
	nachricht = msg.content.slice (6);
	
	if(msg.author.bot)return;
	if(msg.author.id === banned){           //überprüfen ob user banned / J.S.
		var embed = new Discord.RichEmbed(embed)
		  .addField('Du wurdest von der anonymen Nachrichtenfunktion ausgeschlossen', 'Du wurdest vermutlich gebannt, da du die Regeln missachtest hast')
		  .addField('Du denkst das ist zu unrecht?', 'Dann schreibe eine Nachricht in den Support-Channel und achte darauf, dass du die Uhrzeit deiner letzten Admin-Anfrage und deine Anfrage id (' + msg.author.id + ') dazu schreibst.')
		  .setColor('RED')
		msg.author.sendEmbed(embed)
		
		return;
	}
	
	//Falls nicht gebannt: (M, S, M, N)
	
	var embed = new Discord.RichEmbed()
	     .addField('Ein User möchte anonym etwas melden. Hier ist das Problem:', '=> ' + nachricht)
		 .addField('Die ID der Anfrage ist:', '' + msg.author.id)
		 .setColor('RED')
	achannel.sendEmbed(embed)
	
	var embed = new Discord.RichEmbed()
	    .addField(':rotating_light: Bestätigung deiner Adminanfrage :rotating_light:', 'Deine Anfrage wurde anonym gesendet und ein Admin kümmert sich so schnell wie möglich darum!')
		.setColor('RED')
	msg.author.sendEmbed(embed)
	
	}

	
		if(msg.content.toLowerCase() === prefix + 'info')
	{
		
		msg.delete();
		
		    var embed = new Discord.RichEmbed()
	    
		.addField(':rotating_light: Wie ich sehe brauchst du ein paar Infos :rotating_light: ', ' Hier sind alle wichtigen Ips etc.:')
		.addField(':arrow_right: TeamSpeak 3 IP:', 'SRB.zap-ts3.com')
		.addField(':arrow_right: FiveM-Server IP:', '109.230.235.145:30120\nlink: https://servers.fivem.net/servers/detail/109.230.235.145:30120')
		.addField(':arrow_right: Internetseite von SimReportsRP:', 'www.simreportsrp.de/\nlink: http://www.simreportsrp.de/')
                .addField(':arrow_right: Forum von SimReportsRP:', 'www.simreportsforum.de/\nlink: http://www.simreportsforum.de/')
		.addField(':arrow_right: YouTube-Seite von SimReportsRP:', 'www.youtube.com/channel/UCt7RQcNADxo0hw_xZzMTVNQ\nlink: https://www.youtube.com/channel/UCt7RQcNADxo0hw_xZzMTVNQ')
                .addField(':arrow_right: Twitch-Seite von SimReportsRP:', 'www.twitch.tv/simreportsrp\nlink: https://www.twitch.tv/simreportsrp')
                .addField(':arrow_right: YouTube-Seite von Avitamin:', 'www.youtube.com/channel/UCwnCqcBLRzBHGHMMVXEhHhA\nlink: https://www.youtube.com/channel/UCwnCqcBLRzBHGHMMVXEhHhA')
                .addField(':arrow_right: Twitch-Seite von Avitamin:', 'www.twitch.tv/avita77\nlink: https://www.twitch.tv/avita77')
		.addField(':arrow_right: Internetseite von unserem Partner Top Mods:', 'www.topmods.de/wpnew/\nlink: https://topmods.de/wpnew/')
		.addField(':arrow_right: Um den Server zu unterstützen kannst du gerne hier spenden:', 'https://paypal.me/pools/c/82u1RI28aZ')
		.addField(':exclamation: Bei Fragen oder Problemen folgendes machen: :exclamation:', 'Im TS3 in den Support-Raum kommen oder hier auf dem Discord-Server in den Support-Channel schreiben')
		    
		.addField(':star: Viel Spaß auf SimReportsRP :star:', 'Wünscht dir dein SimReportsRP Team')
		
		.setColor('GREEN')
		
	msg.author.sendEmbed(embed);                      //Nachricht mit allen infos (Privat)
	}
	
	
else if(msg.content.startsWith(prefix + 'announce')){        //Announcment command
		
			let achannel = client.channels.get('417297950889213955')     //Festlegung von Nachrichten channel
			let bchannel = client.channels.get('492729308494954496')     //Festlegung von Befehls Channel
		
			msg.delete();
			if(msg.author.bot){return;}          //falls bot auto = bot => Return
		     else if(msg.channel != bchannel){      //Falls channel ist nicht Befehlschannel
			
			var embed = new Discord.RichEmbed()
			
			.addField('Dein Versuch den Befehl !announce zu benutzen ist aus folgendem Grund fehlgeschlagen', 'Dir fehlen die nötigen Berechtigungen oder du hast den Befehl in dem Falschen Channel benutzt')
			.setColor('RED')
			
			msg.author.sendEmbed(embed);
			
			return;
			}
			 
    nachricht = msg.content.slice (9);
	
    achannel.sendMessage('@everyone' + nachricht);
	
	return;
	}
	
});

client.on('guildMemberAdd', member => {                 //wenn user beitritt
	
	let wchannel = client.channels.get('563089119647891483')
		
    var embed = new Discord.RichEmbed()
	    
		.addField(':rotating_light: Herzlich Willkommen auf dem Discord Server von SimReportsRP :rotating_light: ', 'Hier sind alle wichtigen Infos für einen guten Start bei uns:')
		.addField(':arrow_right: TeamSpeak 3 IP:', 'SRB.zap-ts3.com')
		.addField(':arrow_right: FiveM-Server IP:', '109.230.235.145:30120\nlink: https://servers.fivem.net/servers/detail/109.230.235.145:30120')
		.addField(':arrow_right: Internetseite von SimReportsRP:', 'simreportsrp.de/\nlink: http://www.simreportsrp.de/')
                .addField(':arrow_right: Forum von SimReportsRP:', 'www.simreportsforum.de/\nlink: http://www.simreportsforum.de/')
                .addField(':arrow_right: YouTube-Seite von SimReportsRP:', 'www.youtube.com/channel/UCt7RQcNADxo0hw_xZzMTVNQ\nlink: https://www.youtube.com/channel/UCt7RQcNADxo0hw_xZzMTVNQ')
                .addField(':arrow_right: Twitch-Seite von SimReportsRP:', 'www.twitch.tv/simreportsrp\nlink: https://www.twitch.tv/simreportsrp')
                .addField(':arrow_right: YouTube-Seite von Avitamin:', 'www.youtube.com/channel/UCwnCqcBLRzBHGHMMVXEhHhA\nlink: https://www.youtube.com/channel/UCwnCqcBLRzBHGHMMVXEhHhA')
                .addField(':arrow_right: Twitch-Seite von Avitamin:', 'www.twitch.tv/avita77\nlink: https://www.twitch.tv/avita77')
		.addField(':arrow_right: Internetseite von unserem Partner Top Mods:', 'www.topmods.de/wpnew/\nlink: https://topmods.de/wpnew/')
		.addField(':arrow_right: Um den Server zu unterstützen kannst du gerne hier spenden:', 'https://paypal.me/pools/c/82u1RI28aZ')
		.addField(':exclamation: Bei Fragen oder Problemen folgendes machen: :exclamation:', 'Im TS3 in den Support-Raum kommen oder hier auf dem Discord-Server in den Support-Channel schreiben')

		.addField(':star: Viel Spaß auf SimReportsRP :star:', 'Wünscht dir dein SimReportsRP Team')
		
		.setColor('GREEN')
		
	member.sendEmbed(embed);                      //Nachricht mit allen infos (Privat)
	

	member.addRole('470449935700066305')
	
	     var embed = new Discord.RichEmbed()

		.addField(':fire: Willkommen auf dem Discord-Server von SimReportsRP :fire:', ':oncoming_police_car: Ich habe dir Privat alle Infos für einen guten Start bei uns geschickt :oncoming_police_car:' + member)
		
		.setColor('GREEN')
		
	wchannel.sendEmbed(embed);                   //Nachricht mit join info (Server)
	
});

client.login(process.env.BOT_TOKEN);          //Mit token eingloggen (Heroku)
