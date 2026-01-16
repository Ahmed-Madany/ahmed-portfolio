import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/80 to-foreground/90" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/50 rounded-full animate-spin-slow" />
              <div className="absolute inset-1 bg-card rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary font-serif">أ</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-primary font-mono text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            مرحباً، أنا
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 font-serif animate-fade-in" style={{ animationDelay: "0.4s" }}>
            أحمد صلاح
          </h1>
          <h2 className="text-xl md:text-2xl text-primary mb-6 font-medium animate-fade-in" style={{ animationDelay: "0.5s" }}>
            مطوّر مواقع متخصص في WordPress والواجهات الأمامية
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            خبرة عملية في إنشاء مواقع سريعة ومتجاوبة وسهلة الاستخدام | خريج معهد ITI
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahmed@example.com"
              className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
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
              className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all"
            >
              تواصل معي
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="min-w-[200px] hover:scale-105 transition-transform"
            >
              <Download className="h-5 w-5 ml-2" />
              تحميل السيرة الذاتية
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-primary-foreground/60 hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
