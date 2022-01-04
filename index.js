

var env=JSON.parse(JSON.stringify(process.env))
var RoliCookie = env.RoliVerification
var discordid = "587698762470916096"
var config = require("./config.json")
var rp = require("request-promise")
// var keepalive = require("./keepalive.js")
var Discord = require("discord.js")
var fetch = require("node-fetch")
var roblox_roblox_id = null
var discord_roblox_id = null
var cookie = null
var token = null
var RoliCookie = null

var itemdata = null
var eiruhuhieogidjifodkijekelroifjkd = [false, false, false, true, true , false ,false ,"uwu", "yes"]
var isonpc = false
var isonreplit = false

console.log(env)
if (env.OS) {
    isonpc = true
    cookie = config.onlyifpc.cookie
    token = config.onlyifpc.token
    RoliCookie = config.onlyifpc.RoliVerification
} else {
    isonreplit = true
    cookie = env.cookie
    token = env.token
    RoliCookie = env.RoliVerification
}



fetch("https://www.rolimons.com/itemapi/itemdetails").then(res => res.json()).then(itemdatas => {
        itemdata = itemdatas.items

})

setInterval(function(){
    fetch("https://www.rolimons.com/itemapi/itemdetails").then(res => res.json()).then(itemdatas => {
        itemdata = itemdatas.items

})
}, 900000)
var options = {
    method: 'POST',
    uri: 'https://auth.roblox.com/v2/login',
    headers: {
        cookie: ".ROBLOSECURITY=" + env.cookie + ";"
    }
};

var whitelisted = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeezzzzzzzzzzzzzzzzzzzzzzzzzzzzzfffffffffffff^pppppgggiqoergfkdddvc noiequrhngioq nhbiujnk rbv g nvbuj n,vbhfuqsdrfpv jbnquijv nugsbd fvdquydfgv biuqer nbfdcierfhn gqiuerfhn gvuir gvnre qr vg swdfurv bguhrfgv ikesu ciutrv nbisurtbv eiruj euzyig   er b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b"

