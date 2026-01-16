import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "متجر إلكتروني متكامل",
    description:
      "منصة تجارة إلكترونية كاملة مع نظام دفع آمن، لوحة تحكم للمدير، وتجربة مستخدم سلسة.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "موقع شركة استشارات",
    description:
      "موقع WordPress احترافي لشركة استشارات مع تصميم عصري وأداء محسّن لمحركات البحث.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["WordPress", "Elementor", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "تطبيق إدارة المهام",
    description:
      "تطبيق React تفاعلي لإدارة المهام مع ميزات السحب والإفلات والإشعارات الفورية.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "منصة تعليمية",
    description:
      "منصة تعليمية متكاملة مع نظام إدارة الدورات والاختبارات وتتبع تقدم الطلاب.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["React", "Next.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "مدونة تقنية",
    description:
      "مدونة WordPress مخصصة للمحتوى التقني مع تصميم نظيف وسرعة تحميل فائقة.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    technologies: ["WordPress", "Custom Theme", "SEO", "CDN"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "لوحة تحكم تحليلات",
    description:
      "لوحة تحكم React لعرض البيانات والتحليلات مع رسوم بيانية تفاعلية وتقارير مفصلة.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["React", "D3.js", "REST API", "Material UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
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
