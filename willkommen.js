const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")
});

client.on('guildMemberAdd', member => {

member.send('```fix\nHerzlich Willkommen auf dem Discord Server von SimReportsRP\n```\n' +
'```css\nHier sind alle wichtigen Infos für einen Guten Start bei uns:\n```\n' +
'```css\nTeamSpeak 3 IP: [ simreportsrp.zap-ts3.com ]\n\nFiveM-Server IP: [ 185.249.197.141:30120 ] | link:```https://servers.fivem.net/#/servers/detail/185.249.197.141:30120\n```css\n\n\nInternetseite von SimReportsRP: [ simreportsrp.com ] | link:```http://simreportsrp.com/index.html\n```css\nInternetseite von unserem Partner Top Mods: [ www.topmods.de/wpnew/ ] | link:```https://topmods.de/wpnew/\n```css\nUm den Server zu unterstützen kannst du gerne spenden | link zum Spenden: ```https://paypal.me/pools/c/82u1RI28aZ\n\n\n```css\nBei Fragen oder Problemen bitte im TS in den Support-Raum kommen oder hier auf dem Discord in den Support-Channel schreiben\n```\n\n' +
'```fix\nViel Spaß auf dem Server wünscht dir dein SimReportsRP-Team\n```\n');

member.addRole('486083148254543892')
});

client.on('message', message => {
	
	if(message.content.startsWith('Now Playing'))
	{
		message.delete();
	}
});


client.login(process.env.BOT_TOKEN);
