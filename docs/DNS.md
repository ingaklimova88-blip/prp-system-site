# DNS Notes

## Целевой домен

- `prp-system.ru`
- `www.prp-system.ru`

## Vercel

Типовая схема:

- `A` record для `@` на IP Vercel, показанный в панели проекта.
- `CNAME` для `www` на `cname.vercel-dns.com`.

Точные значения нужно брать из панели Vercel, потому что они могут отличаться для проекта.

## Netlify

Netlify site:

- `https://prp-system-site.netlify.app`
- Site ID: `e30dbb44-389e-4e25-82ed-3276e1d83ff2`

DNS-схема:

- `A` record для `@` на `75.2.60.5`.
- `CNAME` record для `www` на `prp-system-site.netlify.app`.

Эти значения соответствуют официальной схеме Netlify external DNS для standard network.

## SEO redirect

Основной canonical в проекте: `https://prp-system.ru/`.

`www.prp-system.ru` должен открываться по HTTPS и вести на основной домен или быть корректным alias с тем же контентом.
