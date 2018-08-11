module.exports = (client, message, member) => { 
    
    if (client.config.welcomeNewMembers == "false") return;
        
    const channel = message.guild.channels.find('name', client.config.welcome-channel);
    
    if (!channel) return console.log("welcome-channel not found.");
    	channel.send(`Greetings, ${member}. Welcome to the server!`);
};
