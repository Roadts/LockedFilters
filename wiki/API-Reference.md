# API Reference

## URL format

```
/LockedFilters/v{n}/<target>/q.<query>/a.<args>/<id>?t=<token>
```

- `args` — `name-value` pairs, dot-separated (`a.rqst-rs.f-contentkeeper`);
  bare names are flags (`a.regen`)
- `rqst` is required: `rs` rest · `s` sso · `w` websocket · `rp` rpc · `wk` worker
- auth is always last: snowflake ID path segment + `?t=`/`tkn=`/`token=`

## REST (rs)

```
/v3/check.all/q.<domain>/a.rqst-rs/<id>?t=<token>
/v3/check.<f1,f2>/q.<domain>/a.rqst-rs/<id>?t=<token>
```

## SSO (s) — key management for your own users

```
/v3/key/q.new/a.rqst-s.n-<name>/<id>?t=<token>    mint a key → {"id","tkn"}
/v3/key/q.check/a.rqst-s/<id>?t=<token>           {"valid":bool}
/v3/key/q.count/a.rqst-s/<id>?t=<token>           {"keys":n}
```

## RPC (rp)

```
POST /v3/rpc/a.rqst-rp/<id>?t=<token>
body: {"m":"check|filters|key.new|key.check|key.count","d":domain,"f":csv,"n":name,"i":ip}
```

## WebSocket (w)

```
/v3/check.<filter|all>/a.rqst-w/<id>?t=<token>
```

Upgrade, then send domains as messages.

## Worker (wk) — admin, JWT-auth

```
/v3/worker/q.<name>/a.rqst-wk[.regen]/?t=<jwt>     worker output / re-run
/v3/certs/q.x/a.rqst-wk/?t=<jwt>                   list keys
/v3/cert/q.x/a.rqst-wk.mk/?t=<jwt>                 mint key (POST {"name","note","given"})
/v3/cert/q.<id>/a.rqst-wk.ban|unban|dis|en|lim|rgn|rm/?t=<jwt>
/v3/logs/a.rqst-wk[.p-<page>][.fkey-<id>][.fd-<dom>][.fip-<ip>]/?t=<jwt>
```

JWT mint: `/LockedFilters/JWT.TOKEN_<master-id>/?t=<master-token>` — 6h HS256.

## Meta

```
/LockedFilters/help    plain-text version of this doc, no auth
```
