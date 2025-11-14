‎const fs = require('fs');
‎const path = require('path');
‎const { getConfig } = require("./lib/configdb");
‎
‎if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
‎
‎function convertToBool(text, fault = 'true') {
‎    return text === fault ? true : false;
‎}
‎
‎module.exports = {
‎    // ===== BOT CORE SETTINGS =====
‎    SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA61VWc+iSBT9L/WqaQUEweRLhk1A3BG3yTyUUGApm0Wx2fG/T/Bbuie95JukeSpqufecU+fe+gqSFOfIRg0YfQUZwSWkqB3SJkNgBJQiCBABXeBDCsEI9BX+YrCXq++ERnCFB7PTL2f8ZLzesEGlCbY1G+qOUYWZvnoBjy7IilOEvd8EnHLqcu40qFneZf2w2V49eXwv4yvRhOVmoUwNWq90e43i++AFPNqIEBOchHp2RjEiMLJRs4SYfA5+R88v41gypMV8Ejoys+KP3j6fTlm+apCzOU6Q7U5j4xCO88/B31QGHPQ4PTnlk8ueuYhblG6KBg2NLKqFwS4dwPFhuZzeVPcVfo7DBPmWjxKKafNp3Z15lPN7SyvKdbiQdX3XlMH94CnHAHvW0MYVWaSrQpkT5pO681x2S1OJCzvnjaG7rBd58vU+m8T5drJTHMNZlVierfZF/z/Al+TdK9f/pbupWSXjo7EyiepZMBEXcAchXon81l13zpW315jyvrDGO/1z8Bk3avz+se6xQa1ea2+bHbfYEKQi3d+Wolyc6/Ftwp2FtXr4Bh/SgvwOpZTPrJ52P00rXY3X2BBPiPdWwWpQkds1JtA22GO9HVs3uIbVJd2tan9fa8kl3A6EoBHMIuR62lA5Vatm6fDze7GDmia/PBldUWP5YMQ8uoCgEOeUQIrT5DnX73cB9EsHeQTRp7xgLpsILejOuTV2HDrV7dYxac8yNvcUO7NKyBjxqtgnQsrVC+iCjKQeynPkmzinKWlmKM9hiHIw+vt5Uy1pguKUogn2W6Ysx/YFiZN4nvsr/1KdIc1hln1JEAVdEJA0niEwCmCUoy54npBVQZeGgqAyAjeW+wNeEgWVHXCKpvZFjWNbEJBQ7OEMJhSMAGg5+QTlOU7CWeq3gmdJK0X8Cm6DY5RTGGdgxAwFri9xksA8un8M71hSBU3jhvJYGvJjXuZVnhsMhhonMkNZ/VN4/+mCBNX0tS7a2xQZrgsCTHLqJkUWpdB/r5qPVeh5aZFQp0k8tR0gAkb9b9OIUpyEeatBkUDinXGJ1JbxG8MPCyGCfDCipEAfbVF9BW5LR2HFDTegRd8G+kHFES/8KGT03MZIAs9KAscJAsOIbLuzXXh8IGwD+ohCHOVgBNRZpxRE2dRn0xObh4YhW6GshjL4xui99l69fXZZTztQxxRDkZX5Sg3YnEortWds5nZ1MM2Oe4kMOSoT9+UnQdpXyBr053TmnrPM4WlQKp6hcdxENxTLFom9PSiRWXo6V9oxHpxrXbyjuVgJu0qxLKlZr73xpjI2h23OG47E9afuuJor4UubzUcl9tD3ya7brJJ1W8H+ZJ66ZjZ3GbGO9aMwtW69jTJds305v6Xs3tyGiHUzRy3kVDD5pekw4a6ZXcPaOHSmvuUwC/vo2k0vW2rVa1d4dqXo7TXAb/WKn78BRs/mmsD2Bn91Ke+AW2/1H93vzr616V+0OuWwnScyO3XPPWs5DxeenEhkGrhyWV/vTm4odS+y+HU4OfEMeLQuzyJIg5TEYARg4pP0mZykRetVKwnS3yRT5dBSVuG8ZRzBnMrf/P+TouLF111LkmYmzM8teXtwNgetmRs5yxwK6Xs9Abn9JvsVePwL+262r8sIAAA=",  // Your bot's session ID (keep it secure)
‎    XDEV: process.env.XDEV || "",  // Github Username 
‎    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
‎    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
‎    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
‎    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
‎    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
‎    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS
‎
‎    // ===== OWNER & DEVELOPER SETTINGS =====
‎    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
‎    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
‎    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
‎    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID
‎
‎    // ===== AUTO-RESPONSE SETTINGS =====
‎    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
‎    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
‎    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
‎    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
‎    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
‎    // ===== REACTION & STICKER SETTINGS =====
‎    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
‎    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
‎    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
‎    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
‎    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
‎    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
‎    // ===== MEDIA & AUTOMATION =====
‎    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
‎    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
‎    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
‎    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image
‎
‎    // ===== SECURITY & ANTI-FEATURES =====
‎    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
‎    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
‎    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
‎    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
‎    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
‎    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
‎    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
‎    ANTI_BOT: process.env.ANTI_BOT || "true",
‎    PM_BLOCKER: process.env.PM_BLOCKER || "true",
‎
‎    // ===== BOT BEHAVIOR & APPEARANCE =====
‎    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
‎    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
‎    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
‎    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
‎    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
‎    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
‎    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
‎    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
‎    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
‎};
‎        
