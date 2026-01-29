import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";
import proj7 from "../assets/proj7.png";
import proj8 from "../assets/proj8.png";
import proj9 from "../assets/proj9.png";
import proj10 from "../assets/proj10.png";

export const projects = {
  damas: {
    id: "damas",
    title: "IIIT Nagpur Official Website (iiitn.ac.in)",
    subtitle: "Production-grade backend system serving 3000+ users",
    image: proj1,
    demo: "https://iiitn.ac.in",
    github: "https://github.com/sandeshlavshetty",
    description: `
**Internship Project · Software Developer Intern @ IIITN**  
**Tech Stack:** Python, Flask, FastAPI, Node.js, PostgreSQL, Docker, Linux, Nginx, REST APIs

Led the end-to-end development of the official website for the Indian Institute of Information Technology, Nagpur, serving **3,000+ students, faculty, and staff**.

### What I Built
- Architected and implemented the **entire backend system** using Flask and PostgreSQL, covering API design, authentication, role-based access control, and database schema design.
- Developed **microservice-based HTTP applications** using FastAPI and Node.js to handle scalable and asynchronous workloads.
- Designed and managed **production-grade deployment**, including server setup, DevOps pipelines, security hardening, and monitoring, achieving **99.9% uptime**.
- Led and coordinated a team of frontend developers and content contributors, ensuring timely delivery aligned with institutional requirements.

### Impact
- Improved overall **system reliability and performance**, enabling smooth handling of concurrent users.
- Increased **student engagement by 45% within the first month** after launch.
- Delivered a maintainable, scalable platform used as the **official digital presence** of the institute.
    `,
  },

  bayt: {
    id: "bayt",
    title: "INSPIRE",
    subtitle: "Community platform for IIITN students",
    image: proj2,
    demo: "https://inspire-tech.netlify.app/",
    github: "https://github.com/sandeshlavshetty/I.N.S.P.I.R.E",
    description: `
## Smart Campus Commute Platform
**Independent Project**  
**Tech Stack:** Python, FastAPI, PostgreSQL, React, REST APIs, AI (LLM-based Assist), Docker

Built a campus-focused platform to solve **bus travel and commute coordination inefficiencies**, actively used by **300+ students**, improving commute coordination for **~20% of students from Dia Hostel**.

### What I Built
- Designed and developed a **centralized commute management system** enabling students to coordinate bus schedules, routes, and updates in real time.
- Implemented a **Project Sharing module** allowing students to showcase technical projects and collaborate with peers.
- Built a **Job & Opportunity Board** for sharing internships, hackathons, and campus-relevant opportunities.
- Integrated an **AI-powered Code Assistant** to help students debug, generate, and understand code directly within the platform.
- Developed secure REST APIs, user authentication, and role-based access control for scalable multi-user usage.

### Impact
- Onboarded **300+ active users** within the campus community.
- Improved **bus commute coordination efficiency by ~20%**, reducing confusion and missed pickups.
- Created a multi-utility student platform combining **logistics, collaboration, and AI assistance** in a single system.
    `,
  },

  najmai: {
    id: "najmai",
    title: "AI Auditor – Multi-Agent Auditing System (A-MAS)",
    subtitle: "Hackathon-winning AI system for financial audits",
    image: proj3,
    youtube: "",
    demo: "http://bob-hack.vercel.app/",
    github: "https://github.com/Kashyap-Rishi/BOB_Hack",
    description: `
## AI Auditor – Multi-Agent Auditing System (A-MAS)
**Hackathon Project · Team AI_Architects**  
**Tech Stack:** Python, LangChain, LangGraph, Finetuned LLM, Vector DB, RAG, FastAPI, ML (XGBoost, CatBoost, LGBM), Cosmos DB

Built an **AI-powered multi-agent auditing platform** to streamline financial audits, reduce manual documentation effort, and identify compliance risks with explainable outputs.

### Problem
Traditional audits suffer from:
- Manual document matching and form validation
- Documentation chaos across formats and languages
- Increased audit risk due to human error and scale

### Solution Overview
Designed a **Multi-Agent Auditing System (A-MAS)** that automates document verification, compliance checks, and audit reporting while keeping humans in the loop.

### Core Features

#### 🥇 AI Auditor (A-MAS)
- Implemented a **hierarchical multi-agent architecture** using LangGraph:
  - **Invoicer Agent** – schedules invoice row processing
  - **Documenter Agent** – extracts required fields from invoices and supporting documents (PDFs, images, SQL, multilingual)
  - **Authorizer Agent** – validates extracted data against auditing compliance rules
- Generates **approved parameters, anomaly reports, and final audit reports**
- Provides **explainable AI outputs** with document-level citations for each decision
- Human-in-the-loop chat interface for reviewing anomalies and re-running audits with corrected inputs

#### 🥈 Query Data Visualizer
- Built a **natural-language-driven data visualization system**
- Converts user queries (e.g., “loan approvals vs repayments”) into:
  - Auto-generated queries
  - Dynamic charts (histograms, line plots, pie charts, etc.)
- Uses **RAG pipelines** to retrieve relevant data and generate visuals on demand
- Supports further customization via chat-based prompts

#### 🥉 Audit Risk Recommender
- Developed a **risk recommendation engine** for bank branches
- Analyzes:
  - Transaction logs
  - Historical audit reports
- Uses ensemble ML models (**XGBoost, CatBoost, LightGBM**) with voting classifiers to predict audit preferences and potential risks

### Architecture Highlights
- Finetuned domain-specific LLM (**B-LLM**) for auditing context
- Vector DB for contextual memory and retrieval
- Stateless + context-window memory design for scalable inference
- Secure data handling using **Microsoft Presidio** and opaque security layers

### Impact
- Reduced repetitive audit tasks through automation
- Improved audit consistency and risk detection
- Delivered an explainable, scalable AI system suitable for real-world financial auditing workflows
    `,
  },

  threatvision: {
    id: "threatvision",
    title: "OrderBook – High-Performance Matching Engine",
    subtitle: "Low-latency C++ limit order book for HFT systems",
    image: proj4,
    demo: "https://github.com/timothewt/OrderBook.git",
    github: "https://github.com/timothewt/OrderBook.git",
    description: `
A production-grade **Limit Order Book and Matching Engine** built in C++20, designed for **low-latency and high-throughput trading environments**.

- Achieves **600,000+ operations per second** through optimized data structures and cache-efficient design.
- Implements **Red-Black Trees (std::set)** for O(log n) price-level management and **doubly linked lists** for fast order handling within each price level.
- Supports core exchange operations including **order placement, matching, execution, and deletion**.
- Processes large-scale workloads via CSV-driven input pipelines and deterministic output generation.
- Includes a **comprehensive unit test suite** using Google Test to ensure correctness under high operation volume.
- Designed with clean separation of concerns, making it suitable for **quantitative finance, HFT, and systems engineering roles**.
Built to demonstrate **systems-level thinking, performance optimization, and real-world trading engine design**.
    `,
  },

 proj5: {
  id: "proj5",
  title: "Portfolio Website Generator",
  subtitle: "No-code platform to generate downloadable portfolio websites",
  image: proj5,
  demo: "",
  github: "https://github.com/sandeshlavshetty/portfolio_proj.git",
  description: `
Built a **full-stack no-code portfolio builder** that allows users to create, preview, and download professional portfolio websites without writing any code.

- Implemented **secure authentication and session management** using PHP and MySQL.
- Designed a **dynamic form-to-code pipeline** that generates customized HTML, CSS, and JavaScript based on user inputs.
- Developed **multiple responsive templates** with real-time preview support.
- Enabled **one-click download** of complete, production-ready portfolio website code.
- Focused on **usability, validation, and scalability**, making it suitable for students and professionals.

**Tech Stack:** PHP, MySQL, HTML5, CSS3, JavaScript, Apache
  `,
},

  proj6: {
  id: "proj6",
  title: "Inventory Management System",
  subtitle: "C++ OOP-based retail inventory and billing system",
  image: proj6,
  demo: "",
  github: "https://github.com/sandeshlavshetty/OOPS_PROJECT.git",
  description: `
Built a **console-based Inventory Management System** in C++ using strong **Object-Oriented Programming principles** to simulate real-world retail operations.

- Implemented **stock management** (add, update, delete, view items) with persistent CSV-based storage.
- Developed **customer authentication**, cart management, billing, and invoice generation workflows.
- Generated **sales reports** to analyze profit/loss, stock levels, and top-selling products.
- Designed modular classes to model inventory, users, carts, and transactions.

**Tech Stack:** C++, OOP, File Handling (CSV), Data Structures
  `,
},
  proj7: {
  id: "proj7",
  title: "Hybrid Search RAG System",
  subtitle: "LLM-powered document Q&A using vector + keyword retrieval",
  image: proj7,
  demo: "",
  github: "https://github.com/sandeshlavshetty/nlp_proj.git",
  description: `
Built a **Retrieval-Augmented Generation (RAG) system** that combines **vector similarity search (FAISS)** with **keyword-based retrieval (BM25)** to deliver accurate, context-aware answers from large document collections.

- Implemented **hybrid search pipelines** to improve relevance over pure vector search.
- Designed **PDF ingestion, chunking, embedding, and indexing** workflows for scalable document analysis.
- Integrated **Google Gemini API** for context-grounded answer generation with source attribution.
- Developed an **interactive Streamlit UI** for document upload, querying, and result visualization.
- Indexed and queried **30+ research documents** with persistent vector storage.

**Tech Stack:** Python, FAISS, RAG, Google Gemini API, Streamlit, NLP
  `,
},
  proj8: {
  id: "proj8",
  title: "Local Multimodal RAG System",
  subtitle: "Privacy-first document intelligence using local LLMs",
  image: proj8,
  demo: "https://youtu.be/Kr1O4GejPgQ?si=lTN1KcPhgB6D6JO0",
  github: "https://github.com/sandeshlavshetty/local_RAG.git",
  description: `
Built a **full-stack, privacy-preserving RAG platform** for intelligent document search and querying using **local LLMs** — designed for secure environments (government, enterprises, offline systems).

- Implemented **multimodal RAG pipelines** supporting PDFs, images, and audio documents.
- Integrated **local LLM inference via Ollama**, eliminating third-party API dependency and data-leak risks.
- Built scalable **embedding storage + retrieval** with vector databases for fast semantic search.
- Developed a **real-time chat interface** with document-grounded responses and citations.
- Designed as a **secure alternative to cloud-based GPT systems**, suitable for sensitive and regulated environments.

**Tech Stack:** FastAPI, Python, Ollama (Local LLMs), RAG, FAISS/Chroma, LangChain, Next.js, TypeScript, Tailwind CSS
  `,
},
proj9: {
  id: "proj9",
  title: "Skin Lesion Classification using Deep Learning",
  subtitle: "Comparative study of CNN architectures on HAM10000 dataset",
  image: proj9, // replace with your asset
  demo: "", // optional (can leave empty if no live demo)
  github: "https://github.com/sandeshlavshetty/Skin-Cancer-Classification.git", // optional (add repo if public)
  description: `
A **research-driven deep learning project** focused on automated **skin lesion classification** using dermatoscopic images, aimed at improving early melanoma detection.

- Conducted a **comprehensive comparative analysis** of multiple architectures including **Custom CNN, Dual CNN, Xception, MobileNet, ResNet, and ensemble models** on the HAM10000 dataset (7 classes, 10,000+ images).
- Designed a **compact Custom CNN (~1.2M parameters)** that achieved **98.1% test accuracy and 0.98 macro F1-score**, outperforming larger transfer-learning models.
- Discovered and validated a **counterintuitive resolution effect**: aggressively downsampled **28×28 images outperformed 224×224 inputs by ~17% accuracy**, acting as a strong implicit regularizer.
- Demonstrated that **low-resolution training mitigates overfitting to dataset-specific artifacts** (hair, glare, ruler marks) and forces models to learn **clinically relevant global features**.
- Applied **class-weighted training, Grad-CAM interpretability, ROC-AUC analysis, and McNemar’s statistical testing** to ensure robustness and statistical significance.
- Evaluated generalization through **external validation on ISIC datasets** and ensemble strategies (Xception + EfficientNet).
- Highlights how **model capacity, input resolution, and dataset bias interact**, offering practical insights for deploying deep learning in real-world medical imaging systems.

Built to demonstrate **research depth, experimental rigor, statistical reasoning, and applied deep learning for healthcare AI**.
  `,
},

  proj10: {
  id: "proj10",
  title: "Lexical Analyzer (Scanner) for Compiler Frontend",
  subtitle: "C-based lexer for tokenizing source code",
  image: proj10, // replace with your actual image variable
  demo: "https://github.com/sandeshlavshetty/lexicalanalyser.git",
  github: "https://github.com/sandeshlavshetty/lexicalanalyser.git",
  description: `
A **Lexical Analyzer (Scanner)** implemented in **C**, forming the first phase of a compiler or interpreter pipeline.

- Scans raw source code **character-by-character** to identify valid lexical patterns.
- Converts lexemes into structured **tokens** such as keywords, identifiers, operators, literals, and delimiters.
- Ignores **whitespace and comments**, ensuring clean token streams for downstream compiler stages.
- Implements deterministic logic for **pattern matching and token classification**.
- Outputs token streams suitable for **syntax analysis (parsing)**.
- Designed to reinforce core **compiler design principles**, including lexical rules, finite-state behavior, and error handling.

Built to demonstrate strong foundations in **systems programming, compiler construction, and low-level language processing**.
  `,
},


};
