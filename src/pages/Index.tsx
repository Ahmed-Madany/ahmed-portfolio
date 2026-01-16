import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | مطور React و WordPress | خريج ITI</title>
        <meta
          name="description"
          content="بورتفوليو مطور ويب محترف متخصص في React و WordPress. خريج معهد ITI مع خبرة واسعة في تطوير تطبيقات الويب الحديثة."
        />
        <meta
          name="keywords"
          content="React, WordPress, مطور ويب, ITI, تطوير مواقع, برمجة, Frontend Developer"
        />
        <meta name="author" content="Developer Portfolio" />
        <meta property="og:title" content="Portfolio | مطور React و WordPress" />
        <meta
          property="og:description"
          content="بورتفوليو مطور ويب محترف متخصص في React و WordPress."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Helmet>

      <div className="min-h-screen" dir="rtl">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
