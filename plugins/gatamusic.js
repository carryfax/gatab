let { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*#play Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, π½πΎ πΏππ³π΄ π΄π½π²πΎπ½πππ°π π΄π» π°ππ³πΈπΎ/ππΈπ³π΄πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄/ππΈπππ»πΎ*'
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
await conn.send2ButtonImg(m.chat, thumbnail, `
π *Titulo:* ${title}
π *Url:* ${url}
ποΈ *DescriciΓ³n:* ${description}
β²οΈ *Publicado:* ${publishedTime}
β *DuraciΓ³n:* ${durationH}
ποΈ *Vistas:* ${viewH}
`.trim(), author, 'πππππ', `${usedPrefix}ytmp3.2 ${url}`, 'πππππ', `${usedPrefix}ytmp4.2 ${url}`, m)
}
handler.command = /^(gatamusic)$/i
module.exports = handler
