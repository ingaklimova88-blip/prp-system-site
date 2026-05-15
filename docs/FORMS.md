# Forms

## Поля

- имя
- телефон
- email
- организация
- комментарий
- чекбокс согласия
- honeypot `website`

## Отправка

Используется Netlify Forms.

- Site ID: `e30dbb44-389e-4e25-82ed-3276e1d83ff2`
- Form name: `lead`
- Form ID: `6a07977561c1d20008da1cdf`
- Email notification hook: `6a0797d8cc5b308079f11142`
- Recipient: `t0083640@yandex.ru`

Тестовые заявки успешно появились в Netlify submissions.

## Альтернатива

Если понадобится полный контроль, можно заменить Netlify Forms на минимальный Node/Express backend с SMTP:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`

Секреты должны храниться только в `.env`, не в Git.
