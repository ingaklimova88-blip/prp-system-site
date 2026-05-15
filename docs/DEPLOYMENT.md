# Deployment Guide

## Build

```bash
npm install
npm run build
```

Результат сборки находится в `dist/`.

## Vercel

1. Создать проект из GitHub-репозитория `prp-system-site`.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Добавить домены:
   - `prp-system.ru`
   - `www.prp-system.ru`
6. Включить redirect с `www` на основной домен или наоборот. Для SEO рекомендуется основной `https://prp-system.ru`.
7. Дождаться выпуска SSL.

## Netlify

Netlify site создан и опубликован:

- Site name: `prp-system-site`
- Site ID: `e30dbb44-389e-4e25-82ed-3276e1d83ff2`
- Admin URL: `https://app.netlify.com/projects/prp-system-site`
- Temporary production URL: `https://prp-system-site.netlify.app`
- Custom domain: `prp-system.ru`
- Domain alias: `www.prp-system.ru`

Production build задеплоен вручную через Netlify CLI из папки `dist`.

Для DNS у внешнего провайдера:

- Apex `prp-system.ru`: `A` record на `75.2.60.5`.
- `www.prp-system.ru`: `CNAME` record на `prp-system-site.netlify.app`.

После DNS Netlify должен выпустить SSL-сертификат автоматически.

## Проверки после деплоя

- `https://prp-system.ru`
- `https://www.prp-system.ru`
- `https://prp-system.ru/privacy`
- `https://prp-system.ru/personal-data-consent`
- `https://prp-system.ru/robots.txt`
- `https://prp-system.ru/sitemap.xml`

## Forms

После первой отправки FormSubmit пришлет письмо на `t0083640@yandex.ru`. Нужно подтвердить адрес. После подтверждения формы будут принимать заявки.

## SSL

SSL выпускается платформой деплоя после корректной настройки DNS. До обновления DNS сайт не сможет быть проверен на домене.
