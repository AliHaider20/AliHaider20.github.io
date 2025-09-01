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
  phone: string;
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
  technicalSkills: TechnicalSkill[];
  focusAreas: string[];
  skillCategories: SkillCategory[];
}

const resumeData: ResumeData = {
  name: "Haider Ali",
  title: "Artificial Intelligence Engineer",
  subtitle:
    "Specialized in Machine Learning, Computer Vision, and Generative AI applications",
  email: "Hali4@mail.yu.edu",
  phone: "(551) 344-4769",
  location: "Austin, TX 78703",
  linkedInUrl: "https://www.linkedin.com/in/haiderzali/",
  githubUrl: "https://github.com/AliHaider20",
  orcidUrl: "https://orcid.org/0009-0007-4469-0460",
  leetCodeUrl: "https://leetcode.com/haiderali20/",
  education: [
    {
      institution: "Yeshiva University",
      degree: "Master of Science",
      fieldOfStudy: "Artificial Intelligence",
      startDate: "",
      endDate: "May 2024",
      coursework: [
        "Numerical Analysis",
        "Computer Vision",
        "Statistics and Probability",
        "Machine Learning",
        "Generative AI",
      ],
    },
  ],
  experience: [
    {
      company: "S&P Global",
      position: "Machine Learning Joint Research Project",
      location: "NY, NY",
      startDate: "May 2023",
      endDate: "August 2023",
      description: [
        "Scraped, engineered, and extracted relevant features of Global Precipitation Data from NASA's GDDP (HDF) files using R",
        "Employed Morphological image analysis, and employed KNN and CNN for feature extraction",
        "Evaluated multiple super-resolution models; ESRGAN maintained 80% image quality while enhancing resolution",
        "Utilized AWS for MLOps orchestration to deploy the model, focusing on scalability and maintainability, and enabling ongoing monitoring through integrated MLFlow",
      ],
    },
    {
      company: "Kan Innovations",
      position: "Machine Learning Engineer",
      location: "Mumbai, India",
      startDate: "January 2022",
      endDate: "July 2022",
      description: [
        "Crafted a large image dataset by scraping foot images, merging pressure mat data, and employed Pix2Pix GAN augmentation",
        "Leveraged DenseNet121, DeepLabV3+, and custom segmentation model to estimate the pressure points in a foot",
        "Constructed 3D voxel foot meshes using Open3D library and Blender to help design insoles, reduced 40% foot deformity",
        "Implemented BlazePose model for real-time pose estimation, enhancing gaming interaction reducing 20% foot deformity",
      ],
    },
  ],
  projects: [
    {
      title: "Advanced LLM Conversational Chatbot System",
      date: "Feb - Sept 2023",
      category: "Generative AI | Large Language Models",
      description:
        "Developed a comprehensive LLM-based conversational system with both general and university-specific capabilities, achieving high accuracy for diverse user queries.",
      details: [
        "Generated 66,000 question-answer pairs using data pipelines (Apache Cassandra, Astra DB, Langchain, ChatGPT API) and NLPAug from PDFs and manual creation, with rigorous quality checks",
        "Applied and compared multiple LLMs including Microsoft's Phi 1.5B, Flan T5, GPT-2, and Mistral 7B with Mistral achieving up to 70% RougeL score",
        "Compressed Mistral Instruct model with DeepSparse for faster inference and optimized deployment",
        "Deployed models on local servers with RAG pipeline implementation using Langchain and FAISS for efficient retrieval",
      ],
      technologies: [
        "LLM",
        "Langchain",
        "ChatGPT",
        "RAG",
        "FAISS",
        "Mistral",
        "GPT",
        "BERT",
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
      githubLink: "https://github.com",
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
      githubLink: "https://github.com/AliHaider20/Medical-Expenses-Predictionm",
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
      githubLink: "https://github.com",
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
  skillCategories: [
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "R",
        "SQL",
        "C/C++",
        "JavaScript",
        "MATLAB",
        "Bash/Shell",
      ],
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Large Language Models",
        "Generative AI",
        "Reinforcement Learning",
        "Time Series Analysis",
        "Statistical Modeling",
        "Feature Engineering",
        "Model Optimization",
      ],
    },
    {
      category: "ML Frameworks & Libraries",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Hugging Face",
        "OpenCV",
        "NLTK",
        "spaCy",
        "XGBoost",
        "LightGBM",
        "CatBoost",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS (EC2, SageMaker)",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "MLflow",
        "Git/GitHub",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Databases & Data Engineering",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Apache Cassandra",
        "Elasticsearch",
        "ETL Pipelines",
        "Data Warehousing",
        "Apache Kafka",
        "Snowflake",
      ],
    },
    {
      category: "Specialized AI Tools",
      skills: [
        "Langchain",
        "LlamaIndex",
        "FAISS",
        "Pinecone",
        "Weights & Biases",
        "Stable Diffusion",
        "BERT",
        "GPT Models",
        "RAG Systems",
        "Vector Databases",
        "ONNX",
        "TensorRT",
        "DeepSpeed",
        "Gradio",
        "Streamlit",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Programming & Tools",
      skills: [
        { name: "Python", percentage: 95, color: "#3776AB" },
        { name: "R", percentage: 85, color: "#276DC3" },
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
  focusAreas: [
    "Machine Learning",
    "Computer Vision",
    "Generative AI",
    "NLP",
    "Data Science",
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
