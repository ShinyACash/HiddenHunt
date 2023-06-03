const Discord = require('discord.js');
const client = new Discord.Client;
let enab = false;


client.once("ready", () =>{
    console.log("ready bitch.");
})

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    var prefix = ";";

    if (msg.content.includes(`THANK YOU FOR HELPING ME`)) {
        if (enab == true) return;
        setTimeout(async () => {
            msg.delete();
        }, 6000)
    }

    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    
    switch(cmd){
        case "gohigher":
            if (enab == true) return;
            msg.channel.send("Loading.../").then((msg) => {
                setTimeout(async () => {
                    msg.edit("Loading...-").then((msg) => {
                        setTimeout(async () => {
                            msg.edit("Loading...\ ").then((msg) => {
                                setTimeout(async () => {
                                    msg.edit("Loading...|").then((msg) => {
                                        setTimeout(async () => {
                                            msg.edit("Loading.../").then((msg) => {
                                                setTimeout(async () => {
                                                    msg.edit("Loading...-").then((msg) => {
                                                        setTimeout(async () => {
                                                            msg.edit("Jailbreak Successful. Enter `;cmd` for admin command list.");
                                                            enab = true;
                                                        }, 200)
                                                    });
                                                }, 200)
                                            });
                                        }, 200)
                                    });
                                }, 200)
                            });
                        }, 200)
                    });
                }, 200)
            });
        case "cmd":
            if (enab == false) return;
            let cmd_em = new Discord.MessageEmbed()
                .setColor("#58c9d1")
                .setTitle("Commands")
                .addField("`search`", "Searches for files in directories and informs if files of that name or type exist.", false)
                .addField("`getfile`", "Provides file attachments associated with their specific codes.", false)
                .addField("`link`", "Converts strings (string means a group of letters, example: `hello`) to links only if it detects any links from the given string", false)
                .setFooter("You can use `-s` as an arguement for the command you need the syntax for.\nIt is advised to install all modules again everyday since I reset everyday for security purposes.")
                .setDescription("Epik Games™️ | 🗿")
            msg.channel.send(cmd_em);
    }
    /*if(msg.author.id === "695513111414964225"){
        
    }
    else{
        msg.channel.send("Under dev.");
    }*/

})

client.login(process.env.token);