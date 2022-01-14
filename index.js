const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
let cm1 = false;



client.once("ready", () =>{
    console.log("ready bitch.");
})

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    var prefix = ".";
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    switch(cmd){
        case "hidden":
            msg.channel.send("Oh! Bot the Bot must have sent you here, I am Jonah and I'm BTB's friend. I'm glad that you want to help free BTB. We might be able to find some clues in the source file where you got the console command from... maybe try the numbers somewhere.").then((msg) => {
                setTimeout(async() => {
                    msg.channel.send("You can see my list of commands using `.cmd`");
                }, 1000)
            });
            break;
        case "cmd":
            if(cm1 === true){
                let cmd_em1 = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`hexstr`", "Converts hexadecimal to string and detects hints from the strings", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                msg.channel.send(cmd_em1);
            }
            else{
                let cmd_em = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.")
                msg.channel.send(cmd_em);
            }
            break;
        case "search":
            var s_msg = args.splice(0).join(' ');
            if(!s_msg || s_msg === '-s'){
                let s_syntax = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Search command Syntax")
                .addField("Syntax: ", "`.search -arg nameoffile/nameofelement` replace nameoffile/nameofelement with the actual name.", false)
                .addField("Args (Arguments)[required]:", "`-h` : returns hint if available in the element/file.\n`-i` : returns install module code from the element/file if available. It can be installed using `.getfile`.\n`-enc` : returns enc string if encoded into element/file.", false)
                .addField("How to use args:", "`.search -arg nameoffile/element` can be used as `.search -h examplefile/element` where it would search for a hint in examplefile/element.");
                msg.channel.send(s_syntax);
            }
            if(s_msg.includes("-h")){
                if(s_msg.includes("examplefile/element")){
                    msg.channel.send("Bro that was a damn EXAMPLE, don't waste my processing power, my d's already taking a lot of processing power.");
                }
                if(s_msg.includes("test")){
                    msg.channel.send("aight it works.");
                }
            }
            else if(s_msg.includes("-i")){

            }
            else if(s_msg.includes("-enc")){

            }
            break;
        case "getfile":
            var g_msg = args.splice(0).join(' ');
            if(!g_msg || g_msg === '-s'){
                let g_syntax = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Getfile command Syntax")
                .addField("Syntax: ", "`.getfile -<arg> XXXXXX` replace XXXXXX with the actual 6-digit code. You can add args for specific codes.", false)
                .addField("Args (Arguments)[not required]:", "`-i` : install module attached to the specific code.\n`-d` : Get file in dms instead of this server.", false)
                .addField("How to use args:", "Args are not required with this command, but you have to use `-i` to install modules or else they won't work. `-d` can be used to get the file in your dms if it's a file attachment.", false)
                msg.channel.send(g_syntax);
            }

            if(g_msg.includes("109829")){
                var auth = msg.author;
                if(g_msg.includes("-d")){
                    msg.channel.send("Finding file and getting it...").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Found![type: .txt] Reading and sending file contents in dms...").then((msg) => {
                                setTimeout(async() => {
                                    auth.send(`Content:\n4865792c20696620796f75206172652072656164696e6720746869732c207573652074686520636f64652039383037333420746f2067657420616e20696e7374616c6c206d6f64756c652e206920646f6e2774206b6e6f77207768617420697420646f65732c20627574206920616d207375726520796f752063616e207573652069742c206274622e`);
                                }, 2000)
                            });
                        }, 5000)
                    });
                }
                else{
                    msg.channel.send("Finding file and getting it...").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Found![type: .txt] Reading and sending file contents...").then((msg) => {
                                setTimeout(async() => {
                                    msg.edit(`Content:\n4865792c20696620796f75206172652072656164696e6720746869732c207573652074686520636f64652039383037333420746f2067657420616e20696e7374616c6c206d6f64756c652e206920646f6e2774206b6e6f77207768617420697420646f65732c20627574206920616d207375726520796f752063616e207573652069742c206274622e`);
                                }, 2000)
                            });
                        }, 5000)
                    });
                }
            }

            else if(g_msg.includes("980734")){
                if(g_msg.includes("-i")){
                    if(cm1 === true){
                        msg.channel.send("The module is already installed");
                    }
                    else{
                        msg.channel.send("Finding file and getting it...").then((msg) => {
                            setTimeout(async() => {
                                msg.edit("Found![type: install module] Installing...").then((msg) => {
                                    setTimeout(async() => {
                                        msg.edit("Install complete! use `.cmd` to see what was added.");
                                    }, 9000)
                                });
                            }, 5000)
                        });
                        cm1 = true;
                    }
                }
                else{
                    msg.channel.send("Finding file and getting it...").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Found![type: install module] Please use `-i` argument for installing the module.");
                        }, 5000)
                    });
                }
            }

            else{
                msg.channel.send("Finding file and getting it").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Failed! The file code given does not exist.");
                    }, 5000)
                });
            }
            break;
        case "hexstr":
            var hex  = g_msg;
	        var str = '';
	        for (var n = 0; n < Math.floor(hex.length); n += 2) {
		        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	        }
            msg.channel.send("Processing...").then((msg) => {
                setTimeout(async() => {
                    msg.edit(`String: ${str}`);
                }, 3000)
            });
            break;
    }

})


client.login("OTMwNzUyNzU1MTU1NDg0NzIz.Yd6dDQ.hojoG1XJ87iwbr-6DWs16AIEoew");