
let handler = async (m, { conn, usedPrefix, DevMode }) => {
 let caption = `
LIST HARGA SEWA BOT

Harga
_Permanen_
Seikhlasnya

Via:
Pulsa [Telkomsel]
Vocer [Telkomsel Wilayah Jatim]

Contact Owner Jika minat`
m.reply(caption)
}

handler.help = ['Sewa','SewaBot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i
handler.register = false
handler.fail = null

module.exports = handler
