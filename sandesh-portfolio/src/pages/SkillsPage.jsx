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
  title="Programming Languages"
  skills={[
    "Python",
    "C++",
    "C",
    "JavaScript",
    "SQL"
  ]}
/>

<SkillCategory
  title="Backend & API Frameworks"
  skills={[
    "FastAPI",
    "Flask",
    "Node.js",
    "Express.js",
    "SQLAlchemy"
  ]}
/>

<SkillCategory
  title="AI / ML & Gen-AI"
  skills={[
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "LangChain",
    "LangGraph",
    "Agentic AI Pipelines",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch"
  ]}
/>

<SkillCategory
  title="Data & ML Tooling"
  skills={[
    "Pandas",
    "NumPy",
    "Feature Engineering",
    "Model Training & Evaluation",
    "Data Pipelines"
  ]}
/>

<SkillCategory
  title="Databases & Storage"
  skills={[
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Vector Databases (ChromaDB, Pinecone)"
  ]}
/>

<SkillCategory
  title="Cloud, DevOps & Infrastructure"
  skills={[
    "Nginx",
    "CI/CD Pipelines",
    "Server Deployment",
    "API Security",
    "System Monitoring"
  ]}
/>

<SkillCategory
  title="Developer Tools"
  skills={[
    "Git",
    "GitHub",
    "Postman",
    "VS Code"
  ]}
/>

<SkillCategory
  title="Computer Science Foundations"
  skills={[
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Multicore Architecture"
  ]}
/>

<SkillCategory
  title="Product & Project Skills"
  skills={[
    "Agile Methodologies",
    "Scrum Framework",
    "Project Planning",
    "Execution & Delivery",
    "Feature Design"
  ]}
/>

      </div>
    </section>
  );
}
