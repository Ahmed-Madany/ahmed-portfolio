import { title } from "process";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "متجر إلكتروني متكامل",
    description:
      "منصة تجارة إلكترونية كاملة مع نظام دفع آمن، لوحة تحكم للمدير، وتجربة مستخدم سلسة.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["WordPress", "Elementor", "Kashier Payment Gateway" , "Custom Theme","woocommerce"],
    liveUrl: "https://dev-buy-zonxx.pantheonsite.io/",
    
  },
  {
    title: "Blog anmie lover",
    description:"   مدونة متخصصة في عالم الأنمي، تقدّم محتوى متنوع يشمل مراجعات الأعمال، تحليل الشخصيات، وآخر أخبار الأنمي والمانجا، مع التركيز على تقديم محتوى دقيق وممتع لعشّاق الأنمي",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["WordPress", "Elementor", "blog"],
    liveUrl: "https://dev-anmie-lover.pantheonsite.io/",
    
  },
  {
    title: "Naruto Portfolio Website",
    description:
      "Built a responsive website that displays Naruto characters (images, names, descriptions).",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["ReactJS", "JavaScript", "CSS"],
    liveUrl: "https://naruto-delta.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Madany/naruto",
  },
  {
    title: "منصة تعليمية مشروع التخرج ",
    description:
      "منصة تعليمية متكاملة مع نظام إدارة الدورات والاختبارات وتتبع تقدم الطلاب.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["ReactJS", "Next.js", "mongodb", "nodejs", "express", "tailwindcss", "javascript","axios"],
    liveUrl: "https://darreb-academy.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Madany/Darreb-Academy-main.git",
  },
  {
    title: "لوحة تحكم المنصه التعليمية",
    description:
      "لوحة تحكم angular لعرض البيانات والتحليلات مع رسوم بيانية تفاعلية وتقارير مفصلة.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["angular", "typescript", "REST API", "Material UI","express","mongodb","nodejs","javascript"],
    liveUrl: "https://darreb-academy-dashboard.vercel.app/home/dashboard",
    githubUrl: "https://github.com/Ahmed-Madany/Darreb-Academy-Dashboard.git",
  },
  {
    title: "Movie Explorer Web App ",
    description:
      "Movie browsing app showing trending movies and TV shows; details pages and routing.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    technologies: ["reactjs", "react-router", "tmdb api", "tailwindcss","axios","redux","context"],
    liveUrl: "https://moive-lac.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Madany/moive",
  },
  {
    title: "Invisible Choices",
    description:
      "lمنصة تقدم رؤى حول كيفية تشكيل الخيارات غير الظاهرة وتأثيرها على السلوك واتخاذ القرار.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    technologies: ["WordPress", "Elementor", "Custom Theme"],
    liveUrl: "https://dev-choices-3.pantheonsite.io/"
  }
  ,
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            مشاريعي
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مجموعة من المشاريع التي عملت عليها والتي تعكس خبرتي في تطوير الويب
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
