import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';

const CONTACT_EMAIL = 't0083640@yandex.ru';
const CONTACT_PHONE = '+7 981 008-36-40';
const DOMAIN = 'https://prp-system.ru';
const ARTHREX_IMAGE =
  'https://cdn.arthrex.io/image/upload/c_pad,w_900/f_auto/v1/Arthrex.com/Taxonomy%20Pages/Orthobiologics/Product/arthrex_angel_system';

const nav = [
  ['О системе', '#system'],
  ['Преимущества', '#benefits'],
  ['Расходные материалы', '#consumables'],
  ['FAQ', '#faq'],
  ['Контакты', '#contact'],
] as const;

const benefits = [
  'Технология 3ST',
  'Автоматизация цикла',
  'Закрытый стерильный контур',
  'Регулируемая концентрация компонентов',
  'Воспроизводимость процесса',
  'Обработка крови и костного мозга',
  'До 540 мл материала за 3 цикла',
];

const steps = [
  ['Забор материала', 'Подготавливается аутологичная кровь или смесь крови и костного мозга.'],
  ['Загрузка в набор', 'Материал поступает в одноразовый стерильный контур обработки Angel.'],
  ['Автоматический цикл', 'Система выполняет сепарацию с использованием сенсорного контроля компонентов.'],
  ['Получение компонентов', 'Доступны фракции PRP, PPP, RBC и BMC в предусмотренных контурах сбора.'],
];

const faq = [
  {
    q: 'Что такое PRP-система?',
    a: 'PRP-система - это оборудование и расходный контур для подготовки плазмы, обогащенной тромбоцитами, из аутологичного материала.',
  },
  {
    q: 'Что такое cPRP?',
    a: 'cPRP означает concentrated platelet-rich plasma: концентрированную обогащенную тромбоцитами плазму.',
  },
  {
    q: 'Как работает Arthrex Angel System?',
    a: 'Angel System использует автоматизированный цикл, центрифугирование и сенсорный контроль для разделения компонентов крови и подготовки PRP-формуляций.',
  },
  {
    q: 'Это обычная лабораторная центрифуга?',
    a: 'Нет. Angel System описывается производителем как автоматизированная система подготовки cPRP с технологией 3ST и закрытым одноразовым контуром.',
  },
  {
    q: 'Какие расходные материалы используются?',
    a: 'Для обработки cPRP используется одноразовый стерильный набор Angel с разделительной камерой переменного объема, резервуаром-мешком с тремя отделениями, PRP-клапаном, шприцем Luer-Lock 20 мл и трубками контура прокачки.',
  },
  {
    q: 'Можно ли запросить КП?',
    a: 'Да. Оставьте заявку, и специалист свяжется с вами для уточнения запроса и подготовки коммерческого предложения.',
  },
  {
    q: 'Можно ли купить только расходные материалы?',
    a: 'Да, можно отправить запрос по расходным материалам. Совместимость и условия поставки уточняются индивидуально.',
  },
  {
    q: 'Для чего используется PRP?',
    a: 'PRP применяется в направлениях, где используются аутологичные биологические материалы, включая ортопедию, травматологию, спортивную медицину, хирургию и регенеративную медицину.',
  },
  {
    q: 'Что такое PPP?',
    a: 'PPP - platelet-poor plasma, плазма с низким содержанием тромбоцитов, одна из фракций, получаемых при сепарации.',
  },
  {
    q: 'Как уточнить совместимость?',
    a: 'Отправьте модель системы, тип задачи и доступные данные по используемым расходным материалам через форму заявки.',
  },
];

function setMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(path: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = `${DOMAIN}${path}`;
}

