const Discord = require('Discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")
});


client.on('guildMemberAdd', member => {

member.send('```fix\nHerzlich Willkommen auf SimReportsRP.de\n```\n' +
'```css\nHier sind alle wichtigen Infos:\n```\n' +
'```css\nTeamSpeak 3 IP: [ Simreportsrp.de ]\n\nFiveM-Server IP: [ 185.249.197.141:30120 ]\n\nBei Fragen oder Problemen bitte im TS in den Support-Raum kommen oder hier auf dem Discord in den Support-Channel schreiben\n```\n\n' +
'```fix\nViel Spaß auf dem Server wünscht dir dein SimReportsRP-Team\n```\n');

});


client.login(process.env.BOT_TOKEN);
