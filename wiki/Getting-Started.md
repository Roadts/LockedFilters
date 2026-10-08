# Getting Started

LockedFilters is a filter-classification API — give it a domain, get back which
school/work web filters block it and what category they assign.

## Base URL

```
https://systempotato.ubgsucks.com
```

## Your key

Every request needs a key: a snowflake `id` and a `lock<n>-<hex>` token.
Ask a founder for one — don't share it, leaked keys get revoked.

## First check

```
GET /LockedFilters/v3/check.all/q.discord.com/a.rqst-rs/<id>?t=<token>
```

```json
{
  "domain": "discord.com",
  "results": {
    "zscaler": {
      "category": "Internet Communication (Online Chat)",
      "allow": false,
      "error": false,
      "ms": 233
    }
  }
}
```

- `allow: false` → the filter blocks it
- `category` → the classification string the filter reports
- `ms` → how long that filter took

## Check specific filters

```
/LockedFilters/v3/check.zscaler,securly/q.example.com/a.rqst-rs/<id>?t=<token>
```

Comma-separated filter names after `check.`. See [[Filters]] for the list.

## Forward the client identity

If you run a site, app, or bot that calls LockedFilters on behalf of users,
you MUST forward who the check is for — it drives rate limits and the audit log:

```
?frwdCliIp=1.2.3.4        a.frwdCliIp-1-2-3-4    site/app  → real client IP
?frwdCliUuid=<uuid>       a.frwdCliUuid-<uuid>   app       → stable user UUID
?discord=<user id>        a.discord-<user id>    discord   → user snowflake
```

Full details: [[Identity-Forwarding]]
