import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/components/sections/HomeSections";
import { Section } from "@/types/sections";

const DINO_READING = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/c8ab2d33-4034-45c2-9e23-d1d311690e70.jpg";

const reviews = [
  { name: "Анна Петрова", role: "Логопед, стаж 8 лет", text: "ЛОГОША полностью изменила мой подход к онлайн-занятиям! Дети в восторге от интерактивных игр, а я вижу реальный прогресс уже после первых сессий.", rating: 5, avatar: "👩‍⚕️", city: "Москва" },
  { name: "Мария Иванова", role: "Мама Артёма, 5 лет", text: "Мой сын наконец-то полюбил логопедические занятия! Благодаря ЛОГОШЕ он занимается с удовольствием, а звукопроизношение улучшилось за 2 месяца.", rating: 5, avatar: "👩", city: "Санкт-Петербург" },
  { name: "Елена Смирнова", role: "Логопед, стаж 12 лет", text: "Наконец-то платформа, которая понимает нужды логопеда. Все материалы структурированы, есть всё необходимое для работы онлайн. Рекомендую коллегам!", rating: 5, avatar: "👩‍🏫", city: "Екатеринбург" },
  { name: "Дмитрий Козлов", role: "Папа Сони, 6 лет", text: "Дочка занимается с логопедом через ЛОГОШУ уже 3 месяца. Прогресс виден невооружённым глазом — говорит намного чище и увереннее.", rating: 5, avatar: "👨", city: "Казань" },
  { name: "Ольга Новикова", role: "Логопед, стаж 5 лет", text: "Удобный кабинет, отличная база игровых упражнений и поддержка — всё, что нужно для эффективной онлайн-работы. Мои клиенты очень довольны!", rating: 5, avatar: "👩‍💻", city: "Новосибирск" },
  { name: "Светлана Морозова", role: "Мама Мишы, 4 года", text: "Думала, что онлайн-занятия не подойдут маленькому ребёнку. Оказалось — отлично! Сын ждёт каждого урока, как праздника. Спасибо ЛОГОШЕ!", rating: 5, avatar: "🧕", city: "Краснодар" },
];

