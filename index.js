const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short id for: " + url,
        });
    }
    message.reply({
        content: "Hi from bot",
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!");
})

client.login(
    "MTI2MjQ0NDE0MzYyNDU4OTMxMg.GQrLGE.W16qFf4FgMCPDeL5yPvheA_fc-ZV6CzOknYIM0"
);