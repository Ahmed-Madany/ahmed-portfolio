import { Code, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// WordPress Icon from MDI
const WordPress = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3.42 12c0-1.24.27-2.42.74-3.5l4.1 11.22A8.56 8.56 0 0 1 3.42 12m14.37-.43c0 .73-.29 1.58-.65 2.77l-.86 2.86l-3.1-9.2l.98-.1c.47-.06.41-.74-.05-.71c0 0-1.39.11-2.29.11l-2.26-.11c-.46-.03-.51.68-.06.71l.91.1l1.34 3.64l-1.88 5.63L6.74 8l.99-.1c.46-.06.4-.74-.06-.71c0 0-1.39.11-2.29.11l-.55-.01C6.37 4.96 9 3.42 12 3.42c2.23 0 4.27.86 5.79 2.25h-.11c-.84 0-1.44.73-1.44 1.52c0 .71.41 1.31.84 2.01c.33.57.71 1.3.71 2.37m-5.64 1.18l2.64 7.22l.06.12c-.89.32-1.85.49-2.85.49c-.84 0-1.65-.12-2.42-.35zm7.38-4.87A8.55 8.55 0 0 1 20.58 12c0 3.16-1.72 5.93-4.27 7.41l2.62-7.57c.49-1.22.66-2.2.66-3.07zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 19.54c5.26 0 9.54-4.28 9.54-9.54S17.26 2.46 12 2.46S2.46 6.74 2.46 12s4.28 9.54 9.54 9.54" />
  </svg>
);

const highlights = [
  {
    icon: Code,
    title: "React Front-End",
    description: "تطوير واجهات مستخدم حديثة باستخدام React و JavaScript",
  },
  {
    icon: WordPress,
    title: "WordPress Development",
    description: "تطوير وتخصيص مواقع WordPress باستخدام Elementor و Themes مخصصة",
  },
  {
    icon: Zap,
    title: "Performance & UX",
    description: "تحسين سرعة المواقع وتجربة المستخدم على جميع الأجهزة",
  },
  
    {
      icon: Award,
      title: "ITI Graduate (2 Tracks)",
      description:
        "خريج مساري Software Fundamentals & Programming و Front-End & Cross-Platform Mobile Development من ITI",
    },
    
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            نبذة عني
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              أنا أحمد صلاح
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              مطوّر واجهات أمامية باستخدام React، ومتخصص في تطوير مواقع WordPress.
              أعمل على بناء مواقع سريعة ومتجاوبة مع جميع الشاشات، مع التركيز
              على جودة الكود وتجربة المستخدم.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
  خريج برنامج تدريبي مكثف بمعهد تكنولوجيا المعلومات (ITI)،
  في مساري Software  development Fundamentals 
  و Front-End & Cross-Platform Mobile Development.
</p>


            <p className="text-muted-foreground leading-relaxed">
              هدفي هو تقديم حلول تقنية عملية تساعد العملاء على تحويل
              أفكارهم إلى منتجات رقمية ناجحة.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
