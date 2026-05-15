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

Типовая схема:

- `A` record для `@` на IP Netlify, показанные в панели сайта.
- `CNAME` для `www` на домен Netlify-сайта.

Точные значения нужно брать из панели Netlify.

## SEO redirect

Основной canonical в проекте: `https://prp-system.ru/`.

`www.prp-system.ru` должен открываться по HTTPS и вести на основной домен или быть корректным alias с тем же контентом.
