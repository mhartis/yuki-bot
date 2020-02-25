//mhiyako hates coding, so here's what we got
const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');
const client = new Discord.Client()
const queue = new Map();
const events = require('events').EventEmitter.defaultMaxListeners = 25;
const cuteresponses = ["I found that nice of you to say.", "Ok.", "Nice of you to say.", "I see.", "Thanks."];
const yayornay = ["Yes.", "No."];

//las moderations.
client.on('message', async message => {
	if (message.content.startsWith("!profile1")) { //why is this command in particular in moderation? idk i just put it there lol
		if (!message.member.hasPermission("ADMINISTRATOR"))
		return;
		client.user.setAvatar('./avatars/1.png');
	}
	else if (message.content.startsWith("!profile2")) { //why is this also here? look i wanted to add this for no good reason alright
		if (!message.member.hasPermission("ADMINISTRATOR"))
		return;
		client.user.setAvatar ('./avatars/2.png');
	}
	else if (message.content.startsWith("!profile3")) {
		if (!message.member.hasPermission("ADMINISTRATOR"))
		return;
		client.user.setAvatar ('./avatars/3.png');
	}
	else if (message.content.startsWith("!profilechristmas")) {
		if (!message.member.hasPermission("ADMINISTRATOR"))
		return;
		client.user.setAvatar ('./avatars/christmas yuki.png');
	}
	else if (message.content.startsWith("!kick")) {

		if (!message.member.hasPermission("ADMINISTRATOR"))
		var member = message.mentions.members.first();
		member.kick().then((member) => {
			message.channel.send("<:HakaseLaughing:678326243027976202> " + member.displayName + " has been kicked successfully.");
		}).catch(() => {
			message.channel.send("Access is denied.");
		});
	}
	else if (message.content.startsWith("!ban")) {
	
		if (!message.member.hasPermission("ADMINISTRATOR"))
			return;

		var member = message.mentions.members.first();
		member.ban().then((member) => {
			message.channel.send("<:HakaseLaughing:678326243027976202> " + member.displayName + " has been banned successfully.");
		}).catch(() => {
			message.channel.send("Access is denied.");
		});
	}
	else if (message.content.startsWith("!nullify")) {

		if (!message.member.hasPermission("ADMINISTRATOR"))
			return;

		// Easy way to get member object though mentions.
		var member = message.mentions.members.first();
		// ban
		member.ban().then((member) => {
			// Successmessage
			message.channel.send("" + member.displayName + " had their data link nullified.");
		}).catch(() => {
			// Failmessage
			message.channel.send("Access is denied.");
		});
	}
	else if (message.content.startsWith("!mute")) {

		if (!message.member.hasPermission("ADMINISTRATOR"))
			return;

		var role = message.guild.roles.find(r => r.name === "muted lolololol");
		var member = message.mentions.members.first();
		// ban
		member.addRole(role).then((member) => {
			// Successmessage
			message.channel.send("" + member.displayName + " has been muted successfully."); //no temp mute role, sorry.
		}).catch(() => {
			// Failmessage
			message.channel.send("Access is denied.");
		});
	}
	else if (message.content.startsWith("!unmute")) {

		if (!message.member.hasPermission("ADMINISTRATOR"))
		return;

		var role = message.guild.roles.find(r => r.name === "muted lolololol");

		var member = message.mentions.members.first();
		member.removeRole(role).then((member) => {
			// Successmessage
			message.channel.send("" + member.displayName + " has been unmuted successfully."); //just removes a role.. simple.
		}).catch(() => {
			// Failmessage
			message.channel.send("Access is denied.");
		});
	}
});

//status
client.once('ready', () => {
	console.log('YUKI.N> READY');
	var channel = client.channels.get('675623840554156033');
	channel.send("READY");
	client.user.setActivity('the world revolve.', { type: 'WATCHING' });
});

client.once('reconnecting', () => {
	console.log('Reconnecting.');
});

client.once('disconnect', () => {
	console.log('Disconnected.');
});

//the word filter. you can add more if you like!
client.on('message', async message => {
  let blacklisted = ['chink', 'nigger', 'faggot', 'furfag', 'nigga', 'tranny'] 

  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
    if (foundInText) {
      message.delete();
  }
});

