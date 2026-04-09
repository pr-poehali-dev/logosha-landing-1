import { useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/types/sections";

const DINO_READING = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/c8ab2d33-4034-45c2-9e23-d1d311690e70.jpg";
const DINO_RUNNING = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/e4426449-933a-447c-bd66-7b0ea3941588.jpg";
const DINO_STUDY = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/eccc1ef0-044a-47c4-8abc-c33c1603fae7.jpg";
const PHOTO_ONLINE = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/2e961a2c-b738-4c8e-918b-2fa3e2243086.jpg";
const DINO_TEACHER = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/eccc1ef0-044a-47c4-8abc-c33c1603fae7.jpg";
const PHOTO_METHODS = "https://cdn.poehali.dev/projects/a5b0bc7e-180f-4cc0-a4da-547b0e07b8a2/files/8ff23eed-b21f-4900-ae31-a55f14aabe7d.jpg";

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

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

export function Bubbles() {
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

export function HeroSection({ setActive }: { setActive: (s: Section) => void }) {
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
              🚀 Попробовать бесплатно
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

export function AboutSection() {
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

export function GamesSection({ setActive }: { setActive: (s: Section) => void }) {
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

export function BlogSection() {
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
