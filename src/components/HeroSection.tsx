import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

// WhatsApp Icon Component
const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background - Always Dark */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover scale-110 animate-glow-pulse opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/85 to-slate-900/95" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-emerald-400/30 rounded-full animate-float blur-sm"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i * 1.5}s`,
              width: `${8 + (i % 3) * 4}px`,
              height: `${8 + (i % 3) * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div>
          {/* Profile Image */}
          <div className="mb-8 animate-zoom-rotate">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-400/60 rounded-full animate-spin-slow" />
              <div className="absolute inset-1 bg-[#0f172a] rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-emerald-400 font-mono text-lg mb-4 animate-slide-down opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            مرحباً، أنا
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-4 font-serif animate-slide-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
        احمد مدني
          </h1>
          <h2 className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium animate-slide-right opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            مطوّر مواقع متخصص في WordPress , Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto mb-8 animate-slide-left opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
            خبرة عملية في إنشاء مواقع سريعة ومتجاوبة وسهلة الاستخدام | خريج معهد ITI
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up opacity-0" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
            <a
              href="https://github.com/Ahmed-Madany"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-emerald-400/15 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/30"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-madany1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-emerald-400/15 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/201099531916"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-emerald-400/15 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/30"
              aria-label="WhatsApp"
            >
              <WhatsApp className="h-6 w-6" />
            </a>
            <a
              href="mailto:madanyo85@gmail.com"
              className="p-3 rounded-full bg-emerald-400/15 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/30"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="min-w-[200px] hover:scale-105 transition-transform"
            >
              عرض المشاريع
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="min-w-[200px] border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 hover:scale-105 transition-all"
            >
              تواصل معي
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="min-w-[200px] hover:scale-105 transition-transform"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1gM66F7-fy4MC9OG0pfc6i4nSUfWe1LEr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 ml-2" />
                عرض السيرة الذاتية
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-slide-up opacity-0" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-slate-300/70 hover:text-emerald-400 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
