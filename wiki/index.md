# **LockedFilters Wiki**

Filter-classification API — give it a domain, get back which web filters
block it and why.

## Pages

- [[Getting-Started]] — keys, first request, response shape
- [[API-Reference]] — every endpoint, all request modes
- [[Identity-Forwarding]] — forwarding real client IPs / UUIDs / Discord IDs
- [[Filters]] — filter names for `check.<name>`
- [[Rate-Limits]] — limits and what to do when you hit them
- [[Examples]] — website + Discord bot starters
- [[Credits]] — who built this
- [[Links]] — everything in one place

## TL;DR

```
GET https://systempotato.ubgsucks.com/LockedFilters/v3/check.all/q.<domain>/a.rqst-rs/<id>?t=<token>
```
