const { atob, btoa } = require('buffer');
const Discord = require('discord.js');
const client = new Discord.Client;
const { STATUS_CODES } = require('http');
let cm1 = false;
let cm2 = false;
let cm3 = false;
let cm4 = false;
let cm5 = false;
let em1 = false;
let em2 = false;
let em3 = false;
let em4 = false;
let em5 = false;
let core1 = false;
let core2 = false;
let core3 = false;
let core4 = false;

//376927


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
            if(cm3 === false) return msg.channel.send("env? oh...the *forbidden command*. Bold of you to assume I have the power to use it. Maybe I can, if you install some kinda mod into me.");
            var env_msg = args.splice(0).join(' ');
            if(!env_msg || env_msg === "-s"){
                msg.channel.send("I don't know the syntax really, it's a really powerful command even beyond my control. Maybe it just takes strings? or numbers? or both? idrk man.");
            }
            if(env_msg.includes("WF1001")){
                msg.channel.send("Oh that actually triggered something, I did feel something. I think one of the workflows triggered. Try searching for `wf1001`");
            }
            else if(env_msg.includes("WF1003")){
                msg.channel.send("uhh I found a core code, `animeop` with the password `fuckbts`");
            }
            else if(env_msg.includes("WF9008")){
                msg.channel.send("`deep meanings` i found, with password bXlkaWNjYmlnZw==")
            }
            else if(env_msg.includes("WF4269")){
                msg.channel.send("`chemtodisney` and password `fuckchem`");
            }
            else if(env_msg.includes("WF4007")){
                msg.channel.send("`worldwidegamer` and password `chemop`");
            }
            //env? oh...the forbidden command. bold of you to assume i have the power to use it. Maybe i can, if you install some kinda mod into me.
            
            break;
        case "wkejsk":
            if(cm5 === true) return;
            let replies = [`~�$ʋ${msg.author}`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `��� 892091`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`, `v������+�i��`, `~�$��`, `��az�n�v����`];
            let rand_replies = replies[Math.floor(Math.random() * replies.length)];
            msg.channel.send(rand_replies);
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
                .setDescription("📼")
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
                .setDescription("[📼](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDpaVOi4JtyvFsy4IiGzxECwoGvik0Q2PwA&usqp=CAU)")
                msg.channel.send(cmd_em2);
            }
            else if(em3 === true){
                let cmd_em3 = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`link`", "Converts strings (string means a group of letters, example: `hello`) to links only if it detects any links from the given string", false)
                .addField("`dcode`", "decodes string and returns decoded form of an encoded string [works only on base64 type strings. Altho it's gonna give fucked up shit with random inputs, so use caution.]", false)
                .addField("`env`", "Gets access to workflows.", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                .setDescription("📼")
                msg.channel.send(cmd_em3);
            }
            else if(em4 === true){
                let cmd_em3 = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`link`", "Converts strings (string means a group of letters, example: `hello`) to links only if it detects any links from the given string", false)
                .addField("`dcode`", "decodes string and returns decoded form of an encoded string [works only on base64 type strings. Altho it's gonna give fucked up shit with random inputs, so use caution.]", false)
                .addField("`env`", "Gets access to workflows.", false)
                .addField("`dcor`", "Decorrupts something.", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                .setDescription("📼")
                msg.channel.send(cmd_em3);
            }
            else if(em5 === true){
                let cmd_em3 = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`link`", "Converts strings (string means a group of letters, example: `hello`) to links only if it detects any links from the given string", false)
                .addField("`dcode`", "decodes string and returns decoded form of an encoded string [works only on base64 type strings. Altho it's gonna give fucked up shit with random inputs, so use caution.]", false)
                .addField("`env`", "Gets access to workflows.", false)
                .addField("`dcor`", "Decorrupts something.", false)
                .addField("`descore`", "DesdHJveQ Y29yZQ", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                .setDescription("[📼](https://cdn.myanimelist.net/images/characters/7/435781.jpg)")
                msg.channel.send(cmd_em3);
            }
            else{
                let cmd_em = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.")
                .setDescription("📼")
                msg.channel.send(cmd_em);
            }
            break;
        case "descore":
            if(cm5 === false) return;
            var des_msg = args.splice(0).join(' ');
            if(!des_msg || des_msg === '-s'){
                msg.channel.send("Ugh! it doesn't let me read the syntax, I don't think dcor is going to work on it. You gotta figure out the syntax yourself.");
            }
            else if(des_msg.includes('225x330')){
                if(des_msg.includes("nagi aoe") || des_msg.includes("Nagi Aoe")){
                    msg.channel.send("Destroying.../").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Destroying...-").then((msg) => {
                                setTimeout(async() => {
                                    msg.edit("Destroying...\\ ").then((msg) => {
                                        setTimeout(async() => {
                                            msg.edit("Destroying...|").then((msg) => {
                                                setTimeout(async() => {
                                                    msg.edit("Destroying.../").then((msg) => {
                                                        setTimeout(async() => {
                                                            msg.edit("Destroying...-").then((msg) => {
                                                                setTimeout(async() => {
                                                                    msg.edit("Core 1 destroyed. Gone, reduced to atoms. I think that enabled sumn...").then((msg) => {
                                                                        setTimeout(async() => {
                                                                            msg.channel.send("https://tenor.com/view/thanos-infinity-gauntlet-snap-finger-snap-gif-12502580");
                                                                        }, 100)
                                                                    });
                                                                    core1 = true;
                                                                }, 100)
                                                            });
                                                        }, 100)
                                                    });
                                                }, 100)
                                            });
                                        }, 100)
                                    });
                                }, 100)
                            });
                        }, 100)
                    });
                    msg.author.send("Achievement Unlocked! (7 of 13)\nDestroying core 1")
                }
                else if(!des_msg.includes("nagi aoe") || !des_msg.includes("Nagi Aoe")){
                    msg.channel.send("Wrong password. Please enter the correct password the next time.");
                }
                else{
                    msg.channel.send("core 1 code detected. Please enter passcode beside it.");
                }
            }
            else if(des_msg.includes("animeop")){
                if(des_msg.includes("fuckbts")){
                    msg.channel.send("Destroying.../").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Destroying...-").then((msg) => {
                                setTimeout(async() => {
                                    msg.edit("Destroying...\\ ").then((msg) => {
                                        setTimeout(async() => {
                                            msg.edit("Destroying...|").then((msg) => {
                                                setTimeout(async() => {
                                                    msg.edit("Destroying.../").then((msg) => {
                                                        setTimeout(async() => {
                                                            msg.edit("Destroying...-").then((msg) => {
                                                                setTimeout(async() => {
                                                                    msg.edit("Core 2 destroyed. Gone, reduced to atoms.").then((msg) => {
                                                                        setTimeout(async() => {
                                                                            msg.channel.send("https://tenor.com/view/thanos-infinity-gauntlet-snap-finger-snap-gif-12502580");
                                                                        }, 100)
                                                                    });
                                                                    core2 = true;
                                                                }, 100)
                                                            });
                                                        }, 100)
                                                    });
                                                }, 100)
                                            });
                                        }, 100)
                                    });
                                }, 100)
                            });
                        }, 100)
                    });
                    msg.author.send("Achievement Unlocked! (9 of 13)\nDestroying core 2")
                }
                else if(!des_msg.includes("fuckbts")){
                    msg.channel.send("Wrong password. Please enter the correct password the next time.");
                }
                else{
                    msg.channel.send("core 2 code detected. Please enter passcode beside it.");
                }
            }
            else if(des_msg.includes("deep meanings")){
                if(des_msg.includes("mydiccbigg")){
                    msg.channel.send("Destroying.../").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Destroying...-").then((msg) => {
                                setTimeout(async() => {
                                    msg.edit("Destroying...\\ ").then((msg) => {
                                        setTimeout(async() => {
                                            msg.edit("Destroying...|").then((msg) => {
                                                setTimeout(async() => {
                                                    msg.edit("Destroying.../").then((msg) => {
                                                        setTimeout(async() => {
                                                            msg.edit("Destroying...-").then((msg) => {
                                                                setTimeout(async() => {
                                                                    msg.edit("Core 3 destroyed. Gone, reduced to atoms.").then((msg) => {
                                                                        setTimeout(async() => {
                                                                            msg.channel.send("https://tenor.com/view/thanos-infinity-gauntlet-snap-finger-snap-gif-12502580");
                                                                            msg.channel.send("[Le website](https://shinyacash.github.io/hiddenhuntweb/)");
                                                                            msg.channel.send("Maybe try and use this? 'Use the first two as code and second two as the x'th click'")
                                                                        }, 100)
                                                                    });
                                                                    core3 = true;
                                                                }, 100)
                                                            });
                                                        }, 100)
                                                    });
                                                }, 100)
                                            });
                                        }, 100)
                                    });
                                }, 100)
                            });
                        }, 100)
                    });
                    msg.author.send("Achievement Unlocked! (12 of 13)\nDestroying core 3")
                }
                else if(!des_msg.includes("mydiccbigg")){
                    msg.channel.send("Wrong password. Please enter the correct password the next time.");
                }
                else{
                    msg.channel.send("core 3 code detected. Please enter passcode beside it.");
                }
            }
            else if(des_msg.includes("worldwidegamer")){
                if(des_msg.includes("chemop")){
                    msg.channel.send("Destroying.../").then((msg) => {
                        setTimeout(async() => {
                            msg.edit("Destroying...-").then((msg) => {
                                setTimeout(async() => {
                                    msg.edit("Destroying...\\ ").then((msg) => {
                                        setTimeout(async() => {
                                            msg.edit("Destroying...|").then((msg) => {
                                                setTimeout(async() => {
                                                    msg.edit("Destroying.../").then((msg) => {
                                                        setTimeout(async() => {
                                                            msg.edit("Destroying...-").then((msg) => {
                                                                setTimeout(async() => {
                                                                    msg.edit("Core 4 destroyed. Gone, reduced to atoms.").then((msg) => {
                                                                        setTimeout(async() => {
                                                                            msg.channel.send("https://tenor.com/view/thanos-infinity-gauntlet-snap-finger-snap-gif-12502580");    
                                                                        }, 100)
                                                                    });
                                                                    core4 = true;
                                                                }, 100)
                                                            });
                                                        }, 100)
                                                    });
                                                }, 100)
                                            });
                                        }, 100)
                                    });
                                }, 100)
                            });
                        }, 100)
                    });
                    msg.author.send("Achievement Unlocked! (13 of 13)\nDestroying core 4")
                }
                else if(!des_msg.includes("mydiccbigg")){
                    msg.channel.send("Wrong password. Please enter the correct password the next time.");
                }
                else{
                    msg.channel.send("core 4 code detected. Please enter passcode beside it.");
                }
            }
            else if(des_msg.includes("chemtodisney")){
                msg.channel.send("Loadin- oh.").then((msg) => {
                    setTimeout(async() => {
                        msg.author.send("Achievement unlocked!(11 of 13)\nSIKE! THAS THE WRONG CODE SET!");
                    }, 100)
                });
            }
            else{
                msg.channel.send("wrong core code.");
            }
            break;
        case "dcor":
            if(cm4 === false) return;
            var cor_msg = args.splice(0).join(' ');
            if(!cor_msg || cor_msg === '-s'){
                let dcor_syntax = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Dcor command Syntax")
                .addField("Syntax: ", "`.dcor string` where is de-corrupts corrupted stuff.", false)
                .addField("Args (Arguments)[not required]:", "`-s` : provides syntax for the command.", false)
                msg.channel.send(dcor_syntax);
            }
            else if(cor_msg.includes("wKejSk")){
                msg.channel.send("Loading.../").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Loading...-").then((msg) => {
                            setTimeout(async() => {
                                msg.edit("Loading...\\ ").then((msg) => {
                                    setTimeout(async() => {
                                        msg.edit("Loading...|").then((msg) => {
                                            setTimeout(async() => {
                                                msg.edit("Loading.../").then((msg) => {
                                                    setTimeout(async() => {
                                                        msg.edit("Loading...-").then((msg) => {
                                                            setTimeout(async() => {
                                                                msg.edit("De-corruption complete! `.cmd` to view changes.");
                                                                cm5 = true;
                                                                em4 = false;
                                                                em5 = true;
                                                            }, 100)
                                                        });
                                                    }, 100)
                                                });
                                            }, 100)
                                        });
                                    }, 100)
                                });
                            }, 100)
                        });
                    }, 100)
                });
            }
            else if(cor_msg.includes("ortensia") || cor_msg.includes("Ortensia")){
                msg.channel.send("Loading.../").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Loading...-").then((msg) => {
                            setTimeout(async() => {
                                msg.edit("Loading...\\ ").then((msg) => {
                                    setTimeout(async() => {
                                        msg.edit("Loading...|").then((msg) => {
                                            setTimeout(async() => {
                                                msg.edit("Loading.../").then((msg) => {
                                                    setTimeout(async() => {
                                                        msg.edit("Loading...-").then((msg) => {
                                                            setTimeout(async() => {
                                                                msg.edit("De-corruption complete!\nResult: Disney's second series.");
                                                            }, 100)
                                                        });
                                                    }, 100)
                                                });
                                            }, 100)
                                        });
                                    }, 100)
                                });
                            }, 100)
                        });
                    }, 100)
                });
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
                else if(s_msg.includes("my dick") || s_msg.includes("mydick") || s_msg.includes("your dick") || s_msg.includes("yourdick") || s_msg.includes("joe dick") || s_msg.includes("dick")){
                    msg.channel.send("really bro? you are gonna search my 14-inch D for hints?").then((msg) => {
                        setTimeout(async() => {
                            msg.channel.send("Welp guess what? nothing found. Not cool fam not cool.");
                        }, 1000)
                    });
                    msg.author.send("Achievement Unlocked! (1 of 13)\nSearching Jonah's D for goods.");
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
                    msg.author.send("Achievement Unlocked! (4 of 13)\n Mr. Oblivious.");
                }
                else if(s_msg.includes("wf1001")){
                    msg.channel.send("I found this corrupted command `.wKejSk` in the workflow environment. Idrk what's happenin man this shit getting crazy.")
                }
                else if(s_msg.includes("nagi aoe")){
                    msg.channel.send("seems like some kinda password to something.");
                }
                else if(s_msg.includes("225x330")){
                    msg.channel.send("huh, descore seemed like it reacted to that string...");
                }
                else if(s_msg.includes("masamune-kun no revenge") || s_msg.includes("Masamune-kun No Revenge")){
                    msg.channel.send("Huh? I didn\'t know btb liked anime lol. Welp i didn't really find anything but 'Chapter 37'... I wonder what that means.");
                }
                else if(s_msg.includes("piggy") || s_msg.includes("Piggy") || s_msg.includes("pig's legs") || s_msg.includes("Pig's legs")){
                    msg.channel.send("Huh...Welp, I found this string in this directory, \"記憶の回廊\" don really know what it means...");
                }
                else if(s_msg.includes("assassin") || s_msg.includes("Assassin")){
                    msg.channel.send("nope nothing.");
                    msg.author.send("Achievement Unlocked! (8 of 13)\nNot the right franchise, but oki. try finding a japanese title with that kinda thing.");
                }
                else if(s_msg.includes("re zero") || s_msg.includes("Re: Zero") || s_msg.includes("arc 6")){
                    msg.channel.send("Welp I found this: \"927\"")
                }
                else if(s_msg.includes("TATAKAE") || s_msg.includes("tatakae")){
                    msg.channel.send("tatakae huh.... tatakae, tatakae, oh! EREN JAEGER. If you are a fellow jaegerist then answer this riddle, \'I gave birth to two people, crucial for our freedom, but one of them controlled me. Who am I?\', (use `search -h answer`)");
                }
                else if(s_msg.includes("Grisha") || s_msg.includes("grisha") || s_msg.includes("Grisha Jaeger") || s_msg.includes("grisha jaeger")){
                    msg.channel.send("oooooo damn you knew the answer, althought i think you googled but oki. welp here's your workflow code WF1003");
                }
                else if(s_msg.includes("Phenyloacetone") || s_msg.includes("Fenyloacetone")){
                    msg.channel.send("You probs cheated but oki. Your next hint is, `DOTN time.`")
                }
                else if(s_msg.includes("2h 7m") || s_msg.includes("2 hours")){
                    msg.channel.send("Damn, you got it. Welp next up, aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi85LzlmL0Jlcm5zdGVpbnMlQzMlQTR1cmUyLnN2Zy8xMjAwcHgtQmVybnN0ZWlucyVDMyVBNHVyZTIuc3ZnLnBuZw==")
                }
                else if(s_msg.includes("succinic acid")){
                    msg.channel.send("hehe nice. but you don gotta use that here.");
                }
                else if(s_msg.includes("oswald") || s_msg.includes("Oswald")){
                    msg.channel.send("Demn, that is OLLLDDDD. Welp i found 98 in the directory but then the other thing is corrupted. try using oswald's 10v3's name on dcor.");
                }
                else if(s_msg.includes("mortimer mouse") || s_msg.includes("Mortimer Mouse")){
                    msg.channel.send("whoa whoa whoa HOW'd YOU DO THAT?! oh well, i still can't find the numbers, welp maybe i can find it somewhere hidden in the movies which have mickeys in'em.");
                }
                else if(s_msg.includes("1000")){
                    msg.channel.send("gg, the last two numbers are 41");
                }
                else if(s_msg.includes("damnjonahdiccbigg")){
                    msg.channel.send("wow uhh...i am flattered, thank you. wabu- i mean kyoto is a nice place to visit eh? i wonder what the gates there are called...those 10,000 gates.");
                }
                else if(s_msg.includes("Fushimi Inari") || s_msg.includes("fushimi inari")){
                    msg.channel.send("Ohhh, i see. welp what about the square thingy? in Beijing.");
                }
                else if(s_msg.includes("tiananmen") || s_msg.includes("Tiananmen")){
                    msg.channel.send("oh damn, what about the tower in spain?");
                }
                else if(s_msg.includes("Hercules") || s_msg.includes("hercules")){
                    msg.channel.send("ah, i see, what about the underground thingy in turkey?");
                }
                else if(s_msg.includes("Derinkuyu") || s_msg.includes("derinkuyu")){
                    msg.channel.send("Damn mr./ms. worldwide. here's your two numbers `82`");
                }
                else if(s_msg.includes("Melvin Harris") || s_msg.includes("melvin")){
                    msg.channel.includes("BIG SMOKE! HOMIE welp anyway, what's the game-making dare called?");
                }
                else if(s_msg.includes("Ludum") || s_msg.includes("ludum")){
                    msg.channel.includes("lol that must have taken time. welp which was minecraft in?");
                }
                else if(s_msg.includes("22")){
                    msg.channel.send("that was ez. Btb once told me that he tried to participate in the ludum dare but shiny was lazy af. what a scrub. welp  i found these numbers in the directory: 048 057");
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
                    msg.author.send("Achievement Unlocked! (2 of 13)\nM A L U B U L U L");
                }
                else{
                    msg.channel.send("Couldn't find shit there.");
                }
            }
            else if(s_msg.includes("-enc")){
                if(s_msg.includes("POWQen1Z7ASdn0QWnsck0J*(J#@(FwesdcNQawodQWNjfnXMwqonafsjCWMEsdmCAs")){
                    msg.channel.send("I found the following:\n189204");
                }
                else if(s_msg.includes("ANd9GcSsDpaVOi4JtyvFsy4IiGzxECwoGvik0Q2PwA&usqp")){
                    msg.channel.send("Result: name? what da name bitch.");
                }
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

            if(g_msg.includes("901823")){
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Found![type: .txt] Reading and sending file contents...").then((msg) => {
                            setTimeout(async() => {
                                msg.channel.send({
                                    files : ['./REMU.txt']
                                });
                            }, 2000)
                        });
                    }, 5000)
                });
            }

            else if(g_msg.includes("109829")){
                
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

            else if(g_msg.includes("739841")){
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Found![type: .txt] Reading and sending file contents...").then((msg) => {
                            setTimeout(async() => {
                                msg.edit(`Content:\n087 070 052 050 054 057`);
                            }, 2000)
                        });
                    }, 5000)
                });
            }

            else if(g_msg.includes("738209")){
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Found![type: .txt] Reading and sending file contents...").then((msg) => {
                            setTimeout(async() => {
                                msg.edit(`Content:\n ${msg.author} damn, go ahead, use WF4007`);
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

            else if(g_msg.includes("376927")){
                msg.channel.send("Oh damn you actually figured it out, go ahead, use WF9008");
            }

            else if(g_msg.includes("812346")){
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
            else if(g_msg.includes("892091")){
                if(!g_msg.includes("-i")) return msg.channel.send("Code refers to an install module, please use `-i` argument.");
                if(cm4 === true) return msg.channel.send("It's already installed.");
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Found![type: install module] Installing...").then((msg) => {
                            setTimeout(async() => {
                                msg.edit("Install complete! use `.cmd` to see what was added.");
                                cm4 = true;
                                em3 = false;
                                em4 = true;
                            }, 9000)
                        });
                    }, 5000)
                });
            }
            //892091
            else if(g_msg.includes("376927")){
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.delete();
                        msg.channel.send({
                            files: ['./getfile1.txt']
                        });
                    }, 5000)
                });
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
            else if(g_msg.includes("189204")){
                if(!g_msg.includes("-i")) return msg.channel.send("Code refers to an mod module, please use `-i` argument.");
                if(cm3 === true) return msg.channel.send("The module is already installed.");
                msg.channel.send("Finding file and getting it...").then((msg) => {
                    setTimeout(async() => {
                        msg.edit("Found![type: mod] Installing...").then((msg) => {
                            setTimeout(async() => {
                                msg.edit("Install complete! use `.cmd` to see what was added.");
                                cm3 = true;
                                em2 = false;
                                em3 = true;
                            }, 9000)
                        });
                    }, 5000)
                });
            }

            else if(g_msg.includes("999999")){
                msg.channel.send("Finding achievement and getting it...(you probs already got it lol)").then(() => {
                    setTimeout(async() => {
                        msg.author.send("Achievement Unlocked! (3 of 13)\nGood ol' 9's comin' in clutch!");
                    }, 1000)
                });
            }

            else if(g_msg.includes("69420")){
                msg.channel.send("Findin- nice.").then(() => {
                    setTimeout(async() => {
                        msg.author.send("Achievement Unlocked! (5 of 13)\n;)) getfile kinda sus");
                    }, 1000)
                });
            }
            else if(g_msg.includes("435781")){
                msg.channel.send("Findin- oh.").then(() => {
                    setTimeout(async() => {
                        msg.author.send("Achievement Unlocked! (6 of 13)\nNice Try but no.");
                    }, 1000)
                });
            }

            else if(g_msg){
                msg.channel.send("Finding file and getting it...").then((msg) => {
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
                msg.channel.send("Please wait till I find something.").then((msg) => {
                    setTimeout(async() => {
                        msg.delete();
                        let link_em = new Discord.MessageEmbed()
                        .setColor("#58c9d1")
                        .setTitle("Found!")
                        .addField("Link:", "[Le link](https://github.com/Jonahmadich/codefiles)", false)
                        msg.channel.send(link_em);
                    }, 3000)
                });
            }
            else if(l_msg.includes("succinic acid")){
                msg.channel.send("Please wait till I find something.").then((msg) => {
                    setTimeout(async() => {
                        msg.delete();
                        let link_em2 = new Discord.MessageEmbed()
                        .setColor("#58c9d1")
                        .setTitle("Found!")
                        .addField("Link:", "[Le link](https://ichef.bbci.co.uk/news/1024/media/images/64471000/jpg/_64471712_walt_note624_disney.jpg)", false)
                        msg.channel.send(link_em2);
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
            if(msg.author.id === "695513111414964225"){
                var e_msg = args.splice(0).join(' ');
                var e_ecode = new Buffer.from(e_msg);
                var e_code = e_ecode.toString('base64');
                msg.channel.send(`dev use only, result: ${e_code}`);
            }
            else{
                msg.channel.send("Not for you my guy. Dev use only.");
            }

            break;
        case "encmd":
            if(msg.author.id === "695513111414964225"){
                cm1 = true;
                cm2 = true;
                cm3 = true;
                cm4 = true;
                em4 = true;
                msg.channel.send("enabled everything.");
            }
            else{
                msg.channel.send("Dev use only bro.");
            }
            break;
        case "dcmd":
            if(msg.author.id === "695513111414964225" || core1 === true){
                cm1 = false;
                cm2 = false;
                cm3 = false;
                cm4 = false;
                cm5 = false;
                em5 = false;
                em4 = false;
                em3 = false;
                em2 = false;
                em1 = false;
                msg.channel.send("reset.");
            }
            else{
                msg.channel.send("Dev use only bro.");
            }
            break;
    }
    /*if(msg.author.id === "695513111414964225"){
        
    }
    else{
        msg.channel.send("Under dev.");
    }*/

})

client.login(process.env.token);