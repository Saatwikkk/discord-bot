const { REST, Routes } = require('discord.js');

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTI2MjQ0NDE0MzYyNDU4OTMxMg.GQrLGE.W16qFf4FgMCPDeL5yPvheA_fc-ZV6CzOknYIM0");

  (async() => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands("1262444143624589312"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}) ();