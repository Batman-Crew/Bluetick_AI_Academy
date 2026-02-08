import { BookOpen, Bot, Code, Cpu, Rocket, Settings, Layers } from "lucide-react";

export type LessonType = "Theory" | "Practical" | "Code" | "Mini-Build";

export interface Lesson {
  title: string;
  description: string;
  type: LessonType;
  icon: "book" | "settings" | "code" | "bot" | "layers";
}

export interface Module {
  id: number;
  label: string;
  title: string;
  description: string;
  tags: string[];
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: 1,
    label: "Module 1",
    title: "Python for AI/ML",
    description: "Master Python fundamentals and data handling for AI/ML development",
    tags: ["Python", "Pandas", "NumPy", "Data Handling", "OOPS"],
    lessons: [
      { title: "Setting up Python Environment", description: "Configure your development environment for Python and AI/ML.", type: "Practical", icon: "settings" },
      { title: "Python Basics", description: "Learn fundamental Python programming concepts.", type: "Theory", icon: "book" },
      { title: "Data Handling with Pandas and NumPy", description: "Master NumPy arrays, Pandas DataFrames, and data manipulation techniques.", type: "Code", icon: "code" },
      { title: "Data Visualization", description: "Create compelling visualizations using Matplotlib and Seaborn.", type: "Practical", icon: "settings" },
      { title: "REST APIs with FastAPI", description: "Build RESTful APIs using FastAPI framework.", type: "Code", icon: "code" },
      { title: "Building Web Apps with Streamlit", description: "Create interactive web applications using Streamlit.", type: "Practical", icon: "settings" },
    ],
  },
  {
    id: 2,
    label: "Module 2",
    title: "AI Overview",
    description: "Understand AI fundamentals, enterprise applications, and responsible AI practices",
    tags: ["AI", "ML", "Deep Learning", "GenAI", "Ethics"],
    lessons: [
      { title: "AI vs ML vs Deep Learning vs GenAI", description: "Distinguish between different AI concepts and their applications.", type: "Theory", icon: "book" },
      { title: "Enterprise AI Maturity Curve", description: "Learn about AI adoption stages in enterprise environments.", type: "Theory", icon: "book" },
      { title: "Enterprise AI Use Cases", description: "Explore real-world AI applications in business.", type: "Practical", icon: "settings" },
      { title: "Ethics & Responsible AI", description: "Understand ethical considerations and responsible AI practices.", type: "Theory", icon: "book" },
    ],
  },
  {
    id: 3,
    label: "Module 3",
    title: "AI Coding",
    description: "Master AI-assisted programming with Cursor and modern development practices",
    tags: ["Cursor", "AI Coding", "Debugging", "Spec-Driven Development"],
    lessons: [
      { title: "Using Cursor for Programming", description: "Learn to leverage Cursor IDE for efficient AI-assisted development.", type: "Practical", icon: "settings" },
      { title: "Context Management", description: "Master context files, instruction files, and prompting patterns.", type: "Theory", icon: "book" },
      { title: "Debugging with AI", description: "Use AI tools for effective debugging and problem-solving.", type: "Code", icon: "code" },
      { title: "Building Apps using Cursor", description: "Hands-on project: Create applications using AI-assisted development.", type: "Mini-Build", icon: "bot" },
    ],
  },
  {
    id: 4,
    label: "Module 4",
    title: "Machine Learning",
    description: "Comprehensive ML training covering supervised, unsupervised learning and MLOps",
    tags: ["ML", "Supervised Learning", "Unsupervised Learning", "MLOps", "Deep Learning"],
    lessons: [
      { title: "Supervised Learning Foundations", description: "Learn ML workflow, train-test split, regression vs classification.", type: "Theory", icon: "book" },
      { title: "Linear and Logistic Regression", description: "Master fundamental supervised learning algorithms.", type: "Code", icon: "code" },
      { title: "Tree-Based Models", description: "Explore Decision Trees, Random Forest, XGBoost, and LightGBM.", type: "Code", icon: "code" },
      { title: "Model Evaluation & Forecasting", description: "Learn cross-validation, metrics, and time series forecasting with ARIMA.", type: "Practical", icon: "settings" },
      { title: "Unsupervised Learning", description: "Master clustering algorithms and dimensionality reduction.", type: "Code", icon: "code" },
      { title: "MLOps & Production ML", description: "Deploy ML models with MLFlow and implement monitoring.", type: "Practical", icon: "settings" },
      { title: "Deep Learning Fundamentals", description: "Understand neural networks, CNN, RNN, and image classification.", type: "Theory", icon: "book" },
      { title: "ML Project Hands-On", description: "Build and deploy a complete ML project.", type: "Mini-Build", icon: "bot" },
    ],
  },
  {
    id: 5,
    label: "Module 5",
    title: "GenAI Foundation",
    description: "Master Large Language Models, prompt engineering, and LLM APIs",
    tags: ["LLMs", "Prompt Engineering", "LangChain", "Transformers"],
    lessons: [
      { title: "LLM Overview & Reasoning", description: "Understand LLM architecture and reasoning models.", type: "Theory", icon: "book" },
      { title: "Prompt Engineering & Optimization", description: "Master the art of crafting effective prompts.", type: "Practical", icon: "settings" },
      { title: "LLM APIs with LangChain", description: "Integrate LLMs using LangChain framework.", type: "Code", icon: "code" },
      { title: "Building Basic Chatbots", description: "Create conversational AI applications.", type: "Code", icon: "code" },
      { title: "How LLMs Work", description: "Deep dive into transformers and LLM architecture.", type: "Theory", icon: "book" },
      { title: "Diffusion Models", description: "Explore generative models for images and content.", type: "Theory", icon: "book" },
    ],
  },
  {
    id: 6,
    label: "Module 6",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Build intelligent systems that combine LLMs with external knowledge sources",
    tags: ["RAG", "Vector Databases", "Embeddings", "LlamaIndex"],
    lessons: [
      { title: "RAG Overview", description: "Learn vector embeddings, chunking, indexing, and retrieval.", type: "Theory", icon: "book" },
      { title: "Vector Databases - ChromaDB", description: "Master vector database concepts and ChromaDB implementation.", type: "Code", icon: "code" },
      { title: "Graph RAG", description: "Explore advanced RAG techniques with graph structures.", type: "Theory", icon: "book" },
      { title: "Enterprise Document QA System", description: "Build a production-ready document question-answering system.", type: "Mini-Build", icon: "bot" },
    ],
  },
  {
    id: 7,
    label: "Module 7",
    title: "AI Agents",
    description: "Create autonomous agents that can plan, reason, and execute complex tasks",
    tags: ["Agents", "LangGraph", "CrewAI", "Multi-Agent Systems"],
    lessons: [
      { title: "Agents Introduction", description: "Understand the difference between agents and chatbots.", type: "Theory", icon: "book" },
      { title: "Agent Workflows with LangGraph", description: "Build agent workflows using LangGraph framework.", type: "Code", icon: "code" },
      { title: "SQL Agent Hands-On", description: "Create an agent that can interact with databases.", type: "Code", icon: "code" },
      { title: "Context Engineering", description: "Learn why agents fail and how to engineer better context.", type: "Theory", icon: "book" },
      { title: "Memory in Agents", description: "Implement short-term and long-term memory systems.", type: "Code", icon: "code" },
      { title: "Agentic RAG", description: "Combine RAG with agent capabilities.", type: "Practical", icon: "settings" },
      { title: "Multi-Agent Systems", description: "Build collaborative agent systems with CrewAI.", type: "Mini-Build", icon: "bot" },
    ],
  },
  {
    id: 8,
    label: "Module 8",
    title: "AI Evals / LLMOps",
    description: "Master AI evaluation, observability, and production deployment practices",
    tags: ["LLMOps", "Evaluation", "Observability", "Guardrails"],
    lessons: [
      { title: "Evaluation Process", description: "Learn systematic approaches to evaluating AI systems.", type: "Theory", icon: "book" },
      { title: "LLM as Judge", description: "Use LLMs for automated evaluation and quality assessment.", type: "Practical", icon: "settings" },
      { title: "LLMOps & Observability", description: "Implement monitoring, logging, and guardrails for AI systems.", type: "Code", icon: "code" },
      { title: "AI Task Orchestration", description: "Automate AI workflows using n8n and similar tools.", type: "Practical", icon: "settings" },
      { title: "LLM Cost Optimization", description: "Optimize AI systems for performance and cost efficiency.", type: "Practical", icon: "settings" },
    ],
  },
  {
    id: 9,
    label: "Module 9",
    title: "Advanced Learning",
    description: "Explore cutting-edge AI techniques and enterprise product development",
    tags: ["Multi-modal", "Fine-tuning", "Voice Agents", "MCP"],
    lessons: [
      { title: "Model Context Protocol (MCP)", description: "Learn advanced model communication protocols.", type: "Theory", icon: "book" },
      { title: "Multi-Modal LLMs", description: "Work with text, images, and audio in unified AI systems.", type: "Code", icon: "code" },
      { title: "OCR using LLMs", description: "Extract and process text from images using AI.", type: "Practical", icon: "settings" },
      { title: "LLM Fine-Tuning", description: "Customize LLMs for specific domains and tasks.", type: "Code", icon: "code" },
      { title: "Voice Agents", description: "Build conversational AI with speech capabilities.", type: "Mini-Build", icon: "bot" },
      { title: "Enterprise AI Product Lifecycle", description: "Learn end-to-end AI product development processes.", type: "Theory", icon: "book" },
    ],
  },
  {
    id: 10,
    label: "Module 10",
    title: "Capstone Project",
    description: "Build and deploy a complete AI product showcasing all learned skills",
    tags: ["Capstone", "Full-Stack AI", "Production", "Portfolio"],
    lessons: [
      { title: "Project Planning & Architecture", description: "Design a comprehensive AI product from concept to deployment.", type: "Theory", icon: "book" },
      { title: "Development & Integration", description: "Build all components and integrate AI capabilities.", type: "Code", icon: "code" },
      { title: "Testing & Optimization", description: "Test, debug, and optimize the AI product.", type: "Practical", icon: "settings" },
      { title: "Deployment & Launch", description: "Deploy to production and prepare for user acquisition.", type: "Mini-Build", icon: "bot" },
    ],
  },
  {
    id: 11,
    label: "Module 11",
    title: "AI Readiness Assessment",
    description: "Evaluate your AI skills and readiness for enterprise implementation",
    tags: ["Assessment", "Skills Evaluation", "Readiness"],
    lessons: [
      { title: "Technical Skills Assessment", description: "Comprehensive evaluation of AI/ML technical competencies.", type: "Practical", icon: "settings" },
      { title: "Project Portfolio Review", description: "Review and improve your AI project portfolio.", type: "Practical", icon: "settings" },
      { title: "Enterprise Readiness Evaluation", description: "Assess readiness for enterprise AI roles and projects.", type: "Theory", icon: "book" },
    ],
  },
  {
    id: 12,
    label: "Module 12",
    title: "Mock Interviews",
    description: "Practice AI/ML interviews and prepare for industry roles",
    tags: ["Interviews", "Career Preparation", "Communication"],
    lessons: [
      { title: "Technical Interview Practice", description: "Practice AI/ML technical interview questions and scenarios.", type: "Practical", icon: "settings" },
      { title: "System Design Interviews", description: "Learn to design AI systems for complex requirements.", type: "Theory", icon: "book" },
      { title: "Behavioral Interviews", description: "Prepare for behavioral questions and leadership scenarios.", type: "Practical", icon: "settings" },
      { title: "Case Study Presentations", description: "Present AI solutions and defend technical decisions.", type: "Mini-Build", icon: "bot" },
    ],
  },
];
