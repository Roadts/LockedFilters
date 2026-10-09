# Examples

working stuff lives in [`/examples`](https://github.com/Roadts/LockedFilters/tree/main/examples) on the repo.

## [Website](https://github.com/Roadts/LockedFilters/tree/main/examples/website)

one `index.html` — drop ur key in, type a domain, get the whole filter table. forwards the visitor ip so rate limits hit them not u.

## [Discord bot](https://github.com/Roadts/LockedFilters/tree/main/examples/discord-bot)

barebones `bot.js` — `!check <domain>` runs `check.all` and forwards `a.discord-<id>` so each user gets their own bucket.