//useless commands that i've made for fun!
client.on('message', msg => {
	if(msg.content.toLowerCase().includes("fuck yuki"))
	{
	msg.channel.send('I will nullify your data link.');
	return;
	}
 else if(msg.content === 'nagato')
	{
	msg.channel.send({files: ["./images/yuki/nagato.jpg"]});
	return;
	}
 else if(msg.content.toLowerCase().startsWith("wasshoi")) 
	{
	msg.channel.send('Washoshoi!');
	return;
	}
 else if(msg.content.toLowerCase().startsWith("yuki is cute"))
	{
	var response = cuteresponses [Math.floor(Math.random()*cuteresponses .length)];
	msg.channel.send(response).then().catch(console.error);
	return;
	}
 else if(msg.content.toLowerCase().startsWith("!yesorno"))
	{
	 var response = yayornay [Math.floor(Math.random()*yayornay .length)];
	 msg.channel.send(response).then().catch(console.error);
	 return;
	}
 else if(msg.content.toLowerCase().includes("!yayornay"))
	{
	 var response = yayornay [Math.floor(Math.random()*yayornay .length)];
	 msg.channel.send(response).then().catch(console.error);
	 return;
	}
 else if(msg.content.toLowerCase().startsWith("!kyonmonologue")) //now hold up.. did i forget to add a cooldown?
	{
		msg.channel.send("Okay, asking somebody how long they believed in Santa Claus is so stupid, you can't even consider the topic suitable for idle conversation. But if you still wanna know how long I believed in some old fat guy who wears a funky red suit, I can tell you this: I've never believed in him, ever. The Santa that showed up at my kindergarten Christmas festival, I knew he was fake. And I never saw mommy kissing Santa or anything. But I have to say, that even as a little kid, I knew better than to believe in some old man that only worked one day a year. Now, having said that, it wasn't until I got older that I realized that aliens, time travelers, ghosts, monsters, espers, the evil syndicates and the anime/manga/fantasy flick heroes that fight said evil syndicates, were also fake. Okay, I guess I always knew those things were bogus, I just didn't wanna admit it. All I ever wanted was for an alien, time traveler, ghost, monster, esper, evil syndicate, or the hero that fought them to just appear and say 'Hey'. Unfortunately, reality is a hard road indeed. Yep, you gotta admit, the laws of physics definitely puts a damper on things. I even stopped watching those TV shows about aliens and ghosts and stuff. Aliens, time travelers, espers; of course they don't exist, but a little part of me wishes that they did. I guess I've grown up and realized I can think about those things and still accept reality. But by the time I got out of junior high, I pretty much outgrew that kind of stuff and I guess I got used to the idea of living in an ordinary world. Just like that, I was in high school...that's when I met her.");
		return;
	}
});

