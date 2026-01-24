import SkillCategory from "../components/SkillCategory";
    
export default function SkillsPage() {
  return (
    <section className="pb-32">
      {/* Page Title */}
      <h1 className="text-[72px] font-extrabold text-white leading-none">
        SKILLS &
        <span className="block text-white/20">EXPERTISE</span>
      </h1>

      <div className="mt-24 space-y-20">
        <SkillCategory
          title="Languages"
          skills={[
            "C", "C++", "Python", "HTML", "CSS", "JavaScript"
          ]}
        />

        <SkillCategory
          title="Frameworks & Libraries"
          skills={[
            "FastAPI", "React.js", "Node.js", "Flask",
            "LangChain", "LangGraph", "Agentic Pipelines",
            "SQLAlchemy", "Scikit-learn",
            "TensorFlow", "PyTorch",
            "Pandas", "NumPy", "CI/CD"
          ]}
        />

        <SkillCategory
          title="Developer Tools"
          skills={[
            "VS Code", "Git", "GitHub", "Postman"
          ]}
        />

        <SkillCategory
          title="Cloud, Databases & Infrastructure"
          skills={[
            "MySQL", "PostgreSQL", "MongoDB",
            "Firebase",
            "Vector Databases (ChromaDB, Pinecone)",
            "Nginx"
          ]}
        />

        <SkillCategory
          title="Relevant Coursework"
          skills={[
            "Data Structures & Algorithms",
            "Operating Systems",
            "Object Oriented Programming",
            "Database Management Systems",
            "Software Engineering",
            "Computer Networks",
            "Multicore Architecture",
            "Natural Language Processing",
            "Machine Learning & Deep Learning"
          ]}
        />

        <SkillCategory
          title="Areas of Interest"
          skills={[
            "Product Management",
            "Full Stack Web Development",
            "Generative AI Applications",
            "Agentic AI (LLMs)",
            "Feature Design & Development"
          ]}
        />

        <SkillCategory
          title="Project Management"
          skills={[
            "Agile Methodologies",
            "Scrum Framework",
            "Project Planning",
            "Execution & Delivery"
          ]}
        />
      </div>
    </section>
  );
}
