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

Используется FormSubmit:

```txt
https://formsubmit.co/t0083640@yandex.ru
```

## Важный шаг

После первой отправки заявки нужно подтвердить email в письме от FormSubmit.

## Альтернатива

Если понадобится полный контроль, можно заменить FormSubmit на минимальный Node/Express backend с SMTP:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`

Секреты должны храниться только в `.env`, не в Git.
