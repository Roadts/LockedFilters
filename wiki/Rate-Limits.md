# Rate Limits

Limits exist so one leaky loop can't burn the whole service.

## Defaults

| Scope | Limit |
|---|---|
| Per forwarded user (`discord.`/`uuid.` identity) | 10/min + 200/hr |
| Per API key | key's `lim` (default 10/min, `lim`×20/hr) |
| Discord bot users | 10/min + 200/hr per user |

When limited, checks return `error: "rate limited"` per filter (429 on the
REST surface).

## Unlimited keys

Founders can set `lim` to an effectively-unlimited value. Don't ask unless
you're actually running a real service.

## If you hit limits

- Check that you're forwarding the client identity — without it all your
  users share one bucket. See [[Identity-Forwarding]].
- Cache results — a domain's classification barely changes.
- Batch with `check.f1,f2` instead of one request per filter.
