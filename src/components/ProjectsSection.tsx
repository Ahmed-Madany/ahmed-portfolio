import ProjectCard from "./ProjectCard";
import narutophoto from "../assets/naruto.jpg"
import blog from "../assets/Screenshot 2026-01-17 002642.jpg"
import darb from "../assets/darb.jpg"
import dash from "../assets/DASHBOARD-2-1024x529.jpg"
import buy from "../assets/buy.jpg"
import inv from "../assets/inv.jpg"
import movie from "../assets/movie.jpg"
const projects = [
  {
    title: "متجر إلكتروني متكامل",
    description:
      "منصة تجارة إلكترونية متكاملة تشمل نظام دفع آمن، لوحة تحكم للإدارة، وتجربة مستخدم سلسة.",
    image:
      buy,
    technologies: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Custom Theme",
      "Kashier Payment Gateway",
    ],
    liveUrl: "https://dev-buy-zonxx.pantheonsite.io/",
  },
  {
    title: "مدونة عشاق الأنمي",
    description:
      "مدونة متخصصة في عالم الأنمي تقدّم مراجعات وتحليلات وآخر أخبار الأنمي والمانجا بأسلوب ممتع.",
    image:
    blog,
    technologies: ["WordPress", "Elementor", "Blog"],
    liveUrl: "https://dev-anmie-lover.pantheonsite.io/",
  },
  {
    title: "موقع شخصيات أنمي ناروتو",
    description:
      "موقع تفاعلي ومتجاوب لعرض شخصيات أنمي ناروتو مع الصور والمعلومات الخاصة بكل شخصية.",
    image: narutophoto,
    technologies: ["ReactJS", "JavaScript", "CSS"],
    liveUrl: "https://naruto-delta.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Madany/naruto",
  },
  {
    title: "منصة تعليمية (مشروع التخرج)",
    description:
      "منصة تعليمية متكاملة لإدارة الدورات والاختبارات وتتبع تقدّم الطلاب مع واجهة استخدام سهلة.",
    image:
    darb,
    technologies: [
      "ReactJS",
      "Next.js",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Axios",
    ],
    liveUrl: "https://darreb-academy.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Madany/Darreb-Academy-main.git",
  },
  {
    title: "لوحة تحكم المنصة التعليمية",
    description:
      "لوحة تحكم لعرض البيانات والتحليلات باستخدام رسوم بيانية وتقارير تفصيلية لإدارة المنصة.",
    image:
    dash,
    technologies: [
      "Angular",
      "TypeScript",
      "REST API",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveUrl:
      "https://darreb-academy-dashboard.vercel.app/home/dashboard",
    githubUrl:
      "https://github.com/Ahmed-Madany/Darreb-Academy-Dashboard.git",
  },
  {
    title: "تطبيق استكشاف الأفلام",
    description:
      "تطبيق ويب لعرض الأفلام والمسلسلات الرائجة مع صفحات تفاصيل وتنقل سلس.",
    image:
      movie ,
    technologies: [
      "ReactJS",
      "React Router",
      "TMDB API",
      "Tailwind CSS",
      "Axios",
      "Redux",
      "Context API",
    ],
    liveUrl: "https://moive-lac.vercel.app/",
    githubUrl: "https://github.com/Ahmed-Madany/moive",
  },
  {
    title: "Invisible Choices",
    description:
      "منصة توعوية تشرح كيف تؤثر العوامل غير المرئية على قراراتنا وسلوكنا اليومي من خلال تجربة تفاعلية.",
    image:
      inv,
    technologies: ["WordPress", "Elementor", "Custom Theme"],
    liveUrl: "https://dev-choices-3.pantheonsite.io/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Portfolio
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Portfolio يضم مجموعة مختارة من المشاريع التي نفذتها في مجالات
            تطوير الويب وWordPress وReact. 
            حاليًا، لكنها ساهمت بشكل كبير في بناء خبرتي العملية وتطوير
            مهاراتي.
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
