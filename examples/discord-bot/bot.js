// tiny !check bot for lockedfilters. discord.js v14
// npm i discord.js && node bot.js
const { Client, GatewayIntentBits } = require("discord.js");

const LF_ID = "YOUR_KEY_ID";            // ur lockedfilters key
const LF_TOKEN = "lockXX-YOUR_TOKEN";
const LF_BASE = "https://systempotato.ubgsucks.com";
const DISCORD_TOKEN = "YOUR_BOT_TOKEN";

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // needs the intent enabled in dev portal
  ],
});

async function check(domain, userId) {
  // discord doesnt give u the users ip so forward their id instead —
  // discord-<id> gets each user their own rate bucket
  const url = `${LF_BASE}/LockedFilters/v3/check.all/q.${encodeURIComponent(domain)}/a.rqst-rs.discord-${userId}/${LF_ID}?t=${LF_TOKEN}`;
  const res = await fetch(url);
  return res.json();
}

bot.on("messageCreate", async (m) => {
  if (m.author.bot || !m.content.startsWith("!check ")) return;
  const domain = m.content.slice(7).trim();
  const data = await check(domain, m.author.id);
  if (data.error) return m.reply(`error: ${data.error}`);
  const lines = Object.entries(data.results).map(([f, r]) => {
    const s = r.error ? "error" : r.allow ? "allowed" : "blocked";
    return `**${f}** — ${s} (${r.category || "no category"})`;
  });
  m.reply(`**${data.domain}**\n` + lines.join("\n").slice(0, 1900));
});

bot.login(DISCORD_TOKEN);
