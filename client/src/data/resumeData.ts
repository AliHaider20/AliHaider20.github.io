export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  coursework: string[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  title: string;
  date: string;
  category: string;
  description: string;
  details: string[];
  technologies: string[];
  githubLink: string;
}

export interface Achievement {
  title: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  doiLink?: string;
  summary: string;
  tags: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

export interface TechnicalSkill {
  category: string;
  skills: Skill[];
  additionalSkills: string[];
}

export interface VolunteerExperience {
  organization: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  linkedInUrl: string;
  githubUrl: string;
  orcidUrl: string;
  leetCodeUrl: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  volunteerExperiences: VolunteerExperience[];
  achievements: Achievement[];
  certifications: Certification[];
  publications: Publication[];
  technicalSkills: TechnicalSkill[];
  skillCategories: SkillCategory[];
}

const resumeData: ResumeData = {
  name: "Haider Ali",
  title: "Artificial Intelligence Engineer",
  subtitle:
    "Specialized in Machine Learning, Computer Vision, and Generative AI applications",
  email: "Hali4@mail.yu.edu",
  location: "Fairfax, VA - 22032",
  linkedInUrl: "https://www.linkedin.com/in/haiderzali/",
  githubUrl: "https://github.com/AliHaider20",
  orcidUrl: "https://orcid.org/0009-0007-4469-0460",
  leetCodeUrl: "https://leetcode.com/haiderali20/",
  education: [
    {
      institution: "Yeshiva University",
      degree: "Master of Science",
      fieldOfStudy: "Artificial Intelligence",
      startDate: "August 2022",
      endDate: "May 2024",
      coursework: [
        "Numerical Analysis",
        "Computer Vision",
        "Statistics and Probability",
        "Machine Learning",
        "Generative AI",
      ],
    },
    {
      institution: "Mumbai University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science, Specialization in AI",
      startDate: "August 2017",
      endDate: "May 2021",
      coursework: [
        "Data Structures & Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Database Management",
        "Computer Vision",
      ],
    },
  ],
  experience: [
    {
      company: "Credo Health",
      position: "Machine Learning Engineer",
      location: "Austin, TX",
      startDate: "June 2024",
      endDate: "February 2026",
      description: [
        "Built a hybrid re-ranking RAG pipeline serving concurrent multi-user clinical queries with real-time document ingestion",
        "Reduced LLM prompt tokens by 30% via hash-based deduplication, lowering per-query inference cost at scale",
        "Deployed an agentic chatbot framework achieving 96% accuracy, validated across thousands of QA test cases",
        "Designed a multi-judge LLM eval framework running automated quality assessments across all production agent outputs",
      ],
    },
    {
      company: "S&P Global",
      position: "Machine Learning Joint Research Project",
      location: "NYC, NY",
      startDate: "May 2023",
      endDate: "August 2023",
      description: [
        "Scraped, engineered, and extracted relevant features of Global Precipitation Data from NASA's GDDP (HDF) files using R",
        "Employed predictive modeling using features from KNN and CNN after morphological image analysis",
        "Evaluated multiple super-resolution models; ESRGAN maintained 80% image quality while enhancing resolution",
      ],
    },
    {
      company: "Kan Innovations",
      position: "Machine Learning Engineer",
      location: "Mumbai, India",
      startDate: "January 2022",
      endDate: "February 2023",
      description: [
        "Developed foot imagery dataset using scrapers and pressure mat data, processed with Pix2Pix GANs",
        "Leveraged DenseNet121, DeepLabV3+, and custom segmentation model to estimate the pressure points in a foot",
        "Constructed 3D voxel foot meshes using Open3D library and Blender to help design insoles, reduced 40% foot deformity",
        "Implemented BlazePose model for real-time pose estimation, enhancing gaming interaction reducing 20% foot deformity",
      ],
    },
  ],
  projects: [
    {
      title: "Credit Card Assistant Agent",
      date: "February 2025",
      category: "Generative AI | Agentic AI",
      description:
        "Agentic AI chatbot using Semantic Kernel with tool-calling for card operations and document Q&A, featuring a fully grounded RAG pipeline.",
      details: [
        "Developed agentic AI chatbot using Semantic Kernel with tool-calling for card operations and document Q&A",
        "Built RAG pipeline ingesting PDFs, chunking via LangChain, and indexing with FAISS for grounded responses",
        "Built reusable tool/skill abstractions with clear input/output interfaces for card operations and document retrieval",
      ],
      technologies: ["Semantic Kernel", "LangChain", "FAISS", "RAG", "Python", "Prompt Engineering"],
      githubLink: "https://github.com/AliHaider20/Semantic-kernel-card-assist-agent",
    },
    {
      title: "Email Promotions AI Agent",
      date: "May 2025 - Present",
      category: "Generative AI | Agentic AI",
      description:
        "Autonomous AI agent that monitors email inbox for promotional content and intelligently notifies users about relevant deals based on their preferences.",
      details: [
        "Built an agentic pipeline that continuously fetches and parses promotional emails using Python email APIs",
        "Integrated LLM-based classification to rank and filter deals against user-defined preference profiles",
        "Implemented preference-aware notification system ensuring users never miss high-value promotions",
      ],
      technologies: ["Python", "AI Agents", "LLM", "Email API", "NLP"],
      githubLink: "https://github.com/AliHaider20/Email-promotions-Agent",
    },
    {
      title: "University Chatbot using LLM (KatzBot)",
      date: "December 2023",
      category: "Generative AI | Large Language Models",
      description:
        "Pre-trained and fine-tuned a custom SLM for university-specific Q&A, generating a 60K synthetic dataset and achieving 70% RougeL score. Published as a peer-reviewed paper.",
      details: [
        "Scraped and synthetically generated 60K question-answer pairs using the NLPAug tool, BERT, and GPT models",
        "Fine-tuned Phi 1.5B, Flan T5, GPT-2, and Mistral models using FSDP, QLoRA, SFT, and GRPO achieving 70% RougeL score",
        "Instruction trained and deployed a custom SLM on local server using Streamlit and FastAPI",
      ],
      technologies: [
        "LLM",
        "QLoRA",
        "FSDP",
        "SFT",
        "GRPO",
        "RAG",
        "FAISS",
        "Mistral",
        "FastAPI",
        "Streamlit",
      ],
      githubLink: "https://github.com/AliHaider20/KatzBot-LLM",
    },
    {
      title: "Cow TEAT Keratosis Level Identification",
      date: "March 2023",
      category: "Generative AI | Computer Vision",
      description:
        "Developed an automated system to identify keratosis levels in cow teats using computer vision techniques, enhancing dairy farm health monitoring.",
      details: [
        "Extracted relevant features from images using HOG, SURF, SIFT to train SVC, KNN achieved 60% accuracy",
        "Generated 500 images using Stable Diffusion to balance the dataset by upsampling classes 1, 3, and 4 classes which improved base models by 10%",
        "Published research paper comparing the performance of SOTA models (Meta-models, ResNets, VisionTransformer, GoogleNet, and Inception) on balanced and imbalanced datasets, achieving 85% accuracy using GoogleNet on balanced datasets",
      ],
      technologies: [
        "Computer Vision",
        "CNN",
        "Stable Diffusion",
        "GoogleNet",
        "Feature Extraction",
      ],
      githubLink:
        "https://github.com/AliHaider20/Cow-Teat-Keratosis-Aug-Stable-Diffusion",
    },
    {
      title: "Human Faces Generation",
      date: "July 2022",
      category: "Generative AI | Computer Vision",
      description:
        "Developed a deep convolutional generative adversarial network (DCGAN) to generate realistic human faces using advanced deep learning techniques.",
      details: [
        "Developed a 16-layered DCGAN model for generating realistic human faces using Kaggle CelebA dataset",
        "Achieved 95% accurate images of human faces through hyperparameter tuning, utilizing BCELoss and a batch size of 64 images",
      ],
      technologies: ["DCGAN", "PyTorch", "Generative AI", "Computer Vision"],
      githubLink: "https://github.com/AliHaider20/Generating-Human-Faces",
    },
    {
      title: "Lung Image Segmentation",
      date: "December 2023",
      category: "Computer Vision | Medical Imaging",
      description:
        "Developed an advanced lung segmentation system using deep learning and image processing techniques for accurate medical image analysis.",
      details: [
        "Achieved better lung segmentations by applying image processing techniques with multi-Otsu thresholding to augment images",
        "Developed a 6-layered CNN for lung segmentation, reaching an 80% IOU score, just 5% below DeepLabV3 model and 2% below UNet",
        "Employed MLflow for model tracking and utilized PyTorch Lightning for efficient code development and deployment",
      ],
      technologies: [
        "CNN",
        "Transformers",
        "PyTorch",
        "Image Segmentation",
        "MLflow",
        "Medical Imaging",
      ],
      githubLink: "https://github.com/AliHaider20/Lung-segmentation",
    },
    {
      title: "Facial Recognition using SVD",
      date: "August 2022",
      category: "Computer Vision | Linear Algebra",
      description:
        "Implemented a facial recognition system using Singular Value Decomposition (SVD) for dimensionality reduction and feature extraction.",
      details: [
        "Standardized faces dataset using the mean face",
        "Compared SVD and base model (comparing single faces with others) accuracies. SVD performance is lower until the 50 eigenvalues are taken into consideration, then both models perform equally",
      ],
      technologies: [
        "SVD",
        "Linear Algebra",
        "Computer Vision",
        "Face Recognition",
      ],
      githubLink: "",
    },
    {
      title: "Medical Expense Prediction",
      date: "November 2022",
      category: "Data Analysis | Healthcare",
      description:
        "Predictive analytics project to forecast medical expenses based on patient demographics and health factors, helping optimize healthcare resource allocation.",
      details: [
        "Applied Bivariate analysis and found people with ages smaller than equal to 19 have most of the charges below 5000 which contributes approx. 6% of the dataset",
        "Applied Bivariate analysis and found people age smaller than equal to 19 contribute 7% of the total expense and smoking; most of them are non-smokers",
        "People with BMI greater than 30 and smoking have higher medical expenses",
        "Selected relevant features using the forward selection process using Linear Regression and found Gradient Boosting to be the best with a 90% R2 score",
      ],
      technologies: [
        "XGBoost",
        "Linear Regression",
        "Feature Selection",
        "Healthcare Analytics",
      ],
      githubLink: "https://github.com/AliHaider20/Medical-Expenses-Prediction",
    },
    {
      title: "Income VS Crime in NYC",
      date: "October 2022",
      category: "Data Analysis | Social Science",
      description:
        "Explored the relationship between income levels and crime rates in New York City, revealing significant correlations between socioeconomic factors and crime statistics.",
      details: [
        "Scraped 20000 data points using API programming, created SQL database, fetched data in Python from SQL using Psycopg2, and analyzed it",
        "Combined both datasets and found that crime is highly 70% positively correlated with income",
      ],
      technologies: [
        "Python",
        "SQL",
        "API",
        "Data Mining",
        "Statistical Analysis",
      ],
      githubLink: "https://github.com/AliHaider20/Crime-and-Income-in-NYC",
    },
    {
      title: "Food Recommendation System",
      date: "June 2022",
      category: "Machine Learning | Recommender Systems",
      description:
        "Created a food recommendation system to increase restaurant revenue through personalized suggestions based on user preferences and consumption patterns.",
      details: [
        "Applied data engineering, and generated dataset using SMOTE to balance the dataset",
        "Applied analysis based on food category and content and found people like turkey and fish food the most and thanksgiving is the favorite occasion",
        "Applied GridSearchCV on Random Forest, SVM, KNN and base models. Built an ensemble model achieving 100% accuracy",
      ],
      technologies: [
        "Random Forest",
        "SVM",
        "KNN",
        "Ensemble Learning",
        "SMOTE",
      ],
      githubLink: "",
    },
    {
      title: "Optimizing Stewart Platform",
      date: "January 2023",
      category: "Robotics | Optimization",
      description:
        "Optimized the Stewart platform, a 6-DOF parallel robot, through mathematical modeling and numerical methods to enhance precision and performance.",
      details: [
        "Find the position of the Stewart platform using function and tested it using the range of values between -pi/4 and pi/4 and visualizing theta vs f(theta)",
        "Found roots of the solution using Newton and Bisection methods where Newton takes 3x less time to converge",
        "Found the position of the platform using 3 strut lengths",
      ],
      technologies: [
        "Robotics",
        "Numerical Methods",
        "Mathematical Modeling",
        "Optimization",
      ],
      githubLink: "https://github.com/AliHaider20/Stewart-Platform",
    },
  ],
  achievements: [
    {
      title:
        "Top performer in 2 consecutive Python Hackathons with over 700 participants",
    },
    {
      title:
        "Gold Medalist in GreyAtom's Data Science Competition among 100 participants",
    },
  ],
  certifications: [
    // Add your certifications here, e.g.:
    // { name: "AWS Certified Machine Learning Specialty", issuer: "Amazon Web Services", date: "2024", credentialUrl: "https://..." },
    // { name: "TensorFlow Developer Certificate", issuer: "Google", date: "2023", credentialUrl: "https://..." },
  ],
  publications: [
    {
      title:
        "KatzBot: Revolutionizing Academic Chatbot for Enhanced Communication",
      journal: "Peer-Reviewed Research Paper",
      year: "May 2024",
      doiLink: "https://www.researchgate.net/publication/384906751_KatzBot_Revolutionizing_Academic_Chatbot_for_Enhanced_Communication",
      summary:
        "Designed and deployed KatzBot, a university-specific conversational AI system. Synthetically generated 60K+ QA pairs using NLPAug, BERT, and GPT models. Fine-tuned Phi 1.5B, Flan T5, GPT-2, and Mistral 7B using FSDP, QLoRA, SFT, and GRPO, achieving 70% RougeL score on domain-specific queries.",
      tags: ["LLM", "RAG", "Fine-tuning", "QLoRA", "NLP", "Chatbot"],
    },
    {
      title:
        "Cow Teat Keratosis Classification: Data Augmentation Using Stable Diffusion for Imbalanced Biological Dataset",
      journal: "Peer-Reviewed Research Paper",
      year: "May 2023",
      doiLink:
        "https://github.com/AliHaider20/Cow-Teat-Keratosis-Aug-Stable-Diffusion",
      summary:
        "Benchmarked SOTA vision models (ResNets, VisionTransformer, GoogleNet, Inception, Meta-models) on balanced vs imbalanced datasets. Generated 500 synthetic images using Stable Diffusion to balance minority classes, achieving 85% accuracy with GoogleNet on balanced data — a 10% improvement over the baseline.",
      tags: [
        "Computer Vision",
        "Stable Diffusion",
        "Generative AI",
        "Healthcare AI",
        "CNN",
        "Data Augmentation",
      ],
    },
  ],
  skillCategories: [
    {
      category: "Programming & Tools",
      skills: [
        "Python",
        "PyTorch",
        "Semantic Kernel",
        "FastAPI",
        "Docker",
        "JAX",
        "Git",
        "MySQL",
        "PostgreSQL",
        "HuggingFace",
        "C++",
      ],
    },
    {
      category: "Cloud & Data",
      skills: [
        "GCP",
        "Vertex AI",
        "Azure",
        "Plotly",
        "Vector DBs",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
        "CI/CD",
        "LangChain",
        "FAISS",
        "EMR",
      ],
    },
    {
      category: "ML / AI",
      skills: [
        "LLMs (GPT, BERT, OpenAI, Gemini)",
        "RAG",
        "Prompt & Context Engineering",
        "NLP",
        "Computer Vision",
        "Generative AI (Stable Diffusion, GAN)",
        "XGBoost",
        "ONNX",
        "FlashAttention",
        "LLM Fine-tuning (QLoRA, SFT)",
        "Vector Search",
        "Tool Calling",
        "Model Evaluations",
        "MLflow",
        "Transformers",
        "MLOps",
        "vLLM",
        "FSDP",
        "Langsmith",
        "Pydantic",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Programming & Tools",
      skills: [
        { name: "Python", percentage: 95, color: "#3776AB" },
        { name: "AWS", percentage: 80, color: "#FF9900" },
        { name: "SQL", percentage: 75, color: "#4479A1" },
        { name: "C/C++", percentage: 70, color: "#00599C" },
      ],
      additionalSkills: [
        "Docker",
        "Git",
        "ONNX",
        "Kubernetes",
        "Langchain",
        "FAISS",
        "MLflow",
        "VLLM"
      ],
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Computer Vision", percentage: 90, color: "#00BFFF" },
        { name: "Deep Learning", percentage: 85, color: "#FF4500" },
        { name: "NLP / LLMs", percentage: 80, color: "#32CD32" },
        { name: "Generative AI", percentage: 75, color: "#9370DB" },
      ],
      additionalSkills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "BERT",
        "GPT",
        "Stable Diffusion",
        "XGBoost",
        "Hugging Face",
      ],
    },
  ],
  volunteerExperiences: [
    {
      organization: "Omdena",
      position: "Machine Learning Engineer",
      location: "Remote",
      startDate: "Jan 2024",
      endDate: "April 2024",
      description: [
        "Utilized classification and segmentation models to detect the presence of seagrass and accurately measure its area coverage.",
        "Conducted thorough data collection on seagrass meadows from a wide array of public sources.",
        "Attained a remarkable 95% Intersection over Union (IOU) score in delineating seagrass segments, facilitating the identification of trends in meadow development for future analysis and planning.",
      ],
    },
    {
      organization: "STEM Expedition",
      position: "Lead Generative AI Engineer",
      location: "Remote",
      startDate: "Oct 2023",
      endDate: "Jan 2024",
      description: [
        "Developed Physiotherapist chatbot system using SOTA LLMs with RAG system",
        "Provided mentorship and guidance to engineering team members during the creation of a question-answering dataset",
        "Conducted rigorous fine-tuning of state-of-the-art language model (LLM) models, including Microsoft Phi 1.5B, GPT 2, Falcon 7B, and Mistral 7B, and conducted thorough comparative analyses to evaluate their effectiveness",
        "Employed RAG pipeline using LlamaIndex to create the embedding dataset and FAISS for semantic search which improved the final results",
      ],
    },
    {
      organization: "Develop For Good",
      position: "Machine Learning Engineer",
      location: "Remote",
      startDate: "May 2023",
      endDate: "Aug 2023",
      description: [
        "Developed and implemented a machine learning pipeline for predicting fruit ripeness.",
        "Experimented with various algorithms and fine-tuned hyperparameters for optimal performance.",
        "Achieved accurate predictions, contributing to efficient fruit ripeness assessment. This initiative led to a notable 50% decrease in fruit wastage.",
      ],
    },
  ],
};

export default resumeData;
