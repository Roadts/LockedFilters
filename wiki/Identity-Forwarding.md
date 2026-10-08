# Identity Forwarding

LockedFilters rate-limits and audit-logs by the **real end user**, not by
whoever's server calls the API. If you build a service on top of it, forward
the client identity on every check.

## What to forward

| Your service | Forward | How |
|---|---|---|
| Website / app | Client's real IP | `?frwdCliIp=1.2.3.4` or `a.frwdCliIp-1-2-3-4` |
| App with accounts | Stable user UUID | `?frwdCliUuid=<uuid>` or `a.frwdCliUuid-<uuid>` |
| Discord bot | User snowflake | `?discord=<id>` or `a.discord-<id>` |
| RPC | any of the above | body `"i":"<ip>"` |

In URL args, dots separate pairs — encode IPs with dashes
(`a.frwdCliIp-203-0-113-7`). UUIDs keep their own dashes (only the first `-`
splits name from value).

## What it does

- `uuid.` and `discord.` identities get a **per-user bucket**: 10 checks/min,
  200/hr — one heavy user can't eat everyone else's allowance.
- IP identities share the key's bucket but land in the audit log so abuse
  traces back to the real user, not your server.
- Forwarding nothing = every request shares one bucket → one user rate-limits
  your whole service.

## Never forward

- Your server's IP — that hides abuse and merges your users into one bucket.
- Anything you invented per-request — the identity must be stable per user.
