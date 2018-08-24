exports.run = (client, message, args) => {
  
  if (message.author.id !== client.config.ownerID) return message.channel.send("I-I'm sorry, but you're not allowed to do that ._.");
  
  const downtime = args.join(" ");
  
  if (!downtime) message.reply("You must tell me how long I should go into hibernation for.");
	
  const allGuilds = client.guilds.array();
  
message.channel.send({embed: {
    color: 0xf29837,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: `**»** __Notice of Hibernation__ **«**`,
    description: `Hamtaro Bot will now be in hibernation in order to add new features, fix some bugs and give him a rest.\nDuring this time it will be unable to receive commands and send messages to the server.`,
    fields: [{
        name: "**Hibernation Duration**",
        value: `${downtime}`
      },
      {
        name: "**Changelog**",
        value: "See the full changelog [Here](https://www.google.com)"
      },
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Hamtoro Bot © High-Fox 2018"
    }
  }
})
   client.user.setActivity("beautiful dreams...", {type: 'WATCHING'});
   client.destroy();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['maintenance']
};

exports.help = {
  name: "hibernation",
  description: "Puts me in hibernation x-x",
  usage: "hibernation [downtime]"
};
