# prp-system-site

Production-ready сайт для домена `prp-system.ru` о PRP-системе Arthrex Angel System и расходном наборе Angel для обработки cPRP.

## Стек

- React
- TypeScript
- Vite
- TailwindCSS
- FormSubmit для заявок

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Страницы

- `/` - главная страница
- `/privacy` - политика конфиденциальности
- `/personal-data-consent` - согласие на обработку персональных данных

## Формы

Формы отправляются через FormSubmit на `t0083640@yandex.ru`.

Важно: FormSubmit обычно требует подтвердить email получателя после первой отправки формы. До подтверждения заявки могут не приходить.

## SEO

Реализованы:

- semantic HTML
- H1-H3 структура
- title и meta description
- canonical
- OpenGraph
- FAQPage schema
- MedicalDevice schema
- `robots.txt`
- `sitemap.xml`
- lazy loading для изображений ниже первого экрана
- clean URLs через конфиги Vercel/Netlify

## Источники

Контент собран только из подтвержденных данных пользователя и официальных материалов Arthrex:

- https://www.arthrex.com/orthobiologics/arthrex-angel-system
- https://www.arthrex.com/resources/DFU-0262-3/angel-concentrated-platelet-rich-plasma-cprp-system-operators-manual
- локальные PDF-инструкции, переданные владельцем проекта

Коммерческие данные, цены, сроки поставки, наличие, регистрационные номера и гарантии не публикуются.

## Деплой

Рекомендуемый быстрый вариант: Vercel или Netlify.

После публикации нужно:

1. Подключить домен `prp-system.ru`.
2. Настроить `www.prp-system.ru` как alias/redirect.
3. Дождаться выпуска SSL-сертификата.
4. Проверить формы и подтвердить FormSubmit.
5. Отправить `https://prp-system.ru/sitemap.xml` в Яндекс.Вебмастер и Google Search Console.

Подробности: [Deployment Guide](./docs/DEPLOYMENT.md).