//self role giver! cannot give admin roles because that is BAD TO DO!!!
client.on('message', msg => {
	
	if(msg.content.toLowerCase().startsWith("!role"))
	{
		var args = msg.content.toLowerCase().split(" ");
		console.log(args);
		if(args[1] === 'madomado')
		{
			addUserRole('MadoMado Purity', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'homuhomu')
		{
			addUserRole('HomuHomu Purity..?', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'haruhi')
		{
			addUserRole('Haruhi', msg);
			msg.channel.send('Done.', {files: ["./images/haruhi/haruhi.gif"]});
		}
		else if(args[1] === 'kyon')
		{
			addUserRole('Kyon', msg);
			msg.channel.send('Done.', {files: ["./images/kyon/kyon sleepin.gif"]});
		}
		else if(args[1] === 'mikuru')
		{
			addUserRole('Mikuru', msg);
			msg.channel.send('Done.', {files: ["./images/mikuru/guns.gif"]});
		}
		else if(args[1] === 'koizumi')
		{
			addUserRole('Koizumi', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'yuki')
		{
			addUserRole('Yuki', msg);
			msg.channel.send('Done.', {files: ["./images/yuki/yuki slurp.gif"]});
		}
		else if(args[1] === 'madoka')
		{
			addUserRole('Madoka', msg);
			msg.channel.send('Done.', {files: ["./images/madoka/oh.gif"]});
		}
		else if(args[1] === 'homura')
		{
			addUserRole('Homura', msg);
			msg.channel.send('Done.', {files: ["./images/homura/yeah nice train.gif"]});
		}
		else if(args[1] === 'sayaka')
		{
			addUserRole('Sayaka', msg);
			msg.channel.send('Done.', {files: ["./images/sayaka/ah yes.gif"]});
		}
		else if(args[1] === 'kyouko')
		{
			addUserRole('Kyouko', msg);
			msg.channel.send('Done.', {files: ["./images/kyouko/DANCE_MORE.gif"]});
		}
		else if(args[1] === 'mami')
		{
			addUserRole('Mami', msg);
			msg.channel.send('Done.', {files: ["./images/mami/praise me.gif"]});
		}
		else
		{
			msg.channel.send('Not an existing role.')
			return;
		}
	}
});

//self role remover!!!
client.on('message', msg => {
	
	if(msg.content.toLowerCase().startsWith("!remove"))
	{
		var args = msg.content.toLowerCase().split(" ");
		console.log(args);
		if(args[1] === 'madomado')
		{
			removeUserRole('MadoMado Purity', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'homuhomu')
		{
			removeUserRole('HomuHomu Purity..?', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'haruhi')
		{
			removeUserRole('Haruhi', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'kyon')
		{
			removeUserRole('Kyon', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'mikuru')
		{
			removeUserRole('Mikuru', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'koizumi')
		{
			removeUserRole('Koizumi', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'yuki')
		{
			removeUserRole('Yuki', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'madoka')
		{
			removeUserRole('Madoka', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'homura')
		{
			removeUserRole('Homura', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'sayaka')
		{
			removeUserRole('Sayaka', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'kyouko')
		{
			removeUserRole('Kyouko', msg);
			msg.channel.send('Done.');
		}
		else if(args[1] === 'mami')
		{
			removeUserRole('Mami', msg);
			msg.channel.send('Done.');
		}
		else
		{
			msg.channel.send('Not an existing role.')
			return;
		}
	}
});

//functions! who doesn't like functions..
function addUserRole(roleName, message)
{
	var role = message.guild.roles.find('name', roleName);
	message.member.addRole(role.id);
	return;
}

function removeUserRole(roleName, message)
{
	var role = message.guild.roles.find('name', roleName);
	message.member.removeRole(role.id);
	return;
}

//here's the implemented music bot
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}role`)) {
		return;
	} else if (message.content.startsWith(`${prefix}kick`)) {
		return;
	} else if (message.content.startsWith(`${prefix}ban`)) {
		return;
	} else if (message.content.startsWith(`${prefix}nullify`)) {
		return;
	} else if (message.content.startsWith(`${prefix}mute`)) {
		return;
	} else if (message.content.startsWith(`${prefix}unmute`)) {
		return;
	} else if (message.content.startsWith(`${prefix}profile1`)) {
		return;
	} else if (message.content.startsWith(`${prefix}profile2`)) {
		return;
	} else if (message.content.startsWith(`${prefix}profile3`)) {
		return;
	} else if (message.content.startsWith(`${prefix}profilechristmas`)) {
		return;
	} else if (message.content.startsWith(`${prefix}kyonmonologue`)) {
		return;
	} else if (message.content.startsWith(`${prefix}remove`)) {
		return;
	} else if (message.content.startsWith(`${prefix}yesorno`)) {
		return;
	} else if (message.content.startsWith(`${prefix}yayornay`)) {
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('Invalid.')
		return;
	}
});

//bot logging. simple, but not advanced. this sends a message to the general chat room and the bot log channel.
client.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.find(channel => channel.name === "room-101")
	if (!channel) return;
	
	channel.send(`Welcome, ${member}!`, {files: ["./images/welcome.gif"]})
});

client.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.find(channel => channel.name === "room-201")
	if (!channel) return;
	
	channel.send(`User by the name of ${member} joined.`)
});

client.on('guildMemberRemove', member => {
	
	const channel = member.guild.channels.find(channel => channel.name === "room-201")
	if (!channel) return;
	
	channel.send(`User by the name of ${member} left.`)
});

client.on('guildMemberRemove', member => {
	
	const channel = member.guild.channels.find(channel => channel.name === "room-101")
	if (!channel) return;
	
	channel.send(`User by the name of ${member} left.`)
});

//more functions wow
async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('Join a voice channel.');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('Voice chat permissions are required.');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel.');
	if (!serverQueue) return message.channel.send('There are no songs to skip.');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel.');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(token);
