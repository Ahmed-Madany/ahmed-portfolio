import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML/CSS", level: 98, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "WordPress", level: 90, category: "CMS" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 78, category: "Database" },
  { name: "Git", level: 88, category: "Tools" },
  { name: "Figma", level: 75, category: "Design" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            المهارات التقنية
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            التقنيات والأدوات التي أتقنها وأستخدمها في مشاريعي
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress
                value={skill.level}
                className="h-2 bg-muted"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
