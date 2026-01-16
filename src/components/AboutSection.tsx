import { Code, Palette, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code,
    title: "React Developer",
    description: "خبرة واسعة في بناء تطبيقات React تفاعلية وقابلة للتوسع",
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
              مطور ويب شغوف بالتقنية والإبداع
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              أنا مطور ويب متخصص في React وWordPress، خريج معهد تكنولوجيا المعلومات (ITI). 
              أمتلك خبرة واسعة في بناء تطبيقات ويب حديثة ومواقع إلكترونية احترافية.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              أؤمن بأهمية الجمع بين التصميم الجذاب والكود النظيف لتقديم تجربة مستخدم استثنائية. 
              أسعى دائماً لتعلم التقنيات الجديدة وتطبيق أفضل الممارسات في مشاريعي.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              سواء كنت تبحث عن تطوير موقع WordPress احترافي أو تطبيق React معقد، 
              أنا هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي متميز.
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
