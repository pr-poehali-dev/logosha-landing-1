import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const DINO_READING = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/c8ab2d33-4034-45c2-9e23-d1d311690e70.jpg";
const DINO_SIGN = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/b6020736-8ae8-4638-aa34-10aa8acc1e5a.jpg";
const DINO_RUNNING = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/e4426449-933a-447c-bd66-7b0ea3941588.jpg";
const DINO_STUDY = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/eccc1ef0-044a-47c4-8abc-c33c1603fae7.jpg";
const PHOTO_ONLINE = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/2e961a2c-b738-4c8e-918b-2fa3e2243086.jpg";
const DINO_TEACHER = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/eccc1ef0-044a-47c4-8abc-c33c1603fae7.jpg";
const PHOTO_METHODS = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/8ff23eed-b21f-4900-ae31-a55f14aabe7d.jpg";

type Section = "home" | "about" | "games" | "blog" | "reviews" | "subscribe" | "contact" | "register" | "login";

const games = [
  { name: "Буквоград", desc: "Учим буквы через весёлые приключения", emoji: "🏙️", color: "#FF7A1A" },
  { name: "Звуковое лото", desc: "Тренируем звукопроизношение играя", emoji: "🎲", color: "#FF6B9D" },
  { name: "Слоговой паровоз", desc: "Делим слова на слоги весело", emoji: "🚂", color: "#9B6EFF" },
  { name: "Рифмушки", desc: "Находим рифмы и развиваем речь", emoji: "🎵", color: "#2ECC8A" },
  { name: "Картинки-слова", desc: "Расширяем словарный запас", emoji: "🖼️", color: "#4AAAFF" },
  { name: "Прятки звуков", desc: "Ищем звук в начале, середине, конце", emoji: "🔍", color: "#FFD93D" },
  { name: "Арт. гимнастика", desc: "Упражнения для органов речи", emoji: "👅", color: "#FF7A1A" },
  { name: "Логопедическое домино", desc: "Классическая игра для речи", emoji: "🀄", color: "#FF6B9D" },
];

