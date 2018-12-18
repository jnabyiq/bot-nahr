const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : Randy`)
})





client.on('ready', function() {
setInterval(function() {
var guild = client.guilds.random()
var person = guild.members.filter(m => m.presence.status === 'idle').random()
person.send(` **
في عالم الديسكورد وبين حناياه ، وبعد
      مضي 3 سنوات أُفتتح سيرفر point
الاختلاف ، التجديد ، حياك معنا بتكون
اضافة جديدة وحلوه لسيرفرنا حياك  ** 
https://discord.gg/bZFNsss `)
console.log(`i've send to ${person.username} in server ${guild.name}`)
}, 180000)
})


 
 
 
 
client.login(process.env.BOT_TOKEN);
