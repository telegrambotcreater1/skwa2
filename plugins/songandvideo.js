const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

// ------ Download Audio ------
cmd({
    pattern: "song",
    desc: "Download Song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if(!q) return reply("Please Give Me URL Or Title")
        const search = await yts(q)
        const data = search.videos[0];
        const url = data.url
        // Message Title
        let desc = `
        ✦ 𝐅𝐈𝐋𝐌𝐏𝐔𝐁𝐋𝐈𝐒𝐇𝐄𝐑.𝐋𝐊 ✦
        🎶 𝒮𝒪𝒩𝒢 𝒟𝒪𝒲𝒩𝐿𝒪𝒜𝒟𝐸𝑅 🎶

        Title: ${data.title}
        Duration: ${data.duration}
        Auther: ${data.author}
        Ago: ${data.ago}
        Views: ${data.views}

        ✦ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐈𝐋𝐌𝐏𝐔𝐁𝐋𝐈𝐒𝐇𝐄𝐑.𝐋𝐊 ✦
        `

        // Download Audio File
        await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
        let down = await fg.yta(url)
        let downloadUrl = down.dl_url
        // Upload As A Audio File
        await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
        // Upload As A Document File
        await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"✦ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐈𝐋𝐌𝐏𝐔𝐁𝐋𝐈𝐒𝐇𝐄𝐑.𝐋𝐊 ✦"},{quoted:mek})

}catch(e){
    console.log(e)
    reply('${e}')
}
})

// ------ Download Video ------
cmd({
    pattern: "video",
    desc: "Download Video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if(!q) return reply("Please Give Me URL Or Title")
        const search = await yts(q)
        const data = search.videos[0];
        const url = data.url
        // Message Title
        let desc = `
        ✦ 𝐅𝐈𝐋𝐌𝐏𝐔𝐁𝐋𝐈𝐒𝐇𝐄𝐑.𝐋𝐊 ✦
        📽️ 𝒱𝒾𝒹𝑒𝑜 𝒟𝒪𝒲𝒩𝐿𝒪𝒜𝒟𝐸𝑅 📽️

        Title: ${data.title}
        Duration: ${data.duration}
        Auther: ${data.author}
        Ago: ${data.ago}
        Views: ${data.views}

        ✦ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐈𝐋𝐌𝐏𝐔𝐁𝐋𝐈𝐒𝐇𝐄𝐑.𝐋𝐊 ✦
        `

        // Download Video File
        await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
        let down = await fg.ytv(url)
        let downloadUrl = down.dl_url
        // Upload As A Media File
        await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
        // Upload As A Document File
        await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"✦ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐈𝐋𝐌𝐏𝐔𝐁𝐋𝐈𝐒𝐇𝐄𝐑.𝐋𝐊 ✦"},{quoted:mek})

}catch(e){
    console.log(e)
    reply('${e}')
}
})