const blogPosts = [
  { title: "Как выбрать игры для автоматизации звука Р", date: "5 апр 2026", tag: "Советы", emoji: "📝" },
  { title: "Дистанционная логопедия: плюсы и минусы", date: "28 мар 2026", tag: "Опыт", emoji: "💻" },
  { title: "ТОП-5 игр для развития фонематического слуха", date: "15 мар 2026", tag: "ТОП", emoji: "⭐" },
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

function Bubbles() {
  const bubbles: { s: number; top?: string; bottom?: string; left?: string; right?: string; c: string }[] = [
    { s: 200, top: "6%", left: "3%", c: "#FF7A1A" },
    { s: 130, top: "18%", right: "4%", c: "#FF6B9D" },
    { s: 90, bottom: "28%", left: "7%", c: "#9B6EFF" },
    { s: 65, top: "62%", right: "12%", c: "#2ECC8A" },
    { s: 180, bottom: "4%", right: "18%", c: "#FFD93D" },
    { s: 75, top: "44%", left: "42%", c: "#4AAAFF" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble animate-blob"
          style={{
            width: b.s, height: b.s,
            top: b.top, left: b.left,
            right: b.right, bottom: b.bottom,
            background: b.c,
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}
    </div>
  );
}

function Navbar({ active, setActive }: { active: Section; setActive: (s: Section) => void }) {
  const [open, setOpen] = useState(false);
  const links: { key: Section; label: string }[] = [
    { key: "home", label: "Главная" },
    { key: "about", label: "Обо мне" },
    { key: "games", label: "Игры" },
    { key: "blog", label: "Блог" },
    { key: "reviews", label: "Отзывы" },
    { key: "subscribe", label: "Подписка" },
    { key: "contact", label: "Контакты" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b-4 border-orange/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => setActive("home")} className="flex items-center gap-2 group">
          <span className="text-3xl group-hover:animate-wiggle inline-block transition-all">🦕</span>
          <span className="font-baloo font-extrabold text-2xl" style={{ color: "#FF7A1A" }}>ЛОГОША</span>
        </button>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => setActive(l.key)}
              className={`nav-link px-3 py-2 rounded-xl font-nunito font-bold text-sm transition-all ${active === l.key ? "text-white" : "text-foreground hover:text-orange"}`}
              style={active === l.key ? { background: "#FF7A1A" } : {}}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <button onClick={() => setActive("login")} className="px-4 py-2 rounded-2xl font-nunito font-bold text-sm border-2 transition-all btn-wobbly" style={{ borderColor: "#FF7A1A", color: "#FF7A1A" }}>
            Войти
          </button>
          <button onClick={() => setActive("register")} className="px-4 py-2 rounded-2xl font-nunito font-bold text-sm text-white transition-all btn-wobbly shadow-md" style={{ background: "#FF7A1A" }}>
            Регистрация
          </button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={26} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t-2 border-orange/20 px-4 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => { setActive(l.key); setOpen(false); }}
              className={`w-full text-left px-4 py-2 rounded-xl font-nunito font-bold ${active === l.key ? "text-white" : "text-foreground"}`}
              style={active === l.key ? { background: "#FF7A1A" } : {}}
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-2 mt-2">
            <button onClick={() => { setActive("login"); setOpen(false); }} className="flex-1 py-2 rounded-2xl border-2 font-nunito font-bold text-sm" style={{ borderColor: "#FF7A1A", color: "#FF7A1A" }}>Войти</button>
            <button onClick={() => { setActive("register"); setOpen(false); }} className="flex-1 py-2 rounded-2xl text-white font-nunito font-bold text-sm" style={{ background: "#FF7A1A" }}>Регистрация</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection({ setActive }: { setActive: (s: Section) => void }) {
  useReveal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, #FFF8EC 0%, #FFF0D6 50%, #FFE8C0 100%)" }}>
      <Bubbles />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="section-reveal">
          <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-6 shadow-sm border-2" style={{ borderColor: "#FF7A1A33" }}>
            <span className="text-lg">🎉</span>
            <span className="font-nunito font-bold text-sm" style={{ color: "#FF7A1A" }}>Интерактивная площадка для логопедов</span>
          </div>
          <h1 className="font-baloo font-extrabold text-5xl md:text-7xl leading-tight mb-6">
            <span className="gradient-text">ЛОГОША</span>
            <br />
            <span className="text-foreground text-4xl md:text-5xl">Учимся играя! 🦕</span>
          </h1>
          <p className="font-nunito text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Удивительное пространство интерактивных игр для логопедов, работающих онлайн.
            Игры на основе коррекционно-педагогических принципов — со звуком, движением и радостью!
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActive("games")} className="btn-wobbly px-8 py-4 rounded-3xl text-white font-baloo text-xl font-extrabold shadow-lg transition-all" style={{ background: "#FF7A1A" }}>
              🎮 Смотреть игры
            </button>
            <button onClick={() => setActive("register")} className="btn-wobbly px-8 py-4 rounded-3xl border-2 bg-white font-baloo text-xl font-extrabold shadow-md hover:opacity-90 transition-all" style={{ borderColor: "#FF7A1A", color: "#FF7A1A" }}>
              Попробовать бесплатно
            </button>
          </div>
          <div className="flex gap-8 mt-10">
            {[{ val: "500+", label: "логопедов" }, { val: "30+", label: "игр" }, { val: "10 000+", label: "детей" }].map((s) => (
              <div key={s.val}>
                <div className="font-baloo text-3xl font-extrabold" style={{ color: "#FF7A1A" }}>{s.val}</div>
                <div className="font-nunito text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center section-reveal" style={{ animationDelay: "0.3s" }}>
          <div className="absolute w-80 h-80 rounded-full animate-blob" style={{ background: "#FF7A1A33" }} />
          <div className="absolute w-60 h-60 rounded-full animate-blob" style={{ background: "#FF6B9D22", animationDelay: "2s" }} />
          <img src={DINO_READING} alt="Динозавр Логоша" className="relative z-10 w-80 md:w-96 animate-float rounded-3xl shadow-2xl object-cover" />
          <div className="absolute top-4 right-4 text-5xl animate-wiggle">⭐</div>
          <div className="absolute bottom-8 left-4 text-4xl animate-float-slow" style={{ animationDelay: "1s" }}>🎈</div>
          <div className="absolute top-20 left-0 text-3xl animate-float" style={{ animationDelay: "2s" }}>🌟</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t-2 border-orange/20 py-4 z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "Gamepad2", text: "Интерактивные игры", color: "#FF7A1A" },
            { icon: "Volume2", text: "Звуковые стимулы", color: "#FF6B9D" },
            { icon: "Monitor", text: "Работа онлайн", color: "#9B6EFF" },
            { icon: "Heart", text: "Для детей с любовью", color: "#2ECC8A" },
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center" style={{ background: f.color + "22" }}>
                <Icon name={f.icon} size={20} style={{ color: f.color }} />
              </div>
              <span className="font-nunito font-bold text-sm">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  useReveal();
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, #FFF8EC 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 section-reveal">
          <span className="text-5xl mb-4 block">👩‍⚕️</span>
          <h2 className="font-baloo font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Обо <span className="gradient-text">мне</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            Логопед с многолетним опытом работы онлайн, создаю инструменты которые делают занятия эффективными и радостными
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="section-reveal order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2" style={{ borderColor: "#FF7A1A33" }}>
              <div className="flex items-center gap-4 mb-6">
                <img src={DINO_STUDY} alt="Логоша" className="w-20 h-20 rounded-2xl object-cover shadow-md" />
                <div>
                  <h3 className="font-baloo font-bold text-2xl text-foreground">Логопед-дефектолог</h3>
                  <p className="font-nunito text-muted-foreground">Основатель ЛОГОШИ</p>
                </div>
              </div>
              <p className="font-nunito text-base text-muted-foreground leading-relaxed mb-6">
                Я создала ЛОГОШУ, потому что хотела дать логопедам настоящие инструменты для онлайн-работы с детьми.
                Каждая игра разработана с опорой на коррекционно-педагогические принципы — так, чтобы ребёнок не просто
                играл, а развивался. Мои материалы используют более 500 специалистов по всей стране.
              </p>
              <div className="flex flex-wrap gap-3">
                {["🎓 Дефектология", "🏆 10 лет опыта", "📚 Авторские методики", "💻 Онлайн-формат"].map((tag) => (
                  <span key={tag} className="rounded-full px-3 py-1 font-nunito font-bold text-sm" style={{ background: "#FF7A1A18", color: "#FF7A1A" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 order-1 lg:order-2 section-reveal" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-56 relative group">
              <img src={PHOTO_ONLINE} alt="Онлайн занятие" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-1">
                <span className="font-nunito font-bold text-sm text-foreground">💻 Онлайн занятие</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-44 relative group">
                <img src={PHOTO_METHODS} alt="Методические материалы" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-2xl px-2 py-1">
                  <span className="font-nunito font-bold text-xs text-foreground">📚 Методики</span>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-44 relative group">
                <img src={DINO_TEACHER} alt="Обучающие материалы" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-2xl px-2 py-1">
                  <span className="font-nunito font-bold text-xs text-foreground">🦕 ЛОГОША</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 section-reveal" style={{ animationDelay: "0.4s" }}>
          {[
            { num: "10", unit: "лет", text: "опыта работы", emoji: "⭐", c: "#FF7A1A" },
            { num: "500+", unit: "", text: "логопедов доверяют", emoji: "👩‍⚕️", c: "#FF6B9D" },
            { num: "30+", unit: "", text: "авторских игр", emoji: "🎮", c: "#9B6EFF" },
            { num: "10K+", unit: "", text: "довольных детей", emoji: "🌟", c: "#2ECC8A" },
          ].map((a) => (
            <div key={a.text} className="bg-white rounded-3xl p-6 text-center shadow-lg border-2 hover:border-orange/50 transition-all hover:-translate-y-1 group">
              <div className="text-4xl mb-2 group-hover:animate-wiggle inline-block">{a.emoji}</div>
              <div className="font-baloo text-3xl font-extrabold" style={{ color: a.c }}>
                {a.num}<span className="text-xl">{a.unit}</span>
              </div>
              <div className="font-nunito text-sm text-muted-foreground mt-1">{a.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GamesSection({ setActive }: { setActive: (s: Section) => void }) {
  useReveal();
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF0D6 0%, #FFF8EC 100%)" }}>
      <div className="absolute top-10 right-10 text-6xl animate-spin-slow opacity-10">🌀</div>
      <div className="absolute bottom-10 left-10 text-5xl animate-float opacity-10">🎈</div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 section-reveal">
          <div>
            <span className="text-5xl mb-4 block">🎮</span>
            <h2 className="font-baloo font-extrabold text-4xl md:text-5xl text-foreground">
              Наши <span className="gradient-text">игры</span>
            </h2>
            <p className="font-nunito text-lg text-muted-foreground mt-2 max-w-lg">
              30+ интерактивных игр для каждого этапа коррекции речи
            </p>
          </div>
          <img src={DINO_RUNNING} alt="Логоша играет" className="w-32 h-32 object-cover rounded-3xl shadow-xl animate-float" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((g, i) => (
            <div
              key={g.name}
              className="game-card bg-white rounded-3xl p-6 shadow-md border-2 border-transparent cursor-pointer transition-all section-reveal"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm" style={{ background: g.color + "22" }}>
                {g.emoji}
              </div>
              <h3 className="font-baloo font-bold text-lg text-foreground mb-1">{g.name}</h3>
              <p className="font-nunito text-sm text-muted-foreground">{g.desc}</p>
              <button
                className="mt-4 w-full py-2 rounded-2xl font-nunito font-bold text-sm text-white transition-all btn-wobbly"
                style={{ background: g.color }}
                onClick={() => setActive("register")}
              >
                Играть
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 section-reveal">
          <button onClick={() => setActive("register")} className="btn-wobbly px-10 py-4 rounded-3xl text-white font-baloo text-xl font-extrabold shadow-xl" style={{ background: "#FF7A1A" }}>
            🦕 Все 30+ игр — бесплатно на 7 дней
          </button>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  useReveal();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 section-reveal">
          <span className="text-5xl mb-4 block">📖</span>
          <h2 className="font-baloo font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Блог <span className="gradient-text">и знания</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-xl mx-auto">Полезные статьи для логопедов и родителей</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((p, i) => (
            <div key={p.title} className="rounded-3xl p-6 border-2 hover:-translate-y-2 transition-all cursor-pointer shadow-sm section-reveal" style={{ background: "#FFF8EC", borderColor: "#FF7A1A26", animationDelay: `${i * 0.1}s` }}>
              <div className="text-4xl mb-4">{p.emoji}</div>
              <span className="inline-block rounded-full px-3 py-1 font-nunito font-bold text-xs mb-3" style={{ background: "#FF7A1A18", color: "#FF7A1A" }}>{p.tag}</span>
              <h3 className="font-baloo font-bold text-lg text-foreground mb-2 leading-snug">{p.title}</h3>
              <p className="font-nunito text-sm text-muted-foreground">{p.date}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 section-reveal">
          <button className="btn-wobbly px-8 py-3 rounded-2xl border-2 font-baloo font-bold text-lg hover:text-white transition-all" style={{ borderColor: "#FF7A1A", color: "#FF7A1A" }}>
            Все статьи
          </button>
        </div>
      </div>
    </section>
  );
}

function SubscribeSection({ setActive }: { setActive: (s: Section) => void }) {
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

function ContactSection() {
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
            <div className="pt-4 text-center">
              <img src={DINO_READING} alt="Логоша ждёт" className="w-40 mx-auto animate-float-slow rounded-3xl shadow-lg object-cover" />
            </div>
          </div>

          <div className="section-reveal" style={{ animationDelay: "0.2s" }}>
            {sent ? (
              <div className="rounded-3xl p-12 text-center border-2" style={{ background: "#2ECC8A11", borderColor: "#2ECC8A44" }}>
                <div className="text-6xl mb-4 animate-bounce-in">🎉</div>
                <h3 className="font-baloo font-bold text-2xl text-foreground mb-2">Сообщение отправлено!</h3>
                <p className="font-nunito text-muted-foreground">Мы ответим тебе совсем скоро 🦕</p>
                <button onClick={() => setSent(false)} className="mt-6 px-6 py-2 rounded-2xl text-white font-nunito font-bold" style={{ background: "#2ECC8A" }}>Написать ещё</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl p-8 border-2 space-y-5" style={{ background: "#FFF8EC", borderColor: "#FF7A1A22" }}>
                <div>
                  <label className="font-nunito font-bold text-sm text-foreground block mb-2">Твоё имя</label>
                  <input type="text" placeholder="Анна" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border-2 bg-white px-4 py-3 font-nunito text-sm focus:outline-none transition-colors" style={{ borderColor: "#FF7A1A33" }} required />
                </div>
                <div>
                  <label className="font-nunito font-bold text-sm text-foreground block mb-2">Email</label>
                  <input type="email" placeholder="anna@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border-2 bg-white px-4 py-3 font-nunito text-sm focus:outline-none transition-colors" style={{ borderColor: "#FF7A1A33" }} required />
                </div>
                <div>
                  <label className="font-nunito font-bold text-sm text-foreground block mb-2">Сообщение</label>
                  <textarea placeholder="Напишите ваш вопрос..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border-2 bg-white px-4 py-3 font-nunito text-sm focus:outline-none transition-colors resize-none" style={{ borderColor: "#FF7A1A33" }} required />
                </div>
                <button type="submit" className="w-full py-4 rounded-2xl text-white font-baloo text-xl font-bold btn-wobbly shadow-lg" style={{ background: "#FF7A1A" }}>
                  Отправить 🦕
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthSection({ mode, setActive }: { mode: "register" | "login"; setActive: (s: Section) => void }) {
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

const reviews = [
  { name: "Анна Петрова", role: "Логопед, стаж 8 лет", text: "ЛОГОША полностью изменила мой подход к онлайн-занятиям! Дети в восторге от интерактивных игр, а я вижу реальный прогресс уже после первых сессий.", rating: 5, avatar: "👩‍⚕️", city: "Москва" },
  { name: "Мария Иванова", role: "Мама Артёма, 5 лет", text: "Мой сын наконец-то полюбил логопедические занятия! Благодаря ЛОГОШЕ он занимается с удовольствием, а звукопроизношение улучшилось за 2 месяца.", rating: 5, avatar: "👩", city: "Санкт-Петербург" },
  { name: "Елена Смирнова", role: "Логопед, стаж 12 лет", text: "Наконец-то платформа, которая понимает нужды логопеда. Все материалы структурированы, есть всё необходимое для работы онлайн. Рекомендую коллегам!", rating: 5, avatar: "👩‍🏫", city: "Екатеринбург" },
  { name: "Дмитрий Козлов", role: "Папа Сони, 6 лет", text: "Дочка занимается с логопедом через ЛОГОШУ уже 3 месяца. Прогресс виден невооружённым глазом — говорит намного чище и увереннее.", rating: 5, avatar: "👨", city: "Казань" },
  { name: "Ольга Новикова", role: "Логопед, стаж 5 лет", text: "Удобный кабинет, отличная база игровых упражнений и поддержка — всё, что нужно для эффективной онлайн-работы. Мои клиенты очень довольны!", rating: 5, avatar: "👩‍💻", city: "Новосибирск" },
  { name: "Светлана Морозова", role: "Мама Мишы, 4 года", text: "Думала, что онлайн-занятия не подойдут маленькому ребёнку. Оказалось — отлично! Сын ждёт каждого урока, как праздника. Спасибо ЛОГОШЕ!", rating: 5, avatar: "🧕", city: "Краснодар" },
];

function ReviewsSection({ setActive }: { setActive: (s: Section) => void }) {
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

function Footer({ setActive }: { setActive: (s: Section) => void }) {
  const cols: { title: string; links: { key: Section; label: string }[] }[] = [
    { title: "Навигация", links: [{ key: "home", label: "Главная" }, { key: "about", label: "Обо мне" }, { key: "games", label: "Игры" }, { key: "blog", label: "Блог" }] },
    { title: "Аккаунт", links: [{ key: "register", label: "Регистрация" }, { key: "login", label: "Войти" }, { key: "subscribe", label: "Тарифы" }] },
    { title: "Помощь", links: [{ key: "contact", label: "Написать нам" }, { key: "blog", label: "Статьи" }] },
  ];
  return (
    <footer className="py-16 px-4" style={{ background: "#1a1a2e", color: "white" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🦕</span>
              <span className="font-baloo font-extrabold text-2xl" style={{ color: "#FF7A1A" }}>ЛОГОША</span>
            </div>
            <p className="font-nunito text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Интерактивная площадка для логопедов, работающих онлайн
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-baloo font-bold text-base text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.key}>
                    <button onClick={() => setActive(l.key)} className="font-nunito text-sm hover:text-orange transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="font-nunito text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>© 2026 ЛОГОША. Все права защищены.</p>
          <p className="font-nunito text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Сделано с ❤️ для логопедов</p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  const [active, setActive] = useState<Section>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const nav = (s: Section) => setActive(s);

  return (
    <div className="min-h-screen">
      <Navbar active={active} setActive={nav} />
      <main>
        {active === "home" && (
          <>
            <HeroSection setActive={nav} />
            <AboutSection />
            <GamesSection setActive={nav} />
            <BlogSection />
            <SubscribeSection setActive={nav} />
            <ContactSection />
            <Footer setActive={nav} />
          </>
        )}
        {active === "about" && <><div className="pt-16"><AboutSection /></div><Footer setActive={nav} /></>}
        {active === "games" && <><div className="pt-16"><GamesSection setActive={nav} /></div><Footer setActive={nav} /></>}
        {active === "blog" && <><div className="pt-16"><BlogSection /></div><Footer setActive={nav} /></>}
        {active === "reviews" && <><div className="pt-16"><ReviewsSection setActive={nav} /></div><Footer setActive={nav} /></>}
        {active === "subscribe" &&  <><div className="pt-16"><SubscribeSection setActive={nav} /></div><Footer setActive={nav} /></>}
        {active === "contact" && <><div className="pt-16"><ContactSection /></div><Footer setActive={nav} /></>}
        {active === "register" && <><div className="pt-16"><AuthSection mode="register" setActive={nav} /></div><Footer setActive={nav} /></>}
        {active === "login" && <><div className="pt-16"><AuthSection mode="login" setActive={nav} /></div><Footer setActive={nav} /></>}
      </main>
    </div>
  );
}