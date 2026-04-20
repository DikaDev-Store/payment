import fs from 'fs'
import chalk from 'chalk'

/* ============== BOT INFO ============== */
global.mode = true // true = public, false = self
global.autoread = true
global.gcOnly = false
global.pairing = 'FENRYSSS'

global.ownerNumber = ['628xxx']
global.ownerName = 'junn'
global.botName = 'Fenrys Bot Store'

/* ============== KEY CASHIFY ============== */
// Ambil apikey di web https://cashify.my.id/
global.cashifyLicenseKey = 'cashify_08b21d21499b6685fb9bb9f2b02e71b655084c4ffbef214efa6f40f1f13649b7' 
global.cashifyQrisId = '973ecab8-df25-4ca3-aa71-2429da93d792'

/* ============== MESSAGE ============== */
global.mess = {
  success: '✅ Success!',
  admin: '[ !! ] *Access Denied*\nFeature For Admins Only',
  botAdmin: '[ !! ] *Access Denied*\nBot Must Be Admins',
  creator: '[ !! ] *Access Denied*\nFeature For Owner Only',
  group: '[ !! ] *Access Denied*\nFeature For Group Only',
  private: '[ !! ] *Access Denied*\nFeature For Private Only',
  wait: '⏳In Proces Please Wait',
  error: '[ !! ] *Error Please Report Owner*'
}

/* ============== AUTO RELOAD ============== */
const file = new URL(import.meta.url).pathname
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`🔄 settings.js updated`))
import(`${import.meta.url}?update=${Date.now()}`)
})