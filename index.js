const { Client, Intents } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS"] });
const welcome = require('./functions/welcome');
//benvenuto
welcome(client);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.token);