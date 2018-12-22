const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
console.log(`BOT ONLINE `) 
    console.log(`Logged as ${client.user.tag}`)
console.log(`BOT ${client.user.tag}`)
})
console.log("Savage");



client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (20000 - 5000 + 2)) + 15000
  let words = [` لكل جوآد كبّوه " .. 
نحن لآ نفشل عندمآ نتعثر ، وإنمآ نفشل عندمآ نتوقف ..
فهآ نحن عُدنآ بحب أكثر وسيرفر جديد وروح أقوى ..
عُدنآ لموآصلة السير من نقطة الإنطلآق نحو القمة 
You're In  **Poiint** ,  Welcome ..
 https://discord.gg/U5YWs2u  `,` **
 أيُها المُنهك,قد تكُون الحياة غير مُنصِفة مَعك 
وفي كُل مرة تُحاول النهُوض فيها تُسقِطكَ أرضاً 
لا تجزع وكُن قوياً إجمع شُتاتك وقِف مُستقيماً إصبر 
قد يأتي مساءً يمحِي وجع الأمس وفرحاً يُنسيك مُر الأيام 
طابَ مسائك وطابت أوجاعُ  | تنورنا يبعدي قلبي.
Welcome to **Point**.
:fish_cake:  - https://discord.gg/U5YWs2u
** `,`
نحن بعيدون جداً من حيث المسافات والأميال :purple_heart: 
، ولكن يمكن للكلمات أن تؤثر فينا وتحرّك مشاعرنا :first_quarter_moon_with_face: 
، ويمكن للأفكار أن تجلب لنا الابتسامات. :speaking_head: 
حياكم سيرفر **Point** : 
https://discord.gg/U5YWs2u
  LINK : https://discord.gg/U5YWs2u  `,`
في عالم الديسكورد وبين حناياه ، وبعد
      مضي 3 سنوات أُفتتح سيرفر **Point**
الاختلاف ، التجديد ، حياك معنا بتكون
اضافة جديدة وحلوه لسيرفرنا حياك
https://discord.gg/U5YWs2u   `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
20000})
 
 
 
client.login(process.env.BOT_TOKEN);
