const Discord = require('discord.js')
module.exports = (client,channel) => {
    client.on("guildMemberAdd", member => {
        if (member.guild.id === ! '708969413151555614') return;
        const welcomechannel = member.guild.channels.cache.find(channel => channel.id === "594268142499266698");
        let benvenuto = new Discord.MessageEmbed()
            .setColor(`#007FFF`)
            .setDescription(`**Nuova entrata** ${member} è Appena Entrato/a nel server, dategli il Benvenuto!`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/708969413151555614/899334817106259968/kung-fu-panda-karate.gif`)
        member.send(`Benvenuto nel Server`)
        welcomechannel.send(benvenuto);
        welcomechannel.send(`${member}`)
    })

    client.off("guildMemberRemove", member => {
        const goodbyechannel = member.guild.channels.cache.find(channel => channel.id === channel);
        if (member.guild.id === ! '594268142490877957') return;
        let addio = new Discord.MessageEmbed()
            .setColor(`#E41B17`)
            .setThumbnail(`https://cdn.discordapp.com/emojis/635934643413319725.gif?v=1`)
            .setDescription(`Avevo detto ad ${member} di fare attenzione ai cactus selvaggi...`)
        goodbyechannel.send(addio)
    })
}