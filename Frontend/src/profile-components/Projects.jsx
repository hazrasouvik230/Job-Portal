import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Projects = () => {
    const [projectToggle, setProjectToggle] = useState(false);

    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isCurrent, setIsCurrent] = useState(false);
    
    const [projects, setProjects] = useState([]);

    const handleExperience = (e) => {
        e.preventDefault();
        
        const projectData = {
            projectTitle, projectDescription, startDate, endDate, isCurrent
        };
        
        setProjects((prev) => [...prev, projectData]);
        
        setProjectTitle("");
        setProjectDescription("");
        setStartDate("");
        setEndDate("");
        setIsCurrent(false);
        
        setProjectToggle(false);
    };
    
    const handleCancel = (e) => {
        e.preventDefault();
        
        setProjectTitle("");
        setProjectDescription("");
        setStartDate("");
        setEndDate("");
        setIsCurrent(false);
        
        setProjectToggle(false);
    };

    return (
        <div className="mb-3">
            <div className='flex items-center justify-between'>
                <p>Projects</p>
                <div className='flex gap-2'>
                    <button className='bg-yellow-300 p-1.5 rounded hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-300' onClick={() => setProjectToggle(true)}><FaPlus /></button>
                    <button className='bg-yellow-300 p-1.5 rounded hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-300'><MdEdit /></button>
                </div>
            </div>

            <div className="mt-4 mb-4 space-y-4">
                {projects.map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md border">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">{exp.projectTitle}</h3>
                            <p className="text-sm text-gray-600">{exp.projectDescription} · {exp.experienceLocation}</p>
                        </div>

                        <div className="text-sm text-gray-500">
                            {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.isCurrent ? "Present" : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                    </div>
                    </div>
                ))}
            </div>


            {
                projectToggle ? <>
                    <div>
                        <label htmlFor="project-title">Project title</label>
                        <input type="text" name="project-title" id="project-title" className='border w-full px-3 py-1 rounded' value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="project-description">Description</label>
                        <input type="text" name="project-description" id="project-description" className='border w-full px-3 py-1 rounded' value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                    </div>

                    <div className='flex gap-12'>
                        <div>
                            <label htmlFor="start-date">Start date</label>
                            <input type="date" name="start-date" id="start-date" className='border w-full p-1.5 px-3 rounded' placeholder='Enter your course name' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="end-date">End date</label>
                            <input type="date" name="end-date" id="end-date" className='border w-full p-1.5 px-3 rounded' placeholder='Enter your course name' value={endDate} onChange={(e) => setEndDate(e.target.value)} disabled={isCurrent} />
                        </div>
                    </div>

                    <div className='flex gap-1 items-center'>
                        <input type="checkbox" id="currently-working" checked={isCurrent} onChange={(e) => setIsCurrent(e.target.checked)} />
                        <label htmlFor="currently-working">Currently working</label>
                    </div>

                    <div className='flex gap-2 mt-2'>
                        <button className='bg-green-500/80 px-8 py-1 rounded text-white cursor-pointer hover:scale-105 duration-300 ease-in-out hover:font-bold' onClick={handleExperience}>Save</button>
                        <button className='bg-red-500/80 px-8 py-1 rounded text-white cursor-pointer hover:scale-105 duration-300 ease-in-out hover:font-bold' onClick={handleCancel}>Cancel</button>
                    </div>
                </> : <p className='text-xs -mt-4'>Add projects</p>
            }
        </div>
    )
}

export default Projects;