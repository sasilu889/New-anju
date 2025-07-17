//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZCMHB3eER1V2NqbVBJb1BRSnZZVC9wUzlwcG00enhSaUx6a0VudTIwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU0vaXRub3oyVnZpUjdyeDl1bHVSaTYwMDVYdmN6VmdHS0xrVzZybVNFaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Tlh1V2JQQzVzZUdIWXhDV2xCSzVqbjZieXJSTnJFNGFBTWRnQUNZdkg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiK3NHTnFiOEJuYlNPRzhBUDZRaGJiSG9jWVZrbjdZZ1dzQjR3WS9Cc0c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBZDd0eHVCdERMN09IdTBrNE5oN3Z5TE1RWlg1WjMwWFNzZWZtc0M4MjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhWcDJ5M1hTNVByV00walBBdFdVMWhqWUdPZ3lJdzlqZFhySzAwSURpbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBncWlIS0kyRGEyaitNNmpzRXoyelRMNW1lMHVWWng5aTFaUS92L3dGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTg0OHdUVElFMmQvaVVIdWQ1MUM4ZU9nNzN0L28xc2s4U0VXZUhhbit4dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhrMkduQ3d5Ty9qQjU0S1p1RzZuWURNZjdBNHhaeFh5M2NJRFY0RjQwMmt3Rm0yOFYyaGJkR0tCYWd4V1Nsa1pMUmVmK2Q1a2t3Q1BMcklydVhXRWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiI4dUxxanBYMFhDV3lNZzZpdkhCODZpR3ZlazBVU21QM012RmxnNUlzNStFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMTWV3X256ZVRxdXlnZnkwbWhJcWNRIiwicGhvbmVJZCI6IjJlNWE2MGNhLTUzZjMtNDMyOC1iZDJhLTkzNTljOGQxOWUwMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRkVFVXRsNm0ra3Y3VGZVbkd2empnZXNIVVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJmK2d0aTQzeHhIbDZBYVhrdnNQZkI1b3Z3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik4yTVFBSEdRIiwibWUiOnsiaWQiOiI5NDc4NDMzMTE4MDo0NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4OTY1MzQ5MTY1ODk5NDo0NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05xbmo4VURFTmFMNU1NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikg2SDd6blNOYWNESXdFdDk1T1EwUGExbEttZGRxSVpvaGo5dldURXNVajQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpVNTc2WTFjWk9UK2NVais0TkhTeTVVSmo0RFg0b2tVZk45ZXhpUUh4ZWtlQUdrUW8rN010RXozNURaa3F3ZXZ4RXFpcjZ3RUovOU15aHNrZTdINEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEMzdzRE9uRXFmZ3RudmFZTFFESHFsNU9RM1RCZzIvQTg3Q1I1eTBMQVVYam5neGFDUFdwZG5GVTl0YmozQjAyTDBYb1R4dkJFQUl4QmhUY1RNcG5pZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0MzMxMTgwOjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIraCs4NTBqV25BeU1CTGZlVGtORDJ0WlNwblhhaUdhSVkvYjFreExGSSsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjc2MTgyNywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOMHYifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784331180",
  PASSWORD: 
    process.env.PASSWORD || "Sasilu123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
