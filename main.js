const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

const prefix = process.env.prefix;


client.once("ready", ()=> {
    console.log("JustinBot is online");
});

let badwords = ["hotay", "schlick", "pogchamp", "schlik", "shlick", "helb"];

//commands
client.on("message", message => {
    if (message.author.bot) return;
    /*
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    

    if(command === "ping") {
        message.channel.send("pong!");
    } else if (command == "schlick") {
        message.channel.send("stfu");
    }
    
   const text = message.content.toLowerCase();
   badwords.forEach(item => {
    if (text.includes(item)) {
        message.channel.send("Claire please shut the up");
        return;
   }
   });  */


   if (message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).split(" ");
    //console.log("args:");
    //console.log(args);

    command = "";

    if(!(typeof args[1] === 'undefined')) {
        command = args[1].toLowerCase();
    }

    //console.log(command);
    if (args[0] == "help"){
        message.channel.send(prefix+"add <word> \n"+prefix+"remove <word> \n"+prefix+"show");
    } else if (args[0] == "add") {
        if (!badwords.includes(command) && (command !== "" && command !== " ")){
            badwords.push(command);
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
        message.channel.send(command + " removed from dictionary!");
    } else {
        message.channel.send("command not found, type " + prefix + "help to see commands");
    }
    return;
   }

   const text = message.content.toLowerCase();
   badwords.forEach(item => {
    if (text.includes(item)) {
        message.channel.send("please shut the up");
        return;
   }
   });  

    
   
});























client.login(process.env.DISCORD_TOKEN);