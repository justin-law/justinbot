const Discord = require("discord.js");
var fs = require('fs');

require("dotenv").config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

var badwords =  fs.readFileSync('words.txt', 'utf8').split('\n');

var usernames = {
    "explodingwater": "Justin",
    "vantage": "Claire",
    "Xodo": "Alex",
    "Ciel0_RD": "Enrique",
    "Santoku": "Trav",
    "Chork": "chork"
}


client.once("ready", ()=> {
    for (var i=badwords.length-1; i>=0; i--) {
        if (badwords[i] === '') {
            badwords.splice(i, 1);
        }
    }
    console.log("JustinBot is online");
});

//commands
client.on("message", message => {
    function editFile() {
        var file = fs.createWriteStream('words.txt');
        file.on('error', function(err) {console.log(err)});
        badwords.forEach(function(v) { file.write(v + '\n'); });
        file.end();
    }

    if (message.author.bot) return;


   if (message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).split(" ");

    var command = "";

    command = message.content.split(' ').slice(1).join(' ').toLowerCase();

    if (args[0] == "help"){
        message.channel.send(prefix+"add <word> \n"+prefix+"remove <word> \n"+prefix+"show");
    } else if (args[0] == "add") {
        if (!badwords.includes(command) && (command !== "" && command !== " ")){
            badwords.push(command);
            editFile();
            message.channel.send(command + " added to dictionary!");
        } else {
            message.channel.send(command + " not added to dictionary!");
        }
        
    } else if (args[0] == "show") {
        let dict = "Words stored: ";
        badwords.forEach(item => {
            dict+=item;
            dict += ", ";
        });
        message.channel.send(dict.slice(0, -2));
    } else if (args[0] == "remove") {
        for (var i=badwords.length-1; i>=0; i--) {
            if (badwords[i] === command) {
                badwords.splice(i, 1);
            }
        }
        editFile();
        message.channel.send(command + " removed from dictionary!");
    } else {
        message.channel.send("command not found, type " + prefix + "help to see commands");
    }
    return;
   }

   const text = message.content.toLowerCase();
   badwords.forEach(item => {
    if (text.includes(item)) {
        message.channel.send(usernames[message.author.username.toString()] + " please shut the up");
        return;
   }
   });      
   
});



client.login(process.env.DISCORD_TOKEN);