import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Portfolio. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-primary-foreground/80 flex items-center gap-1">
            صُنع بـ <Heart className="h-4 w-4 text-destructive fill-destructive" /> باستخدام React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
