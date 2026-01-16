import { Code, Palette, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code,
    title: "تطوير الواجهات",
    description: "خبرة في بناء واجهات مستخدم تفاعلية وقابلة للتوسع",
  },
  {
    icon: Palette,
    title: "WordPress Expert",
    description: "تطوير وتخصيص مواقع WordPress احترافية",
  },
  {
    icon: Zap,
    title: "أداء عالي",
    description: "تحسين سرعة المواقع وتجربة المستخدم",
  },
  {
    icon: Award,
    title: "خريج ITI",
    description: "تدريب مكثف في أحدث تقنيات تطوير الويب",
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
              مطوّر مواقع متخصص في WordPress وتطوير الواجهات الأمامية. لدي خبرة عملية 
              في إنشاء مواقع سريعة ومتجاوبة وسهلة الاستخدام، مع اهتمام كبير بالأداء وجودة التنفيذ.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              عملت على مشاريع في التجارة الإلكترونية، وشاركت في برنامج تدريبي مكثف 
              بمعهد ITI مما ساعدني على تطوير مهاراتي العملية وحل المشكلات.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              أسعى دائماً لتقديم حلول تقنية مبتكرة تلبي احتياجات العملاء 
              وتساهم في تحقيق أهدافهم الرقمية.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
