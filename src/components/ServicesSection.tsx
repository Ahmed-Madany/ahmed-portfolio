import { Globe, ShoppingCart, Palette, Search, Smartphone, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "تطوير مواقع WordPress",
    description: "إنشاء وتخصيص مواقع WordPress احترافية مع قوالب مخصصة وإضافات متقدمة",
  },
  {
    icon: ShoppingCart,
    title: "متاجر إلكترونية",
    description: "بناء متاجر WooCommerce متكاملة مع بوابات دفع وإدارة مخزون",
  },
  {
    icon: Palette,
    title: "تصميم واجهات المستخدم",
    description: "تصميم واجهات حديثة وجذابة مع تجربة مستخدم سلسة",
  },
  {
    icon: Smartphone,
    title: "مواقع متجاوبة",
    description: "تطوير مواقع تعمل بشكل مثالي على جميع الأجهزة والشاشات",
  },
  {
    icon: Search,
    title: "تحسين محركات البحث",
    description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية",
  },
  {
    icon: Settings,
    title: "صيانة ودعم فني",
    description: "خدمات صيانة دورية وتحديثات أمنية وحل المشكلات التقنية",
  },
];

const ServicesSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            الخدمات التي أقدمها
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            أقدم مجموعة شاملة من الخدمات لتلبية احتياجاتك الرقمية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
