# Deployment

[[Project Overview]] | [[Forms]]

## Команды

```bash
npm install
npm run build
```

## Платформы

Сайт опубликован на Netlify.

- Site name: `prp-system-site`
- Site ID: `e30dbb44-389e-4e25-82ed-3276e1d83ff2`
- Temporary URL: `https://prp-system-site.netlify.app`
- Admin URL: `https://app.netlify.com/projects/prp-system-site`

## DNS

Основной домен: `https://prp-system.ru/`.

Также проверить `https://www.prp-system.ru`.

Записи для REGRU:

- `@` / `A` / `75.2.60.5`
- `www` / `CNAME` / `prp-system-site.netlify.app`

## SSL

SSL выпускается платформой после настройки DNS.

## Доступы, которые нужны для публикации

- GitHub access или GitHub CLI auth.
- Доступ к DNS/регистратору домена.
- Доступ к Vercel/Netlify/хостингу.
- Подтверждение FormSubmit на email.
