import { MapPin, Phone, Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import khm from "../assets/khm.png"
import mos from "../assets/mos.png"
import nave from "../assets/nave.jpeg"
import upwork from "../assets/upwork-roundedsquare-1.svg"
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

// Platform Icon Components using images
const MostaqlIcon = ({ className }: { className?: string }) => (
  <img src={mos} alt="مستقل" className={className} />
);

const KhamsatIcon = ({ className }: { className?: string }) => (
  <img src={khm} alt="خمسات" className={className} />
);

const NafezlyIcon = ({ className }: { className?: string }) => (
  <img src={nave} alt="نفذلي" className={className} />
);

const UpworkIcon = ({ className }: { className?: string }) => (
  <img src={upwork} alt="Upwork" className={className} />
);

const contactInfo = [
  {
    icon: MapPin,
    title: "الموقع",
    value: "الاسكندرية , مصر",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: "+201099531916",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "madanyo85@gmail.com",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Ahmed-Madany", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-madany1/", label: "LinkedIn" },
  { icon: WhatsApp, href: "https://wa.me/201099531916", label: "WhatsApp" },
];

const freelancePlatforms = [
  { icon: MostaqlIcon, href: "https://mostaql.com/u/ahmed_madany", label: "مستقل", name: "مستقل" },
  { icon: KhamsatIcon, href: "https://khamsat.com/user/amadany", label: "خمسات", name: "خمسات" },
  { icon: NafezlyIcon, href: "https://nafezly.com/u/ahmed_madany", label: "نفذلي", name: "نفذلي" },
  { icon: UpworkIcon, href: "https://www.upwork.com/freelancers/~012b25d3aca241c934", label: "Upwork", name: "Upwork" },
];

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            تواصل معي
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحول فكرتك إلى واقع
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              معلومات التواصل
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <Card key={item.title} className="bg-background border-border/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center mb-8">
              <h4 className="font-medium text-foreground mb-4">تواصل معي على</h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Freelance Platforms */}
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-6">حساباتي على منصات العمل الحر</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {freelancePlatforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="bg-background border-border/50 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300 overflow-hidden">
                          <platform.icon className="h-full w-full object-contain p-2" />
                        </div>
                        <h5 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                          {platform.name}
                        </h5>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
