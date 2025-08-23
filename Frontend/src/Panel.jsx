import React from 'react'
import { IoBookmark } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Panel = () => {
    const jobSamples = [
        {
        id: 1,
        title: "Software Engineer",
        location: "San Francisco, CA",
        jobType: "Full-time",
        description: "Develop scalable web applications.",
        requirements: ["JavaScript", "Node.js", "MongoDB"],
        salary: "$120,000 - $150,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-10-01")
    },
    {
        id: 2,
        title: "Frontend Developer",
        location: "Remote",
        jobType: "Contract",
        description: "Create stunning UIs using React.",
        requirements: ["React", "CSS", "HTML"],
        salary: "$90,000 - $110,000",
        experienceLevel: "Junior",
        deadline: new Date("2025-09-25")
        },
        {
        id: 3,
        title: "Data Scientist",
        location: "New York, NY",
        jobType: "Full-time",
        description: "Analyze large data sets for insights.",
        requirements: ["Python", "Pandas", "Machine Learning"],
        salary: "$130,000 - $160,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-10-10")
        },
        {
        id: 4,
        title: "Backend Developer",
        location: "Austin, TX",
        jobType: "Part-time",
        description: "Build RESTful APIs.",
        requirements: ["Node.js", "Express", "MongoDB"],
        salary: "$100,000 - $120,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-09-30")
        },
        {
        id: 5,
        title: "Product Manager",
        location: "Seattle, WA",
        jobType: "Full-time",
        description: "Lead product development teams.",
        requirements: ["Agile", "Scrum", "Leadership"],
        salary: "$140,000 - $170,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-10-15")
        },
        {
        id: 6,
        title: "UI/UX Designer",
        location: "Remote",
        jobType: "Contract",
        description: "Design user-centric interfaces.",
        requirements: ["Figma", "Sketch", "Adobe XD"],
        salary: "$80,000 - $100,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-09-28")
        },
        {
        id: 7,
        title: "DevOps Engineer",
        location: "Denver, CO",
        jobType: "Full-time",
        description: "Manage CI/CD pipelines and infrastructure.",
        requirements: ["AWS", "Docker", "Kubernetes"],
        salary: "$120,000 - $140,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-10-05")
        },
        {
        id: 8,
        title: "Mobile App Developer",
        location: "Chicago, IL",
        jobType: "Full-time",
        description: "Develop mobile apps for iOS and Android.",
        requirements: ["React Native", "Flutter", "Java"],
        salary: "$110,000 - $130,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-10-12")
        },
        {
        id: 9,
        title: "QA Engineer",
        location: "Atlanta, GA",
        jobType: "Part-time",
        description: "Write and execute test cases.",
        requirements: ["Selenium", "Mocha", "Chai"],
        salary: "$70,000 - $90,000",
        experienceLevel: "Junior",
        deadline: new Date("2025-09-26")
        },
        {
        id: 10,
        title: "Cybersecurity Analyst",
        location: "Washington, DC",
        jobType: "Full-time",
        description: "Ensure systems are secure.",
        requirements: ["Pen Testing", "Firewalls", "SIEM"],
        salary: "$115,000 - $140,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-10-18")
        },
        {
        id: 11,
        title: "Business Analyst",
        location: "Boston, MA",
        jobType: "Full-time",
        description: "Analyze business needs and processes.",
        requirements: ["SQL", "Excel", "Power BI"],
        salary: "$95,000 - $110,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-10-08")
        },
        {
        id: 12,
        title: "Full Stack Developer",
        location: "Los Angeles, CA",
        jobType: "Contract",
        description: "Work on both frontend and backend.",
        requirements: ["React", "Node.js", "MongoDB"],
        salary: "$100,000 - $130,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-09-29")
        },
        {
        id: 13,
        title: "Technical Writer",
        jobType: "Part-time",
        location: "Remote",
        description: "Create technical documentation.",
        requirements: ["Markdown", "Git", "API Docs"],
        salary: "$60,000 - $80,000",
        experienceLevel: "Junior",
        deadline: new Date("2025-09-22")
        },
        {
        id: 14,
        title: "AI Engineer",
        location: "San Jose, CA",
        jobType: "Freelance",
        description: "Build AI models for NLP and CV.",
        requirements: ["Python", "TensorFlow", "PyTorch"],
        salary: "$150,000 - $180,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-10-20")
        },
        {
        id: 15,
        title: "IT Support Specialist",
        jobType: "Freelance",
        location: "Miami, FL",
        description: "Provide technical support.",
        requirements: ["Windows", "Networking", "Customer Service"],
        salary: "$50,000 - $70,000",
        experienceLevel: "Junior",
        deadline: new Date("2025-09-24")
        },
        {
        id: 16,
        title: "Cloud Engineer",
        location: "Phoenix, AZ",
        jobType: "Full-time",
        description: "Deploy and manage cloud infrastructure.",
        requirements: ["AWS", "Terraform", "Linux"],
        salary: "$125,000 - $145,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-10-03")
        },
        {
        id: 17,
        jobType: "Freelance",
        title: "Database Administrator",
        location: "Dallas, TX",
        description: "Maintain and optimize databases.",
        requirements: ["MySQL", "PostgreSQL", "Backup & Recovery"],
        salary: "$100,000 - $120,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-10-07")
        },
        {
        id: 18,
        title: "Game Developer",
        location: "Los Angeles, CA",
        jobType: "Full-time",
        description: "Develop interactive video games.",
        requirements: ["Unity", "C#", "Game Design"],
        salary: "$110,000 - $140,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-10-11")
        },
        {
        id: 19,
        title: "ML Engineer",
        location: "Palo Alto, CA",
        jobType: "Full-time",
        description: "Build and deploy ML models.",
        requirements: ["Python", "Scikit-learn", "Deep Learning"],
        salary: "$140,000 - $170,000",
        experienceLevel: "Senior",
        deadline: new Date("2025-10-06")
        },
        {
        id: 20,
        title: "Network Engineer",
        location: "Houston, TX",
        jobType: "Full-time",
        description: "Manage and troubleshoot networks.",
        requirements: ["Cisco", "LAN/WAN", "Security"],
        salary: "$100,000 - $120,000",
        experienceLevel: "Mid",
        deadline: new Date("2025-09-27")
        }
    ];

    const navigate = useNavigate();

    const handleJob = (id) => {
        navigate(`/HR-specific-job-details/${id}`);
    };

    return (
        <div className='bg-slate-400/50 p-4 flex flex-wrap items-center justify-center'>
            {
            jobSamples.map(job => {
                return <div key={job.id} className='relative bg-white border max-w-xs rounded-lg m-2 p-4 w-72 cursor-pointer hover:scale-105 duration-300 hover:shadow-xl' onClick={() => {
                    handleJob(job.id)
                    }}>
                    <h1 className='text-xl font-bold mb-1'>{job.title}</h1>
                    
                    <div className='flex gap-2'>
                        <p className='bg-green-500/10 text-green-500 px-2 rounded font-medium'>{job.jobType}</p>
                        <p>{job.salary}</p>
                    </div>
        
                    <p className='font-semibold'>{job.company}</p>
                    <p className='text-xs font-thin'>{job.location}</p>
                </div>
            })
            }
        </div>
    )
}

export default Panel