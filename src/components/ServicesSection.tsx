import { ShoppingCart, Palette, Search, Smartphone, Settings } from "lucide-react";
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

const services = [
  {
    icon: WordPress,
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
    title: "Frontend Developer",
    description: "تصميم واجهات حديثة وجذابة باستخدام React JS مع تجربة مستخدم سلسة",
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
