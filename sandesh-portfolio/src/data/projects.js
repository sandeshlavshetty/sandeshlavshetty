import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

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

• Achieves **600,000+ operations per second** through optimized data structures and cache-efficient design.
• Implements **Red-Black Trees (std::set)** for O(log n) price-level management and **doubly linked lists** for fast order handling within each price level.
• Supports core exchange operations including **order placement, matching, execution, and deletion**.
• Processes large-scale workloads via CSV-driven input pipelines and deterministic output generation.
• Includes a **comprehensive unit test suite** using Google Test to ensure correctness under high operation volume.
• Designed with clean separation of concerns, making it suitable for **quantitative finance, HFT, and systems engineering roles**.

Built to demonstrate **systems-level thinking, performance optimization, and real-world trading engine design**.
    `,
  },
};