export function SubscribeSection({ setActive }: { setActive: (s: Section) => void }) {
  useReveal();
  const plans = [
    { name: "Старт", price: "490", emoji: "🌱", color: "#2ECC8A", features: ["10 игр в месяц", "1 логопед", "Базовая поддержка", "Демо-режим"], popular: false },
    { name: "Логопед", price: "990", emoji: "⭐", color: "#FF7A1A", features: ["Все 30+ игр", "1 логопед", "Настройка игр", "Приоритетная поддержка", "Новые игры каждый месяц"], popular: true },
    { name: "Центр", price: "2 490", emoji: "🏆", color: "#9B6EFF", features: ["Все игры + эксклюзив", "До 10 логопедов", "Аналитика занятий", "Настройка брендинга", "Менеджер аккаунта"], popular: false },
  ];
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF8EC 0%, #FFE8C0 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 section-reveal">
          <span className="text-5xl mb-4 block">💎</span>
          <h2 className="font-baloo font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            <span className="gradient-text">Подписка</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-xl mx-auto">7 дней бесплатно — начни прямо сейчас!</p>
          <div className="inline-flex items-center gap-2 mt-4 rounded-full px-5 py-2 border-2" style={{ background: "#2ECC8A18", borderColor: "#2ECC8A44" }}>
            <span className="font-nunito font-extrabold text-sm" style={{ color: "#2ECC8A" }}>🎁 Все планы — 7 дней бесплатно</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative bg-white rounded-3xl p-8 shadow-xl flex flex-col section-reveal transition-all hover:-translate-y-2 ${p.popular ? "ring-4 scale-105" : "border-2 border-border"}`}
              style={p.popular ? { border: `4px solid ${p.color}`, ringColor: p.color + "33" } : {}}
            >
              {p.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-white rounded-full px-5 py-1.5 font-baloo font-bold text-sm shadow-lg whitespace-nowrap" style={{ background: p.color }}>
                  🔥 Самый популярный
                </div>
              )}
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-baloo font-extrabold text-2xl text-foreground mb-2">{p.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="font-baloo text-5xl font-extrabold" style={{ color: p.color }}>{p.price}</span>
                <span className="font-nunito text-muted-foreground mb-2">₽/мес</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-nunito text-sm text-foreground">
                    <Icon name="Check" size={16} style={{ color: p.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => setActive("register")} className="w-full py-3 rounded-2xl font-baloo text-lg font-bold text-white transition-all btn-wobbly shadow-md" style={{ background: p.color }}>
                Начать бесплатно
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 section-reveal">
          <span className="text-5xl mb-4 block">💌</span>
          <h2 className="font-baloo font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Напиши <span className="gradient-text">нам</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-xl mx-auto">Есть вопросы? Мы отвечаем в течение нескольких часов!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 section-reveal">
            {[
              { icon: "Mail", label: "Email", val: "hello@logosha.ru", c: "#FF7A1A" },
              { icon: "MessageCircle", label: "Telegram", val: "@logosha_bot", c: "#4AAAFF" },
              { icon: "Phone", label: "Телефон", val: "+7 (800) 555-35-35", c: "#2ECC8A" },
              { icon: "Clock", label: "Режим работы", val: "Пн–Пт, 9:00–18:00", c: "#FF6B9D" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl p-4 border-2 hover:border-orange/40 transition-all" style={{ background: "#FFF8EC", borderColor: "#FF7A1A22" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: c.c + "22" }}>
                  <Icon name={c.icon} size={22} style={{ color: c.c }} />
                </div>
                <div>
                  <div className="font-nunito text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-nunito font-bold text-foreground">{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 section-reveal" style={{ borderColor: "#FF7A1A22", animationDelay: "0.2s" }}>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-float inline-block">🎉</div>
                <h3 className="font-baloo font-extrabold text-2xl text-foreground mb-2">Сообщение отправлено!</h3>
                <p className="font-nunito text-muted-foreground">Мы ответим вам совсем скоро 🦕</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                {[
                  { key: "name", label: "Ваше имя", placeholder: "Анна Логопедова", type: "text" },
                  { key: "email", label: "Email", placeholder: "anna@example.com", type: "email" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="font-nunito font-bold text-sm text-foreground block mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full rounded-2xl border-2 bg-muted/40 px-4 py-3 font-nunito text-sm focus:outline-none transition-colors"
                      style={{ borderColor: "#e8e8e8" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="font-nunito font-bold text-sm text-foreground block mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Ваш вопрос или предложение..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-2xl border-2 bg-muted/40 px-4 py-3 font-nunito text-sm focus:outline-none transition-colors resize-none"
                    style={{ borderColor: "#e8e8e8" }}
                  />
                </div>
                <button type="submit" className="w-full py-4 rounded-2xl text-white font-baloo text-xl font-bold btn-wobbly shadow-lg" style={{ background: "#FF7A1A" }}>
                  💌 Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection({ setActive }: { setActive: (s: Section) => void }) {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="py-24 px-4" style={{ background: "linear-gradient(135deg, #FFF8EC 0%, #FFF3E0 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 rounded-full font-nunito font-bold text-sm mb-4 text-white" style={{ background: "#FF7A1A" }}>
            ⭐ Отзывы
          </span>
          <h2 className="font-baloo font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            Нам доверяют логопеды и родители
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-xl mx-auto">
            Более 500 специалистов и семей уже занимаются с ЛОГОШЕЙ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((r, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-lg border-2 flex flex-col gap-4" style={{ borderColor: "#FF7A1A22" }}>
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <span key={s} className="text-xl">⭐</span>
                ))}
              </div>
              <p className="font-nunito text-base text-foreground leading-relaxed flex-1">
                «{r.text}»
              </p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "#f0f0f0" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "#FFF3E0" }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-baloo font-bold text-base text-foreground leading-tight">{r.name}</p>
                  <p className="font-nunito text-xs text-muted-foreground">{r.role} · {r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-3 h-3 rounded-full transition-all"
              style={{ background: i === current ? "#FF7A1A" : "#FFD4AA" }}
            />
          ))}
        </div>

        <div className="rounded-3xl p-8 md:p-12 text-center text-white" style={{ background: "linear-gradient(135deg, #FF7A1A 0%, #FF6B9D 100%)" }}>
          <div className="text-4xl mb-4">🦕</div>
          <h3 className="font-baloo font-extrabold text-2xl md:text-3xl mb-3">
            Присоединяйтесь к сообществу ЛОГОШИ!
          </h3>
          <p className="font-nunito text-base opacity-90 mb-6 max-w-md mx-auto">
            Первые 3 дня — бесплатный доступ ко всем платным материалам
          </p>
          <button
            onClick={() => setActive("register")}
            className="bg-white font-baloo font-extrabold text-lg px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            style={{ color: "#FF7A1A" }}
          >
            🚀 Попробовать бесплатно
          </button>
        </div>
      </div>
    </section>
  );
}

export function AuthSection({ mode, setActive }: { mode: "register" | "login"; setActive: (s: Section) => void }) {
  const [role, setRole] = useState<"logoped" | "parent">("logoped");
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4" style={{ background: "linear-gradient(135deg, #FFF8EC 0%, #FFE8C0 100%)" }}>
      <div className="w-full max-w-2xl">
        {mode === "register" && (
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-full flex justify-center">
              <div className="relative inline-block">
                <img
                  src="https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/bucket/4e0666af-8a46-4b4a-bd5c-bbd0d24accf1.jpg"
                  alt="Дино учитель"
                  className="w-72 md:w-96 animate-float object-contain drop-shadow-xl rounded-3xl"
                />
                <div
                  className="absolute top-[6%] left-[5%] w-[57%] h-[72%] flex items-center justify-center px-3 py-2"
                  style={{ pointerEvents: "none" }}
                >
                  <p className="font-baloo font-extrabold text-white text-center leading-snug drop-shadow-md"
                    style={{ fontSize: "clamp(10px, 2.2vw, 17px)", textShadow: "0 1px 4px rgba(0,0,0,0.45)" }}>
                    При регистрации Вам предоставляется доступ к платным материалам на{" "}
                    <span style={{ color: "#FFE566", fontSize: "1.3em" }}>3 дня</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="text-center mb-8">
          {mode === "login" && <img src={DINO_READING} alt="Логоша" className="w-28 mx-auto animate-float rounded-3xl shadow-xl mb-4 object-cover" />}
          <h2 className="font-baloo font-extrabold text-3xl md:text-4xl text-foreground">
            {mode === "register" ? "Присоединяйся к ЛОГОШЕ! 🎉" : "Добро пожаловать! 🦕"}
          </h2>
          <p className="font-nunito text-muted-foreground mt-2">
            {mode === "register" ? "" : "Войди и начни занятие"}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2" style={{ borderColor: "#FF7A1A22" }}>
          {mode === "register" && (
            <div className="flex gap-2 mb-6 rounded-2xl p-1" style={{ background: "#f5f5f5" }}>
              {(["logoped", "parent"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 py-2.5 rounded-xl font-nunito font-bold text-sm transition-all ${role === r ? "text-white shadow-md" : "text-muted-foreground"}`}
                  style={role === r ? { background: "#FF7A1A" } : {}}
                >
                  {r === "logoped" ? "👩‍⚕️ Я логопед" : "👨‍👩‍👧 Я родитель"}
                </button>
              ))}
            </div>
          )}

          <form className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="font-nunito font-bold text-sm text-foreground block mb-2">Имя</label>
                <input type="text" placeholder="Анна Логопедова" className="w-full rounded-2xl border-2 bg-muted/40 px-4 py-3 font-nunito text-sm focus:outline-none transition-colors" style={{ borderColor: "#e8e8e8" }} />
              </div>
            )}
            <div>
              <label className="font-nunito font-bold text-sm text-foreground block mb-2">Email</label>
              <input type="email" placeholder="anna@example.com" className="w-full rounded-2xl border-2 bg-muted/40 px-4 py-3 font-nunito text-sm focus:outline-none transition-colors" style={{ borderColor: "#e8e8e8" }} />
            </div>
            <div>
              <label className="font-nunito font-bold text-sm text-foreground block mb-2">Пароль</label>
              <input type="password" placeholder="••••••••" className="w-full rounded-2xl border-2 bg-muted/40 px-4 py-3 font-nunito text-sm focus:outline-none transition-colors" style={{ borderColor: "#e8e8e8" }} />
            </div>
            <button type="button" className="w-full py-4 rounded-2xl text-white font-baloo text-xl font-bold btn-wobbly shadow-lg mt-2" style={{ background: "#FF7A1A" }}>
              {mode === "register" ? "🚀 Создать аккаунт" : "🦕 Войти в ЛОГОШУ"}
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="font-nunito text-sm text-muted-foreground">
              {mode === "register" ? "Уже есть аккаунт? " : "Нет аккаунта? "}
            </span>
            <button onClick={() => setActive(mode === "register" ? "login" : "register")} className="font-nunito font-bold text-sm hover:underline" style={{ color: "#FF7A1A" }}>
              {mode === "register" ? "Войти" : "Зарегистрироваться"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
