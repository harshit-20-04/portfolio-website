

const portfolioData = {
  name: "Harshit Sharma",
  tagline:
    "Aspiring AI/ML Engineer | Generative AI Developer | Full Stack Developer",
  email: "05harshit.sharma2004@gmail.com",
  github: "https://github.com/harshit-20-04",
  linkedin: "https://www.linkedin.com/in/harshit-sharma-ac8896/",

  bio: `Final-year B.Tech Computer Science student passionate about building
AI-powered applications using Large Language Models, Retrieval-Augmented
Generation (RAG), Machine Learning, and Full Stack Development.
Experienced in developing production-ready AI assistants, conversational
chatbots, deep learning applications, and scalable web applications.
Strong foundation in Data Structures & Algorithms, OOP, DBMS,
Operating Systems, and Computer Networks.`,

  projects: [
    {
      id: 1,
      title: "DocMind – AI RAG Document Assistant",
      description:
        "A locally-hosted Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and chat with them using natural language. Built using LangChain, ChromaDB, and Mistral AI with semantic search for accurate context-aware responses while keeping all data private.",
      technologies: [
        "Python",
        "Flask",
        "LangChain",
        "ChromaDB",
        "Mistral AI",
        "RAG",
        "HTML",
        "CSS",
      ],
      link: "https://github.com/harshit-20-04/DocMind",
    },

    {
      id: 2,
      title: "Mood-Bot – AI Conversational Chatbot",
      description:
        "An intelligent chatbot capable of detecting user sentiment and generating mood-aware responses using Large Language Models. Supports real-time response streaming for a smooth conversational experience.",
      technologies: [
        "Python",
        "Flask",
        "LangChain",
        "Mistral AI",
        "LLMs",
        "HTML",
        "CSS",
      ],
      link: "https://github.com/harshit-20-04/mood-bot",
    },

    {
      id: 3,
      title: "AI Quote Generator",
      description:
        "A deep learning project that trains an LSTM neural network to generate original quotes from text sequences. Includes a Streamlit web interface for interactive text generation.",
      technologies: [
        "Python",
        "TensorFlow",
        "LSTM",
        "NLP",
        "Streamlit",
      ],
      link: "https://github.com/harshit-20-04/AI-Quote-Generator",
    },

    {
      id: 4,
      title: "Video Meet – Real-Time Video Conferencing",
      description:
        "A full-stack real-time video conferencing platform built using WebRTC and React. Supports peer-to-peer audio/video communication with efficient signaling using Socket.io.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "WebRTC",
        "Socket.io",
        "JavaScript",
      ],
      link: "https://github.com/harshit-20-04/video-meet",
    },

    {
      id: 5,
      title: "Quantara – Stock Buy & Sell Platform",
      description:
        "A responsive stock trading platform featuring portfolio management, watchlists, dynamic stock charts, and REST API integration for tracking and managing investments.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Chart.js",
        "REST APIs",
        "CSS Modules",
      ],
      link:
        "https://github.com/harshit-20-04/Quantara-stock-buy-sell",
    },
  ],
  
  skills: {
    languages: [
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "SQL",
    ],

    ai_ml: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "TensorFlow",
      "LSTM",
      "Mistral AI",
      "ChromaDB",
      "Prompt Engineering",
    ],

    web: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "MongoDB",
      "WebRTC",
      "REST APIs",
    ],

    tools: [
      "Git",
      "GitHub",
      "Streamlit",
      "VS Code",
    ],

    fundamentals: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
};

export default portfolioData;