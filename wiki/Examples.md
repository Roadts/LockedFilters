# Examples

Working examples live in [`/examples`](https://github.com/Roadts/LockedFilters/tree/main/examples)
on the main repo.

## [Website](https://github.com/Roadts/LockedFilters/tree/main/examples/website)

Single-file `index.html` — paste your key, enter a domain, get the full
filter table. Forwards the visitor's real IP via `frwdCliIp`.

## [Discord bot](https://github.com/Roadts/LockedFilters/tree/main/examples/discord-bot)

Minimal `bot.js` — `!check <domain>` prefix command that runs
`check.all` and forwards the author's Discord id via `a.discord-<id>` so
each user gets their own rate bucket.
