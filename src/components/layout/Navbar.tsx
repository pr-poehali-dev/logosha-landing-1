import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/types/sections";

export function Navbar({ active, setActive }: { active: Section; setActive: (s: Section) => void }) {
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

export function Footer({ setActive }: { setActive: (s: Section) => void }) {
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
