import { Code, Layout, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code,
    title: "React Front-End",
    description: "تطوير واجهات مستخدم حديثة باستخدام React و JavaScript",
  },
  {
    icon: Layout,
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
