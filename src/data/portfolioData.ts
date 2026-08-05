// ============================================================
// SINGLE SOURCE OF TRUTH — Update this file to change content
// ============================================================

export const personalInfo = {
  name: "Abhishek Jampani",
  firstName: "Abhishek",
  lastName: "Jampani",
  title: "Full-Stack Developer",
  tagline: "Building scalable web applications with React, Spring Boot & modern tech",
  email: "2300031574csehte@gamil.com",
  phone: "+91 6304002450",
  location: "Vijayawada, Andhra Pradesh, India",
  dob: "20 April 2006",
  profileImage: "/images/profile.png",
  resumeUrl: "/resume.pdf",
  availability: "Open to Internships & Full-time opportunities",
  social: {
    github: "https://github.com/AbhishekJampani",
    linkedin: "https://linkedin.com/in/Abhishek-Jampani",
    leetcode: "https://leetcode.com/u/klu2300031574",
    codechef: "https://codechef.com/users/klu230003574",
    hackerrank: "https://hackerrank.com/profile/h2300031574",
  },
};

export const about = {
  summary: `Aspiring full-stack developer with strong problem-solving skills and hands-on experience in web application development using ReactJS, Spring Boot, and MySQL. Proficient in designing REST APIs, implementing secure authentication, and building responsive user interfaces. Passionate about creating scalable, user-friendly solutions and continuously learning modern technologies to deliver efficient applications.`,
  objective: `To obtain a challenging role where I can apply my full-stack development skills, contribute to impactful projects, and grow as a software engineer in a dynamic environment.`,
  highlights: [
    "9.02 CGPA in B.Tech CSE at KL University",
    "Full-stack projects with Spring Boot + React",
    "AWS, Azure & Oracle Cloud certified",
    "Design Lead at DataScience AI Dynamos Club",
  ],
};

export const education = [
  {
    id: 1,
    institution: "KL University",
    location: "Vaddeswaram, AP",
    degree: "B.Tech in Computer Science and Engineering",
    period: "May 2023 – Present",
    score: "9.02 CGPA",
    description: "Strong foundation in programming, web development, and database management.",
  },
  {
    id: 2,
    institution: "Narayana Junior College",
    location: "Vijayawada, AP",
    degree: "Intermediate (MPC)",
    period: "May 2021 – May 2023",
    score: "92.3%",
    description: "Focused on mathematics, physics, and chemistry with a problem-solving approach.",
  },
  {
    id: 3,
    institution: "Vijayarani H S (EM)",
    location: "Vijayawada, AP",
    degree: "Secondary Education (10th Grade)",
    period: "Apr 2020 – Apr 2021",
    score: "100%",
    description: "Academic excellence with outstanding performance in mathematics and science.",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "C", level: 75 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
  ],
  frameworks: [
    { name: "ReactJS", level: 85 },
    { name: "Spring Boot", level: 80 },
  ],
  databases: [
    { name: "MySQL", level: 80 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Power BI", level: 70 },
    { name: "Figma", level: 75 },
    { name: "Canva", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "MySQL Workbench", level: 80 },
  ],
  cloud: [
    { name: "AWS", level: 70 },
    { name: "Microsoft Azure", level: 70 },
    { name: "Oracle Cloud", level: 75 },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Designing and Drafting Head",
    organization: "DataScience AI Dynamos Club",
    period: "August 2025 – Present",
    type: "Leadership",
    description: [
      "Led the design team to create posters, presentations, and promotional materials for club events and workshops.",
      "Designed visually appealing content using modern design principles, improving event reach and engagement.",
      "Collaborated with technical teams to translate complex AI/Data Science concepts into clear visual content.",
      "Managed and maintained design consistency across all club communications and branding.",
      "Coordinated with team members to meet deadlines and ensure high-quality deliverables.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Quiz Builder",
    subtitle: "Full-Stack Academic Project",
    period: "August 2025",
    featured: true,
    description:
      "A modern full-stack quiz application supporting multiple-choice, true/false, and open-ended questions. Features randomization, score tracking, reporting, secure authentication, and session-based quiz flow.",
    longDescription: [
      "Built a complete quiz platform with Spring Boot backend and ReactJS frontend.",
      "Implemented REST APIs for quiz creation, participation, and result analytics.",
      "Added randomization of questions, real-time score tracking, and detailed reporting.",
      "Integrated authentication and session management for secure participation.",
      "Enhanced user engagement by 25% through thoughtful UX and feedback loops.",
    ],
    tech: ["Spring Boot", "ReactJS", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/AbhishekJampani",
    live: null,
    image: "/images/projects/quiz-builder.jpg",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Human Pose Generator",
    subtitle: "Generative AI Academic Project",
    period: "December 2025",
    featured: true,
    description:
      "Developed GAN models (Vanilla GAN & DCGAN) to generate realistic human pose images. Trained on image datasets and improved output quality using deep learning techniques.",
    longDescription: [
      "Implemented both Vanilla GAN and DCGAN architectures from scratch.",
      "Trained models on curated image datasets for realistic pose generation.",
      "Applied advanced techniques to improve image fidelity and reduce artifacts.",
      "Explored generative AI capabilities for computer vision applications.",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "GAN", "DCGAN"],
    github: "https://github.com/AbhishekJampani",
    live: null,
    image: "/images/projects/pose-generator.jpg",
    color: "from-cyan-500 to-blue-600",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "October 28, 2025",
    validUntil: "October 28, 2027",
    credentialId: "102997099OCI25GAIOCP",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024–2025",
  },
  {
    id: 3,
    title: "Microsoft Azure AZ-900",
    issuer: "Microsoft",
    date: "2024–2025",
  },
  {
    id: 4,
    title: "MongoDB Certification",
    issuer: "MongoDB",
    date: "2024–2025",
  },
  {
    id: 5,
    title: "Cambridge English Linguaskill (CEFR B2)",
    issuer: "Cambridge Assessment English",
    date: "May 2024",
    score: "Average Score: 164 (Listening 157, Reading 180+, Speaking 166, Writing 149)",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Design Lead",
    value: "1",
    label: "Club Leadership Role",
    description: "Designing & Drafting Head – DataScience AI Dynamos Club",
  },
  {
    id: 2,
    title: "CGPA",
    value: "9.02",
    label: "Academic Excellence",
    description: "B.Tech CSE at KL University",
  },
  {
    id: 3,
    title: "Certifications",
    value: "5+",
    label: "Cloud & Language",
    description: "AWS, Azure, Oracle, MongoDB, Linguaskill",
  },
  {
    id: 4,
    title: "Projects",
    value: "2+",
    label: "Full-Stack & AI",
    description: "Quiz Builder & Human Pose GAN",
  },
];

export const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/klu2300031574",
    username: "klu2300031574",
    icon: "leetcode",
  },
  {
    name: "CodeChef",
    url: "https://codechef.com/users/klu230003574",
    username: "klu230003574",
    icon: "codechef",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com/profile/h2300031574",
    username: "h2300031574",
    icon: "hackerrank",
  },
  {
    name: "GitHub",
    url: "https://github.com/AbhishekJampani",
    username: "AbhishekJampani",
    icon: "github",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
