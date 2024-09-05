const statuses = ["Application Submitted", "Under Review", "Interview Process", "Hired"];

const companies = [
  {
    id: 1,
    name: "TechCp",
    package: "120,000",
    registrationDate: "2024-08-20",
    image: "https://tse4.mm.bing.net/th?id=OIP.2AmwrTnE_ys6QNCFe6iKRwHaHa&pid=Api&P=0&h=180",
    description:
      "TechCorp is a leading innovator in technology solutions, providing cutting-edge software and hardware solutions to businesses worldwide.",
    eligibilityCriteria: ["Minimum G.P.A 7", "Zero Backlogs", "10/12th 75+%"],
    jobRole: "Software Engineer",
    jobResponsibilities: [
      "Design and develop scalable and efficient software solutions",
      "Collaborate with cross-functional teams to deliver high-quality products",
      "Participate in code reviews and provide feedback to improve codebase",
      "Stay up-to-date with the latest technologies and industry trends",
    ],
    jobRequirements: [
      "Bachelor's degree in Computer Science or a related field",
      "3+ years of experience in software development",
      "Proficient in JavaScript, React, and Node.js",
      "Strong problem-solving and analytical skills",
      "Excellent communication and collaboration skills",
    ],
    contact: {
      website: "https://www.techcorp.com",
      phone: "+1 (555) 987-6543",
    },
    appliedStudents: [
      { name: "Alice Johnson", dateApplied: "2024-08-15" },
      { name: "Bob Smith", dateApplied: "2024-08-16" },
    ],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
  {
    id: 2,
    name: "InnovateX",
    package: "95,000",
    registrationDate: "2024-08-22",
    image: "https://tse1.mm.bing.net/th?id=OIP.TNvtdfBQCNPMkCJYfcv3CgHaHa&pid=Api&P=0&h=180",
    description:
      "InnovateX focuses on creating advanced technology solutions for modern business challenges, with a strong emphasis on innovation and sustainability.",
    eligibilityCriteria: ["Minimum G.P.A 6.5", "No more than 1 Backlog", "10/12th 70+%"],
    jobRole: "Product Manager",
    jobResponsibilities: [
      "Define product vision and strategy",
      "Work with engineering and design teams to develop product requirements",
      "Manage product lifecycle from conception to launch",
      "Analyze market trends and customer needs to drive product innovation",
    ],
    jobRequirements: [
      "Bachelor's degree in Business or a related field",
      "5+ years of experience in product management",
      "Strong understanding of product lifecycle management",
      "Excellent leadership and organizational skills",
    ],
    contact: {
      website: "https://www.innovatex.com",
      phone: "+1 (555) 654-3210",
    },
    appliedStudents: [
      { name: "Charlie Brown", dateApplied: "2024-08-18" },
      { name: "David Wilson", dateApplied: "2024-08-19" },
    ],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },  {
    id: 1,
    name: "TechCorp",
    package: "120,000",
    registrationDate: "2024-08-20",
    image: "https://tse4.mm.bing.net/th?id=OIP.2AmwrTnE_ys6QNCFe6iKRwHaHa&pid=Api&P=0&h=180",
    description:
      "TechCorp is a leading innovator in technology solutions, providing cutting-edge software and hardware solutions to businesses worldwide.",
    eligibilityCriteria: ["Minimum G.P.A 7", "Zero Backlogs", "10/12th 75+%"],
    jobRole: "Software Engineer",
    jobResponsibilities: [
      "Design and develop scalable and efficient software solutions",
      "Collaborate with cross-functional teams to deliver high-quality products",
      "Participate in code reviews and provide feedback to improve codebase",
      "Stay up-to-date with the latest technologies and industry trends",
    ],
    jobRequirements: [
      "Bachelor's degree in Computer Science or a related field",
      "3+ years of experience in software development",
      "Proficient in JavaScript, React, and Node.js",
      "Strong problem-solving and analytical skills",
      "Excellent communication and collaboration skills",
    ],
    contact: {
      website: "https://www.techcorp.com",
      phone: "+1 (555) 987-6543",
    },
    appliedStudents: [
      { name: "Alice Johnson", dateApplied: "2024-08-15" },
      { name: "Bob Smith", dateApplied: "2024-08-16" },
    ],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  },
];

export default companies;
