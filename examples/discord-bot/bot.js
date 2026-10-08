// minimal lockedfilters discord bot — discord.js v14
// npm i discord.js    node bot.js
const { Client, GatewayIntentBits } = require("discord.js");

const LF_ID = "YOUR_KEY_ID";
const LF_TOKEN = "lockXX-YOUR_TOKEN";
const LF_BASE = "https://systempotato.ubgsucks.com";
const DISCORD_TOKEN = "YOUR_BOT_TOKEN";
const PREFIX = "!";

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

async function check(domain, userId) {
  // forward the user's snowflake — discord hides real IPs, so the id is the
  // identity. each user gets their own 10/min + 200/hr bucket.
  const url =
    `${LF_BASE}/LockedFilters/v3/check.all/q.${encodeURIComponent(domain)}` +
    `/a.rqst-rs.discord-${userId}/${LF_ID}?t=${LF_TOKEN}`;
  const res = await fetch(url);
  return res.json();
}

bot.on("messageCreate", async (m) => {
  if (m.author.bot || !m.content.startsWith(PREFIX + "check ")) return;
  const domain = m.content.slice(PREFIX.length + 6).trim();
  const data = await check(domain, m.author.id);
  if (data.error) return m.reply(`error: ${data.error}`);
  const lines = Object.entries(data.results).map(([f, r]) => {
    const s = r.error ? "error" : r.allow ? "allowed" : "blocked";
    return `**${f}** — ${s} (${r.category || "no category"})`;
  });
  m.reply(`**${data.domain}**\n` + lines.join("\n").slice(0, 1900));
});

bot.login(DISCORD_TOKEN);
