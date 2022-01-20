const { atob, btoa } = require('buffer');
const Discord = require('discord.js');
const client = new Discord.Client;
const { STATUS_CODES } = require('http');
let cm1 = false;
let cm2 = false;
let em1 = false;
let em2 = false;



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
        case "env":
            msg.channel.send("You actually made this far? welp this is where the beta ends. Give shiny some fucking time. Why not try and find all achievements till then?");
            break;
        case "cmd":
            if(em1 === true){
                let cmd_em1 = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`link`", "Converts strings (string means a group of letters, example: `hello`) to links only if it detects any links from the given string", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                msg.channel.send(cmd_em1);
            }
            else if(em2 === true){
                let cmd_em2 = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`link`", "Converts strings (string means a group of letters, example: `hello`) to links only if it detects any links from the given string", false)
                .addField("`dcode`", "decodes string and returns decoded form of an encoded string [works only on base64 type strings. Altho it's gonna give fucked up shit with random inputs, so use caution.]", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                msg.channel.send(cmd_em2);
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
                else if(s_msg.includes("my dick") || s_msg.includes("mydick") || s_msg.includes("your dick") || s_msg.includes("yourdick") || s_msg.includes("joe dick")){
                    msg.channel.send("really bro? you are gonna search my 14-inch D for hints?").then((msg) => {
                        setTimeout(async() => {
                            msg.channel.send("Welp guess what? nothing found. Not cool fam not cool.");
                        }, 1000)
                    });
                    msg.author.send("Achievement Unlocked! (1 of 4)\nSearching Jonah's D for goods.");
                }
                else if(s_msg.includes("code.git")){
                    msg.channel.send("Finding...").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Result: Maybe this is some type of link?");
                        }, 4000)
                    });
                }
                else if(s_msg.includes("dich.txt")){
                    msg.channel.send("BRO IT's RIGHT THERE!");
                    msg.author.send("Achievement Unlocked! (4 of 4)\n Mr. Oblivious.");
                }
                else{
                    msg.channel.send("Couldn't find shit there.");
                }
            }
            else if(s_msg.includes("-i")){
                if(s_msg.includes("malubulul")){
                    msg.channel.send("Finding...").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Result: Huh, I didn't really find an install module, but i got an attachment with it, maybe btb kept a secret note here... Welp I found a code saying `209841`. Try using `.getfile` without any args.");
                        }, 4000)
                    });
                    msg.author.send("Achievement Unlocked! (2 of 4)\nM A L U B U L U L");
                }
                else{
                    msg.channel.send("Couldn't find shit there.");
                }
            }
            else if(s_msg.includes("-enc")){

            }
            else if(s_msg || !s_msg === '-s'){
                msg.channel.send("Please specify an argument. [`.search -s` for syntax]");
            }
            break;
        case "getfile":
            var g_msg = args.splice(0).join(' ');
            if(!g_msg || g_msg === '-s'){
                let g_syntax = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Getfile command Syntax")
                .addField("Syntax: ", "`.getfile -<arg> XXXXXX` replace XXXXXX with the actual 6-digit code. You can add args for specific codes.", false)
                .addField("Args (Arguments)[not required]:", "`-i` : install module attached to the specific code.", false)
                .addField("How to use args:", "Args are not required with this command, but you have to use `-i` to install modules or else they won't work.", false)
                msg.channel.send(g_syntax);
            }

            if(g_msg.includes("109829")){
                
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
                        em1 = true;
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

            else if(g_msg.includes("729361")){
                if(g_msg.includes("-i")){
                    if(cm2 === true){
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
                        cm2 = true;
                        em1 = false;
                        em2 = true;
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

            else if(g_msg.includes("209841")){
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.delete();
                        msg.channel.send({
                            files: ['./getfile1.txt']
                        });
                    }, 5000)
                });
            }

            else if(g_msg.includes("999999")){
                msg.channel.send("Finding achievement and getting it...(you probs already got it lol)").then(() => {
                    setTimeout(async() => {
                        msg.author.send("Achievement Unlocked! (3 of 4)\nGood ol' 9's comin' in clutch!");
                    }, 1000)
                });
            }

            else if(g_msg){
                msg.channel.send("Finding file and getting it").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Failed! The file code given does not exist.");
                    }, 5000)
                });
            }
            break;
        case "link":
            if(!cm1 === true) return msg.channel.send("Huh? I don't have such a command, maybe try finding an install module for it?");
            var l_msg = args.splice(0).join(' ');
            if (!l_msg || l_msg === '-s'){
                let l_syntax = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Link command Syntax")
                .addField("Syntax: ", "`.link string[or -s]` where you input some sort of string and the result might return a link if encoded into it.", false)
                .addField("Args (Arguments)[not required]:", "`-s` for syntax", false)
                msg.channel.send(l_syntax);
            }

            else if (l_msg.includes("code.git")){
                msg.channel.send("Please wait till i find something.\nFinding...").then((msg) => {
                    setTimeout(async() => {
                        let link_em = new Discord.MessageEmbed()
                        .setColor("#58c9d1")
                        .setTitle("Found!")
                        .addField("Link:", "[Le link](https://github.com/Jonahmadich/codefiles)", false)
                        msg.edit(link_em);
                    }, 3000)
                });
            }
            break;
        case "dcode":
            if(!cm2 === true) return msg.channel.send("Huh? I don't have such a command, maybe try finding an install module for it?");
            var d_msg = args.splice(0).join(' ');
            if(!d_msg || d_msg === '-s'){
                let d_syntax = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Dcode command Syntax")
                .addField("Syntax: ", "`.dcode string[or -s]` where you input some sort of string and the result might return a decoded version of the string.", false)
                .addField("Args (Arguments)[not required]:", "`-s` for syntax", false)
                msg.channel.send(d_syntax);
            }
            else{
                var d_ecode = d_msg;

                var d_code = Buffer.from(d_ecode, 'base64');

                msg.channel.send("There might be a lot of bugs since this is an actual decoder running on base64, therefore please do talk to Shiny just in case.\n\nDecoding...").then((msg) => {
                    setTimeout(async() => {
                        msg.edit(`Result: "${d_code}"`);
                    }, 3000)
                });
            }
            break;
        case "ecode":
            var e_msg = args.splice(0).join(' ');
            var e_ecode = new Buffer.from(e_msg);
            var e_code = e_ecode.toString('base64');

            msg.channel.send(`dev use only, result: ${e_code}`);
            break;
    }

})


client.login(process.env.token);