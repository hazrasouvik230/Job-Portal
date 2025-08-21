import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Experiences = () => {
    const [experienceToggle, setExperienceToggle] = useState(false);
    const [experienceTitle, setExperienceTitle] = useState("");
    const [experienceCompany, setExperienceCompany] = useState("");
    const [experienceLocation, setExperienceLocation] = useState("");
    const [experienceSummary, setExperienceSummary] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isCurrent, setIsCurrent] = useState(false);

    const [experiences, setExperiences] = useState([]);

    const handleExperience = (e) => {
        e.preventDefault();
        
        const experienceData = {
            experienceTitle, experienceCompany, experienceLocation, experienceSummary, startDate, endDate, isCurrent
        };
        
        setExperiences((prev) => [...prev, experienceData]);
        
        setExperienceTitle("");
        setExperienceCompany("");
        setExperienceLocation("");
        setExperienceSummary("");
        setStartDate("");
        setEndDate("");
        setIsCurrent(false);
        
        setExperienceToggle(false);
    };
    
    const handleCancel = (e) => {
        e.preventDefault();

        setExperienceTitle("");
        setExperienceCompany("");
        setExperienceLocation("");
        setExperienceSummary("");
        setStartDate("");
        setEndDate("");
        setIsCurrent(false);
        
        setExperienceToggle(false);
    }

    return (
        <div className="mb-3">
            <div className='flex items-center justify-between'>
                <p>Experiences</p>
                <div className='flex gap-2'>
                    <button className='bg-yellow-300 p-1.5 rounded hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-300' onClick={() => setExperienceToggle(true)}><FaPlus /></button>
                    <button className='bg-yellow-300 p-1.5 rounded hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-300'><MdEdit /></button>
                </div>
            </div>

            <div className="mt-4 mb-4 space-y-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md border">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">{exp.experienceTitle}</h3>
                            <p className="text-sm text-gray-600">{exp.experienceCompany} · {exp.experienceLocation}</p>
                            <p className="text-sm mt-1">{exp.experienceSummary}</p>
                        </div>
                        <div className="text-sm text-gray-500">
                            {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.isCurrent ? "Present" : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            {
                experienceToggle && <>
                    <div>
                        <label htmlFor="experience-title">Job title</label>
                        <input type="text" name="experience-title" id="experience-title" className='border w-full px-3 py-1 rounded' value={experienceTitle} onChange={(e) => setExperienceTitle(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="company-name">Company name</label>
                        <input type="text" name="company-name" id="company-name" className='border w-full px-3 py-1 rounded' value={experienceCompany} onChange={(e) => setExperienceCompany(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" className='border w-full px-3 py-1 rounded' value={experienceLocation} onChange={(e) => setExperienceLocation(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="experience-summary">Summary</label>
                        <input type="text" name="experience-summary" id="experience-summary" className='border w-full px-3 py-1 rounded' value={experienceSummary} onChange={(e) => setExperienceSummary(e.target.value)} />
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
                </>
            }
        </div>
    )
}

export default Experiences;