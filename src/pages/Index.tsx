import { useState, useEffect } from "react";
import { Section } from "@/types/sections";
import { Navbar, Footer } from "@/components/layout/Navbar";
import { HeroSection, AboutSection, GamesSection, BlogSection } from "@/components/sections/HomeSections";
import { SubscribeSection, ContactSection, ReviewsSection, AuthSection } from "@/components/sections/ContentSections";

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
        {active === "subscribe" && <><div className="pt-16"><SubscribeSection setActive={nav} /></div><Footer setActive={nav} /></>}
        {active === "contact" && <><div className="pt-16"><ContactSection /></div><Footer setActive={nav} /></>}
        {active === "register" && <><div className="pt-16"><AuthSection mode="register" setActive={nav} /></div><Footer setActive={nav} /></>}
        {active === "login" && <><div className="pt-16"><AuthSection mode="login" setActive={nav} /></div><Footer setActive={nav} /></>}
      </main>
    </div>
  );
}
