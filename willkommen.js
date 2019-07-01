const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")               //Konsolen Log
	client.user.setActivity('!info',);
});

client.on('message', msg => {

	if(msg.author.bot)return;

	let botrole = msg.guild.roles.find("name", "Co-Admin");                       //Rolle für Botbefehle festlegen
	let statuschannel = client.channels.get('492729308494954496')             //define statuschanne = channel für statusnachricht
	let achannel1 = client.channels.get('517452924830613505')                 //define achannel = channel für nachricht von usern
	let achannel2 = client.channels.get('517449527947427851')                //define achannel2 = channel für nachricht an admins
	let bchannel1 = client.channels.get('417297950889213955')               //define bchannel1 = channel für sendung announce nachricht
	let bchannel2 = client.channels.get('492729308494954496')               //define bchannel2 = channel für eingabe announce nachricht

//Status nachfrage

if(msg.content.toLowerCase() === prefix + 'status'){
if(msg.member.roles.has(botrole.id)){ 

if(msg.channel === statuschannel){

 
 msg.channel.send('```\nIch habe alles geprüft und ich sollte einwandfrei funktionieren!\n```')

  return;

}else{

	msg.delete();

	var embed = new Discord.RichEmbed()
	   .addField('Du hast versucht folgenden Befehl auszuführen:', '- ' + msg.content + ' -')
	   .addField('Dein Veruch diesen Befehl auszuführen ist fehlgeschlagen.', 'Der Befehl wurde im falschem channel ausgeführt')
	   .setColor('RED')
	msg.author.sendEmbed(embed)

return;}

}else{

	msg.delete();
	
	var embed = new Discord.RichEmbed()
	   .addField('Du hast versucht folgenden Befehl auszuführen:', '- ' + msg.content + ' -')
	   .addField('Dein Veruch diesen Befehl auszuführen ist fehlgeschlagen.', 'Dir fehlen die benötigten Berechtigungen')
	   .setColor('RED')
	msg.author.sendEmbed(embed)

	return;
}

}

//Anonyme Admin-Anfragen

if(msg.content.startsWith(prefix + 'admin')){ msg.delete();
	nachricht = msg.content.slice (6);
    
    const banned = '';    //Gebannte IDs hier

    if(msg.channel === achannel1){

    if(msg.author.id != banned){

     var embed = new Discord.RichEmbed()
	     .addField('Ein User möchte anonym etwas melden. Hier ist das Problem:', '=> ' + nachricht)
		 .addField('Die ID der Anfrage ist:', '' + msg.author.id)
		 .setColor('ORANGE')
	achannel2.sendEmbed(embed)

	var embed = new Discord.RichEmbed()
	    .addField(':rotating_light: Bestätigung deiner Adminanfrage :rotating_light:', 'Deine Anfrage wurde anonym gesendet und ein Admin kümmert sich so schnell wie möglich darum!')
		.setColor('ORANGE')
	msg.author.sendEmbed(embed)

       return;

    }else{
    	
    var embed = new Discord.RichEmbed()
	   .addField('Du hast versucht folgenden Befehl auszuführen:', '- ' + msg.content + ' -')
	   .addField('Dein Veruch diesen Befehl auszuführen ist fehlgeschlagen.', 'Du wurdest von dem System ausgeschlossen')
	   .setColor('RED')
	msg.author.sendEmbed(embed)


    	return;
    }

    }else {
    	
    var embed = new Discord.RichEmbed()
	   .addField('Du hast versucht folgenden Befehl auszuführen:', '- ' + msg.content + ' -')
	   .addField('Dein Veruch diesen Befehl auszuführen ist fehlgeschlagen.', 'Der Befehl wurde im falschem channel ausgeführt')
	   .setColor('RED')
	msg.author.sendEmbed(embed)

    	return;
    }
}


//Info Nachricht

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
		.addField(':arrow_right: Internetseite von unserem Partner Top Mods:', 'www.topmods.de/wpnew/\nlink: https://topmods.de/wpnew/')
		.addField(':arrow_right: Um den Server zu unterstützen kannst du gerne hier spenden:', 'https://paypal.me/pools/c/82u1RI28aZ')
		.addField(':exclamation: Bei Fragen oder Problemen folgendes machen: :exclamation:', 'Im TS3 in den Support-Raum kommen oder hier auf dem Discord-Server in den Support-Channel schreiben')
		    
		.addField(':star: Viel Spaß auf SimReportsRP :star:', 'Wünscht dir dein SimReportsRP Team')
		
		.setColor('ORANGE')
		
	msg.author.sendEmbed(embed);                      //Nachricht mit allen infos (Privat)
		
        const attachment = new Attachment('http://files.homepagemodules.de/b803193/a_3_bb141438.jpg')

	msg.author.sendMessage(attachment);
	}


//Announce nachrichten

if(msg.content.startsWith(prefix + 'announce')){

	msg.delete();

	nachricht = msg.content.slice (9);

if(msg.member.roles.has(botrole.id)){

if(msg.channel === bchannel2){

    bchannel1.send('@everyone' + nachricht);

    return;

}else{

	 var embed = new Discord.RichEmbed()
	   .addField('Du hast versucht folgenden Befehl auszuführen:', '- ' + msg.content + ' -')
	   .addField('Dein Veruch diesen Befehl auszuführen ist fehlgeschlagen.', 'Der Befehl wurde im falschem channel ausgeführt')
	   .setColor('RED')
	msg.author.sendEmbed(embed)

	return;
}

}else{

	var embed = new Discord.RichEmbed()
	   .addField('Du hast versucht folgenden Befehl auszuführen:', '- ' + msg.content + ' -')
	   .addField('Dein Veruch diesen Befehl auszuführen ist fehlgeschlagen.', 'Dir fehlen die benötigten Berechtigungen')
	   .setColor('RED')
	msg.author.sendEmbed(embed)

	return;
}

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
		.addField(':arrow_right: Internetseite von unserem Partner Top Mods:', 'www.topmods.de/wpnew/\nlink: https://topmods.de/wpnew/')
		.addField(':arrow_right: Um den Server zu unterstützen kannst du gerne hier spenden:', 'https://paypal.me/pools/c/82u1RI28aZ')
		.addField(':exclamation: Bei Fragen oder Problemen folgendes machen: :exclamation:', 'Im TS3 in den Support-Raum kommen oder hier auf dem Discord-Server in den Support-Channel schreiben')

		.addField(':star: Viel Spaß auf SimReportsRP :star:', 'Wünscht dir dein SimReportsRP Team')
		
		.setColor('ORANGE')
		
	member.sendEmbed(embed);                      //Nachricht mit allen infos (Privat)
	
	const attachment2 = new Attachment('http://files.homepagemodules.de/b803193/a_3_bb141438.jpg')

	member.send(attachment2);

	member.addRole('470449935700066305')
	
        wchannel.send(':arrow_down: ' + member + ' :arrow_down:');      //Mention user here bc in embed its not working
	
	var embed = new Discord.RichEmbed()

		.addField(':fire: Willkommen auf dem Discord-Server von SimReportsRP :fire:', ':arrow_right: Schau doch mal in deine Privatnachrichten!')
		.addField(':oncoming_police_car: Dort habe ich dir alle Infos für einen guten Start bei uns geschickt :oncoming_police_car:', ':exclamation: Um diese Infos erneut zu erhalten einfach !info hier im Discord eingeben :exclamation:\n' + member)
		.setColor('GREEN')
		
	wchannel.sendEmbed(embed);                   //Nachricht mit join info (Server)
	
        const attachment = new Attachment('http://files.homepagemodules.de/b803193/a_3_bb141438.jpg')

	wchannel.send(attachment);
	
});

client.login(process.env.BOT_TOKEN);          //Mit token eingloggen (Heroku)
