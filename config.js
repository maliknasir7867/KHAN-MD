const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VU2a7iOBD9F78GNdkXpCtNEvawhCVso3nIYoIh2MF2IKHFv4/CXaWebt1581KuOufUcf0EmCAGPViB1k+QU3QNOayXvMohaAGn2O8hBQ2QhDwELUCmF3VMgssQLydMhapmLldDaagI7MiJKF7MKnKn2tm1pPQFPBogL6IMxX9IOJpLSz+7kki4DgwRUadUF0t1U8wNMtZ75aQ56Qr+cRNKcvACHnXGEFGE005+gGdIw8yDlR8i+j34QXveoWkl2mOvm6z5zZeczhpfKqkvDrJSLZh8l/xVb9Zf29+DL2lQOOFB01hG58NgTugcR2dz7uiLC66IoHlwqabeyjnY8St8hlIMk0ECMUe8+rbu5qRqGoXfVRI2N2ad5vI2ZLuTtaOFkqw3l7K5P88WK+cWBrNv6s46N7JTJkSemIcZS6zuHsbxJuJYVhMnmMJUjiIlLaZo+xW4T9+9cvo/uouTVDlmdplftiaCSig6en9NnDNue7Bru14kaIdUEZreSvwe/AQdDofjbtHD8tqVyEXRJouexmO4wWnWpkgW7e2wW/Xg8YvuIS/on1CmaiGsd+1NXCwQIaVzbEplOWbxLNqPhLLJk1Ag6j2WrrItbK58gJLhbRQMs56f77roNvfZab1hPnOvpCLN6dqI/MCdvTwZnWA1SEBLejQAhSlinIYcEfw8k60GCJPrAsYU8qe8YDXoLwx/NC7iQBdXSDDKfDJWnZXp61Hghrq13ZqGtRqXsvgCGiCnJIaMwaSPGCe0GkPGwhQy0Pr72amaNIVnwuEQJaAFLFmRRd1SLE1T/mI/boeQszDPf2DIQQPsKTmPIWjtw4zBBni+sF2nbVumKcuq2VaUjmi2JUfp2k5HkSzZUGoQIeUoRnmIOWgBUHNKKGQM4XRMklrwHNdSnF/BLdEZMh6ec9CSDF0RLUUX1cc/DYBhyV99VqtjSkoD7BFlPMBFnpEweXfhx20Yx6TAfFHh2K0XkIKW9HkMOUc4ZbUGBQ5pfEBX6NaM3xh+tARSmIAWpwX8GDPuK/B2X9L6tuuBGn2d6BcVW5r2q5DZM0yydE22dEXRdUky5Tqyvnh8IKwTJpCHKGOgBdyxcNVNu9+Z3LcyS3s9u5PabmqDT0bvXn71yiGQ4/aWL/pmasq2dnP3MuPWzG32lhPvtu33heCY9ezsioOX/0gCWqDc+fHpOnPZfbQceLC9GlrFeL40Lmc2g9wlPW8bbSy98hO2CvpZuztcsV6noKNK0MQ0IunGv06M6nS8yee7bLjBouM56UtdLYFXFMOvxaaFx9PDonTwtuMWg91ophpG3+pt4s1KXtPpjefeYBFd4qZndpx44cfjC2Z7mOxN8SJAe6aXAt7qZvdU3TvDXnu3vt1d+/WXPX959jZd0Zv/0XO7R/A5rHBYd/B3TXkHXHtLfDS+vH0be78ZHc52NcG2PAoOzYE/SaexjS062gf2tTzdF6znlM1soM3TYaRJ4FG7PM9Cvif0DFogxAklz+KUFLVXB3hP/lDMtdOBM0snNeMsZNz+9P+vn0qzzNcon5K8H7JDTd5TD30VPP4FPFRviv4HAAA=",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