fetch("https://whitelist-2.aequet2604.repl.co/sign_in", {
    headers: {
        discord_id: config.discordid
    },
    method: "POST"
  }).then(res => res.json()).then(whitelistres => {
    rp(options).then(function() {

    }).catch(function(err) {
        token = err.response.headers["x-csrf-token"]
        fetch("https://www.roblox.com/mobileapi/userinfo", {
            headers: {
                Cookie: `.ROBLOSECURITY=${env.cookie};`,
                "Content-Type": "application/json",
                "Content-Length": "0",
                "X-CSRF-TOKEN": token,
            },
            method: "GET",
        }).then(res => res.json()).then(res => {
            roblox_roblox_id = res.UserID
            discord_roblox_id = whitelistres[discordid]
            var authen = []
            authen.push(roblox_roblox_id, discord_roblox_id)
            whitelisted = true
        }).then(a => {
            if (eiruhuhieogidjifodkijekelroifjkd[3] == whitelisted) {
              const client = new Discord.Client()
              client.login(env.token)

              
              client.on("ready", () => {
                  console.log(`Started Rolimons automatic ad Poster!`)
              
              
              
                  client.user.setActivity(`Roliad bot by aequet#8827.`, {
                      type: 'WATCHING'
                  })
              
                  setTimeout(function() {
                      client.user.setPresence({
                          activity: {
                              name: `Rolimons AUTOMATIC AD POSTER by aequet#8827.`
                          },
                          status: 'idle'
                      })
                      var newEmbed = new Discord.MessageEmbed()
                          .setColor("#002f4e")
                          .setAuthor("aequet BOTS")
                          .setTitle("ROLIMONS Trade ad BOT")
                          .setTimestamp()
              
                      client.channels.cache.get("" + config.notif_channel + "").send(newEmbed)
                  }, 2000)

                  setTimeout(function(){
                    fetch("https://www.rolimons.com/itemapi/itemdetails").then(res => res.json()).then(itemdatas => {
                        itemdata = itemdatas.items
                
           
                    fetch(`https://inventory.roblox.com/v1/users/${roblox_roblox_id}/assets/collectibles?limit=100`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": token,
                            cookie: ".ROBLOSECURITY=" + env.cookie + ";",
                        },
                      }).then(res => res.json()).then(uau => {
    
                        if (config.auto_offer_ids == true) {
                            offer_item_ids = []
                            var done = false
                            uau.data.forEach(x => {
                                if (offer_item_ids.length <= config.auto_max_offer_items) {
                                    offer_item_ids.push(x.assetId)
                                } else {
                                    done = true
                                    
                                }
                            })

                            setTimeout(function(){
                                if (done = true) {
                                    fetch("https://www.rolimons.com/tradeapi/create", {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            "cookie": "_RoliVerification=" + RoliCookie
                                        },
                                        body: JSON.stringify({ "player_id": config.player_id, "offer_item_ids": offer_item_ids, "request_item_ids": config.request_item_ids, "request_tags": config.request_tags })
                                    }).then(res => res.json()).then(res => {
                                        console.log(res)
                                        if (res.success == true) {
                                            var itemd = {}
                                            offer_item_ids.forEach(x => {
                                                itemd[itemdata[x][0]]= "(Value : "+itemdata[x][4]+")"
                                            })
                                            

                                            setTimeout(function(){
                                                console.log(itemd)
                                                var m = new Discord.MessageEmbed()
                                                .setColor("#339BFF")
                                                .setAuthor("aequet BOTS")
                                                .setTitle("Successfully Posted Trade Ad")
                                                .addFields(
                                                    { name: 'Items posted: ', value: JSON.stringify(itemd), inline: true },
                                                )
                                                client.channels.cache.get("" + config.notif_channel + "").send(m)
                                            }, 2000)
                                                
                                            
                                            
                                    
                                        }
                                    
                                        if (res.success == false) {

                                            var itemd = {}
                                            offer_item_ids.forEach(x => {
                                                itemd[itemdata[x][0]]= "(Value : "+itemdata[x][4]+")"
                                            })

                                            console.log(itemd)
                                            var m = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setAuthor("aequet BOTS")
                                            .setTitle("ERROR")
                                            .setDescription(`ERROR: ${res.message}`)
                                            client.channels.cache.get("" + config.notif_channel + "").send(m)
                                        }
                                        })
                                } 
                                
                            }, 2000)
                                
                            

                            
                        } else if (config.auto_offer_ids == false) {
                            fetch("https://www.rolimons.com/tradeapi/create", {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            "cookie": "_RoliVerification=" + RoliCookie
                                        },
                                        body: JSON.stringify({ "player_id": config.player_id, "offer_item_ids": offer_item_ids, "request_item_ids": config.request_item_ids, "request_tags": config.request_tags })
                                    }).then(res => res.json()).then(res => {
                                        console.log(res)
                                        if (res.success == true) {
                                            var itemd = {}
                                            offer_item_ids.forEach(x => {
                                                itemd[itemdata[x][0]]= "(Value : "+itemdata[x][4]+")"
                                            }).then(acafzeazfaz => {
                                                var m = new Discord.MessageEmbed()
                                                .setColor("#339BFF")
                                                .setAuthor("aequet BOTS")
                                                .setTitle("Successfully Posted Trade Ad")
                                                .addFields(
                                                    { name: 'Items posted: ', value: itemd, inline: true },
                                                )
                                                client.channels.cache.get("" + config.notif_channel + "").send(m)
                                            })
                                    
                                        }
                                    
                                        if (res.success == false) {
                                            var m = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setAuthor("aequet BOTS")
                                            .setTitle("ERROR")
                                            .setDescription(`ERROR: ${res.message}`)
                                            client.channels.cache.get("" + config.notif_channel + "").send(m)
                                        }
                                        })
                        }
                        
                        
                      })
                  }, 5000)
                })
                
                  
                })
              
              
              var x = 0
              
              
              
              setInterval(function() {
                  if (whitelisted == eiruhuhieogidjifodkijekelroifjkd[3])
                x = x + 1
                    fetch(`https://inventory.roblox.com/v1/users/${roblox_roblox_id}/assets/collectibles?limit=100`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": token,
                            cookie: ".ROBLOSECURITY=" + env.cookie + ";",
                        },
                      }).then(res => res.json()).then(uau => {
                        fetch("https://www.rolimons.com/itemapi/itemdetails").then(res => res.json()).then(itemdatas => {
                            itemdata = itemdatas.items
    
                        if (config.auto_offer_ids == true) {
                            offer_item_ids = []
                            var done = false
                            uau.data.forEach(x => {
                                if (offer_item_ids.length <= config.auto_max_offer_items) {
                                    offer_item_ids.push(x.assetId)
                                } else {
                                    done = true
                                    
                                }
                            })

                            setTimeout(function(){
                                if (done = true) {
                                    fetch("https://www.rolimons.com/tradeapi/create", {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            "cookie": "_RoliVerification=" + RoliCookie
                                        },
                                        body: JSON.stringify({ "player_id": config.player_id, "offer_item_ids": offer_item_ids, "request_item_ids": config.request_item_ids, "request_tags": config.request_tags })
                                    }).then(res => res.json()).then(res => {
                                        console.log(res)
                                        if (res.success == true) {
                                            var itemd = {}
                                            offer_item_ids.forEach(x => {
                                                itemd[itemdata[x][0]]= "(Value : "+itemdata[x][4]+")"
                                            })
                                            

                                            setTimeout(function(){
                                                console.log(itemd)
                                                var m = new Discord.MessageEmbed()
                                                .setColor("#339BFF")
                                                .setAuthor("aequet BOTS")
                                                .setTitle("Successfully Posted Trade Ad")
                                                .addFields(
                                                    { name: 'Items posted: ', value: JSON.stringify(itemd), inline: true },
                                                    { name: 'Trade Ad number: ', value: x, inline: true },
                                                )
                                                client.channels.cache.get("" + config.notif_channel + "").send(m)
                                            }, 500)
                                                
                                            
                                            
                                    
                                        }
                                    
                                        if (res.success == false) {

                                            var itemd = {}
                                            offer_item_ids.forEach(x => {
                                                itemd[itemdata[x][0]]= "(Value : "+itemdata[x][4]+")"
                                            })

                                            console.log(itemd)
                                            var m = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setAuthor("aequet BOTS")
                                            .setTitle("ERROR")
                                            .setDescription(`ERROR: ${res.message}`)
                                            client.channels.cache.get("" + config.notif_channel + "").send(m)
                                        }
                                        })
                                } 
                                
                            }, 2000)
                                
                            

                            
                        } else if (config.auto_offer_ids == false) {
                            fetch("https://www.rolimons.com/tradeapi/create", {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            "cookie": "_RoliVerification=" + RoliCookie
                                        },
                                        body: JSON.stringify({ "player_id": config.player_id, "offer_item_ids": config.offer_item_ids, "request_item_ids": config.request_item_ids, "request_tags": config.request_tags })
                                    }).then(res => res.json()).then(res => {
                                        console.log(res)
                                        if (res.success == true) {
                                            var itemd = {}
                                            offer_item_ids.forEach(x => {
                                                itemd[itemdata[x][0]]= "(Value : "+itemdata[x][4]+")"
                                            }).then(acafzeazfaz => {
                                                var m = new Discord.MessageEmbed()
                                                .setColor("#339BFF")
                                                .setAuthor("aequet BOTS")
                                                .setTitle("Successfully Posted Trade Ad")
                                                .addFields(
                                                    { name: 'Items posted: ', value: itemd, inline: true },
                                                )
                                                client.channels.cache.get("" + config.notif_channel + "").send(m)
                                            })
                                    
                                        }
                                    
                                        if (res.success == false) {
                                            var m = new Discord.MessageEmbed()
                                            .setColor("#FF0000")
                                            .setAuthor("aequet BOTS")
                                            .setTitle("ERROR")
                                            .setDescription(`ERROR: ${res.message}`)
                                            client.channels.cache.get("" + config.notif_channel + "").send(m)
                                        }
                                        })
                        }
                        
                        
                      })
                
                
                    })
              }, config.time_between_posts)
          
            }
          
        })
    })
  })
  
  
