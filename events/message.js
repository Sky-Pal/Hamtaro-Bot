module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  let cmd;
  if (message.client.commands.has(command)) {
    cmd = message.client.commands.get(command);
  } else if (message.client.aliases.has(command)) {
    cmd = message.client.commands.get(message.client.aliases.get(command));
  }

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return message.channel.send("I-I don't recognise that command!");

  // Run the command
  cmd.run(client, message, args);
};
