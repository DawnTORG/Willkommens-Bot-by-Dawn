const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")
});


client.on('message', message => {
	
	if(message.content.startsWith('Now playing'))
	{
		message.delete();
	}
	
		else if(message.content.toLowerCase() === prefix + 'goal'){
		
		let dchannel = client.channels.get('417297950889213955')
		
	    var embed = new Discord.RichEmbed()
		    .addField('----Spenden Update----', 'Es wurden 30€/60€ für die Serverkosten dieses Monats gesammelt')
            .addField('Gespendet haben:', 'AVI (30€), ')	
			.setColor('RED')
         dchannel.sendEmbed(embed)
	}
		
	else if(message.content.toLowerCase() === prefix + 'init')
  {
	let dchannel = client.channels.get('417297950889213955')
    //var d = new Date();
    //var n = d.getHours();
	
    message.channel.send("Donation goal startet...");
	
    var interval = setInterval (function () {
        
		var embed = new Discord.RichEmbed()
		    .addField('----Spenden Update----', 'Es wurden 30€/60€ für die Serverkosten dieses Monats gesammelt')
            .addField('Gespendet haben:', 'AVI (30€), ')	
			.setColor('RED')
        dchannel.sendEmbed(embed)
		}, 50000 * 1000);

  }
});

client.on('guildMemberAdd', member => {
	
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
		
		.setColor('RED')
		
	member.sendEmbed(embed);
	

	member.addRole('470449935700066305')
	
	     var embed = new Discord.RichEmbed()

		.addField('Willkommen auf dem Discord-Server von SimReportsRP', 'Ich habe dir Privat alle Infos für einen guten Start bei uns geschickt.' + member)
		
		.setColor('RED')
		
	wchannel.sendEmbed(embed);
	
});


client.login(process.env.BOT_TOKEN);