function LeadForm({ compact = false, source }: { compact?: boolean; source: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const hp = new FormData(form).get('website');
    if (hp) {
      event.preventDefault();
      return;
    }
    if (!form.checkValidity()) {
      return;
    }
    setSent(true);
  };

  return (
    <form
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-4 rounded-lg border border-line bg-white p-5 shadow-soft"
    >
      <input type="hidden" name="_subject" value={`Заявка с prp-system.ru: ${source}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${DOMAIN}/?form=sent`} />
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className={compact ? 'grid gap-4 sm:grid-cols-2' : 'space-y-4'}>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-900">Имя</span>
          <input name="name" required minLength={2} className="focus-ring w-full rounded-md border border-line px-3 py-3" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-900">Телефон</span>
          <input
            name="phone"
            required
            inputMode="tel"
            pattern="^[0-9+()\\-\\s]{7,}$"
            className="focus-ring w-full rounded-md border border-line px-3 py-3"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-900">Email</span>
          <input name="email" required type="email" className="focus-ring w-full rounded-md border border-line px-3 py-3" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-navy-900">Организация</span>
          <input name="organization" className="focus-ring w-full rounded-md border border-line px-3 py-3" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-navy-900">Комментарий</span>
        <textarea name="comment" rows={compact ? 3 : 4} className="focus-ring w-full rounded-md border border-line px-3 py-3" />
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-steel">
        <input type="checkbox" name="personal_data_consent" required className="mt-1 h-4 w-4 rounded border-line text-navy-700" />
        <span>
          Я соглашаюсь с обработкой персональных данных и принимаю условия{' '}
          <a className="font-medium text-navy-700 underline" href="/privacy">
            политики конфиденциальности
          </a>{' '}
          и{' '}
          <a className="font-medium text-navy-700 underline" href="/personal-data-consent">
            согласия
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy-700 px-5 py-3 font-semibold text-white transition hover:bg-navy-900"
      >
        Отправить заявку <ArrowRight size={18} aria-hidden="true" />
      </button>
      {sent ? <p className="text-sm text-navy-700">Заявка отправляется. После первой заявки FormSubmit может запросить подтверждение email.</p> : null}
    </form>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="focus-ring rounded text-base font-bold text-navy-900">
          PRP System
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-steel transition hover:text-navy-900">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-sm font-semibold text-navy-900">
            {CONTACT_PHONE}
          </a>
          <a className="focus-ring rounded-md bg-navy-700 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-900" href="#contact">
            Получить КП
          </a>
        </div>
        <button className="focus-ring rounded-md p-2 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Меню">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-3" aria-label="Мобильная навигация">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 font-medium text-navy-900">
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function HomePage() {
  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }),
    [],
  );

  const medicalDeviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalDevice',
    name: 'Arthrex Angel System',
    description:
      'Автоматизированная система подготовки концентрированной обогащенной тромбоцитами плазмы (cPRP) с технологией 3ST.',
    manufacturer: {
      '@type': 'Organization',
      name: 'Arthrex',
      url: 'https://www.arthrex.com/orthobiologics/arthrex-angel-system',
    },
    url: DOMAIN,
  };

  useEffect(() => {
    document.title = 'PRP-система Arthrex Angel System | cPRP оборудование и набор Angel';
    setMeta(
      'description',
      'PRP-система Arthrex Angel System для подготовки cPRP: 3ST, закрытый стерильный контур, обработка 40-180 мл за цикл. Запрос КП и информации по набору Angel.',
    );
    setCanonical('/');
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalDeviceSchema) }} />
      <main>
        <section className="bg-gradient-to-b from-navy-50 to-white">
          <div className="section grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">cPRP / PRP оборудование</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
                PRP-система Arthrex Angel System
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                Автоматизированная система подготовки концентрированной обогащенной тромбоцитами плазмы (cPRP).
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-navy-700 px-6 py-3 font-semibold text-white hover:bg-navy-900" href="#contact">
                  Получить КП <ArrowRight size={18} />
                </a>
                <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-navy-700 px-6 py-3 font-semibold text-navy-900 hover:bg-white" href="#consumables">
                  Запросить информацию
                </a>
              </div>
              <div className="mt-10 grid gap-3 text-sm text-steel sm:grid-cols-3">
                {['40-180 мл за цикл', 'До 18x baseline', 'PRP / PPP / RBC / BMC'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-navy-500" /> {item}
                  </div>
                ))}
              </div>
              <img
                src={ARTHREX_IMAGE}
                alt="Официальное изображение Arthrex Angel System"
                className="mt-10 h-auto w-full max-w-xl rounded-lg border border-line bg-white object-contain p-4 shadow-soft"
                loading="eager"
                width="900"
                height="620"
              />
              <p className="mt-3 text-xs text-steel">Источник изображения: официальный сайт Arthrex.</p>
            </div>
            <div aria-label="Форма запроса коммерческого предложения">
              <LeadForm source="Hero" />
            </div>
          </div>
        </section>

        <section id="system" className="section">
          <div className="max-w-3xl">
            <p className="eyebrow">О системе</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Система подготовки PRP и cPRP</h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              cPRP - концентрированная обогащенная тромбоцитами плазма. PPP - плазма с низким содержанием тромбоцитов. При
              сепарации аутологичный материал разделяется на фракции, а система Angel контролирует процесс с помощью 3ST и
              автоматизированного цикла.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {['cPRP', 'PPP', 'PRP', 'BMC'].map((term) => (
              <article key={term} className="rounded-lg border border-line p-6">
                <h3 className="text-xl font-semibold text-navy-900">{term}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  Компонент, получаемый в процессе обработки и сепарации материала в предусмотренном контуре системы.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="bg-navy-50">
          <div className="section">
            <p className="eyebrow">Преимущества</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold text-navy-900 sm:text-4xl">Ключевые характеристики Angel System</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <article key={item} className="rounded-lg border border-line bg-white p-6">
                  <ShieldCheck className="text-navy-500" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-navy-900">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">Процесс</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Как работает система</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article key={title} className="rounded-lg border border-line p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 font-bold text-white">{index + 1}</div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="consumables" className="bg-white">
          <div className="section">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="eyebrow">Расходные материалы Arthrex Angel</p>
                <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Набор cPRP для системы Angel</h2>
              </div>
              <article className="rounded-lg border border-line p-6 shadow-soft">
                <FlaskConical className="text-navy-500" size={28} />
                <h3 className="mt-4 text-2xl font-bold text-navy-900">
                  Набор Angel для обработки обогащенной тромбоцитами концентрированной плазмы (cPRP)
                </h3>
                <p className="mt-4 leading-7 text-steel">
                  Одноразовый стерильный набор используется совместно с системой Angel и обеспечивает закрытый контур обработки
                  40-180 мл за цикл.
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-steel sm:grid-cols-2">
                  {[
                    'разделительная камера переменного объема',
                    'резервуар-мешок с тремя отделениями',
                    'PRP-клапан',
                    'шприц Luer-Lock 20 мл',
                    'трубки контура прокачки',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-navy-500" /> {item}
                    </li>
                  ))}
                </ul>
                <a className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-navy-700 px-5 py-3 font-semibold text-white hover:bg-navy-900" href="#contact">
                  Запросить информацию <ArrowRight size={18} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-navy-900 text-white">
          <div className="section">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-100">Направления применения</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Для медицинских организаций и профильных специалистов</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {['ортопедия', 'травматология', 'спортивная медицина', 'хирургия', 'регенеративная медицина'].map((item) => (
                <div key={item} className="rounded-lg border border-white/20 p-5 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Вопросы по PRP-системе и наборам cPRP</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faq.map((item) => (
              <details key={item.q} className="rounded-lg border border-line p-5">
                <summary className="cursor-pointer text-lg font-semibold text-navy-900">{item.q}</summary>
                <p className="mt-3 leading-7 text-steel">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-navy-50">
          <div className="section grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Заявка</p>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Запросить КП или информацию</h2>
              <div className="mt-8 space-y-4 text-steel">
                <a className="flex items-center gap-3 text-navy-900" href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                  <Phone size={20} /> {CONTACT_PHONE}
                </a>
                <a className="flex items-center gap-3 text-navy-900" href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail size={20} /> {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <LeadForm compact source="Final CTA" />
          </div>
        </section>
      </main>
      <a
        href="#contact"
        className="focus-ring fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-navy-700 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-navy-900"
      >
        <ClipboardCheck size={18} /> КП
      </a>
    </>
  );
}

function LegalPage({ type }: { type: 'privacy' | 'consent' }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Политика конфиденциальности' : 'Согласие на обработку персональных данных';

  useEffect(() => {
    document.title = `${title} | PRP System`;
    setMeta('description', `${title} сайта prp-system.ru. Оператор персональных данных: ИП Лебедь Н. В.`);
    setCanonical(isPrivacy ? '/privacy' : '/personal-data-consent');
  }, [isPrivacy, title]);

  return (
    <main className="section max-w-4xl">
      <p className="eyebrow">Юридическая информация</p>
      <h1 className="mt-3 text-4xl font-bold text-navy-900">{title}</h1>
      <div className="prose prose-slate mt-8 max-w-none text-steel">
        <p>
          Оператор персональных данных: ИП Лебедь Н. В. Реквизиты предоставляются по запросу. Email: {CONTACT_EMAIL}. Телефон:{' '}
          {CONTACT_PHONE}.
        </p>
        {isPrivacy ? (
          <>
            <h2>1. Общие положения</h2>
            <p>
              Настоящая политика описывает порядок обработки персональных данных пользователей сайта prp-system.ru в соответствии с
              применимыми требованиями законодательства РФ, включая Федеральный закон N 152-ФЗ.
            </p>
            <h2>2. Какие данные обрабатываются</h2>
            <p>Оператор может обрабатывать имя, телефон, email, организацию, комментарий из формы заявки, технические данные и cookies.</p>
            <h2>3. Цели обработки</h2>
            <p>Данные используются для обработки заявок, обратной связи, подготовки ответа на запрос, улучшения работы сайта и защиты от спама.</p>
            <h2>4. Cookies</h2>
            <p>Сайт может использовать cookies и технические идентификаторы для корректной работы, аналитики и повышения удобства использования.</p>
            <h2>5. Хранение и защита</h2>
            <p>Данные хранятся в течение срока, необходимого для обработки заявки и выполнения законных целей обработки.</p>
            <h2>6. Права пользователя</h2>
            <p>Пользователь вправе запросить сведения об обработке, уточнение, блокирование или удаление данных, а также отозвать согласие.</p>
            <h2>7. Отзыв согласия и удаление данных</h2>
            <p>Для отзыва согласия или запроса удаления данных направьте письмо на {CONTACT_EMAIL}.</p>
          </>
        ) : (
          <>
            <h2>1. Согласие</h2>
            <p>
              Отправляя форму на сайте, пользователь свободно, своей волей и в своем интересе дает согласие оператору ИП Лебедь Н. В. на
              обработку персональных данных.
            </p>
            <h2>2. Перечень данных</h2>
            <p>Обрабатываются имя, телефон, email, организация, комментарий, технические сведения о заявке и cookies.</p>
            <h2>3. Действия с данными</h2>
            <p>
              Согласие включает сбор, запись, систематизацию, накопление, хранение, уточнение, использование, передачу сервисам обработки
              заявок, блокирование, удаление и уничтожение данных.
            </p>
            <h2>4. Цели обработки</h2>
            <p>Цели обработки: прием и обработка заявки, обратная связь, подготовка ответа, ведение деловой переписки и защита сайта от спама.</p>
            <h2>5. Срок действия</h2>
            <p>Согласие действует до достижения целей обработки или до отзыва согласия пользователем.</p>
            <h2>6. Отзыв согласия</h2>
            <p>Отозвать согласие и запросить удаление данных можно письмом на {CONTACT_EMAIL}.</p>
          </>
        )}
      </div>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname;

  return (
    <>
      <Header />
      {path === '/privacy' ? <LegalPage type="privacy" /> : path === '/personal-data-consent' ? <LegalPage type="consent" /> : <HomePage />}
      <footer className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-steel sm:px-6 lg:px-8">
          <p className="font-semibold text-navy-900">PRP System</p>
          <p>Информационный сайт о PRP-системе Arthrex Angel System и наборе Angel для cPRP.</p>
          <p>
            <a className="underline" href="/privacy">
              Политика конфиденциальности
            </a>{' '}
            ·{' '}
            <a className="underline" href="/personal-data-consent">
              Согласие на обработку персональных данных
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
