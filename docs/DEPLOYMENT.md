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

1. Создать сайт из GitHub-репозитория.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Добавить домены:
   - `prp-system.ru`
   - `www.prp-system.ru`
5. Включить HTTPS через Netlify DNS или custom DNS.

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
