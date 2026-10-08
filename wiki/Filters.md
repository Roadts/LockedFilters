# Filters

Filter names for `check.<name>` targets. `check.all` runs every filter.

```
aristotlek12  blocksi        blocksiai      cisco
cleanbrowsing contentkeeper  deledao        dnsfilter
fortiguard    gaggle         goguardianv2   goguardianv3
hapara        iboss          lanschoolv1    lightspeed
limewize      paloalto       questito       securly
senso         smoothwallv1   smoothwallv2   sopho
studentkeeper zscaler
```

Multiple at once: `check.zscaler,securly`.

Forcepoint runs off VirusTotal data internally — it isn't a standalone filter.
