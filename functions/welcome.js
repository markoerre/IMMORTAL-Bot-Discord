const Discord = require('discord.js')
module.exports = (client) => {

    client.on("guildMemberAdd", member => {
        const welcomechannel = member.guild.channels.cache.find(channel => channel.id === '708969413151555614');
        let benvenuto = new Discord.MessageEmbed()
            .setColor(`#007FFF`)
            .setTitle("**Nuova entrata** ")
            .setDescription(`<@${member.id}> è Appena Entrato/a nel server, dategli il Benvenuto!`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/708969413151555614/899334817106259968/kung-fu-panda-karate.gif`)
        welcomechannel.send({ embeds: [benvenuto] });
    })
}