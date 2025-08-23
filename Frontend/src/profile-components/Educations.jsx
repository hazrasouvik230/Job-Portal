import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Educations = () => {
    const [educationToggle, setEducationToggle] = useState(false);

    const [instituteName, setInstituteName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [boardName, setBoardName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isCurrent, setIsCurrent] = useState(false);

    const [educations, setEducations] = useState([]);

    const handleEducation = (e) => {
        e.preventDefault();
        
        const educationData = {
            instituteName, courseName, boardName, startDate, endDate, isCurrent
        };
        
        setEducations((prev) => [...prev, educationData]);
        
        setInstituteName("");
        setCourseName("");
        setBoardName("");
        setStartDate("");
        setEndDate("");
        setIsCurrent(false);
        
        setEducationToggle(false);
    };
    
    const handleCancel = (e) => {
        e.preventDefault();
        
        setInstituteName("");
        setCourseName("");
        setBoardName("");
        setStartDate("");
        setEndDate("");
        setIsCurrent(false);
        
        setEducationToggle(false);
    };
    
    return (
        <div className="mb-3">
            <div className='flex items-center justify-between'>
                <p>Educations</p>
                <div className='flex gap-2'>
                    <button className='bg-yellow-300 p-1.5 rounded hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-300' onClick={() => setEducationToggle(true)}><FaPlus /></button>
                    <button className='bg-yellow-300 p-1.5 rounded hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-300'><MdEdit /></button>
                </div>
            </div>

            <div className="mt-4 mb-4 space-y-4">
                {educations.map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md border">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">{exp.instituteName}</h3>
                            <p className="text-sm text-gray-600">{exp.boardName} · {exp.courseName}</p>
                        </div>

                        <div className="text-sm text-gray-500">
                            {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.isCurrent ? "Present" : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            {
                educationToggle ? <>
                    <div>
                        <label htmlFor="institute-name">Institute name</label>
                        <input type="text" name="institute-name" id="institute-name" className='border w-full p-1.5 px-3 rounded' placeholder='Enter your institute name' value={instituteName} onChange={(e) => setInstituteName(e.target.value)}  />
                    </div>

                    <div>
                        <label htmlFor="board-name">Board name</label>
                        <input type="text" name="board-name" id="board-name" className='border w-full p-1.5 px-3 rounded' placeholder='Enter your board name' value={boardName} onChange={(e) => setBoardName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="course-name">Course name</label>
                        <input type="text" name="course-name" id="course-name" className='border w-full p-1.5 px-3 rounded' placeholder='Enter your course name' value={courseName} onChange={(e) => setCourseName(e.target.value)} />
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
                        <button className='bg-green-500/80 px-8 py-1 rounded text-white cursor-pointer hover:scale-105 duration-300 ease-in-out hover:font-bold' onClick={handleEducation}>Save</button>
                        <button className='bg-red-500/80 px-8 py-1 rounded text-white cursor-pointer hover:scale-105 duration-300 ease-in-out hover:font-bold' onClick={handleCancel}>Cancel</button>
                    </div>
                </> : <p className='text-xs -mt-4'>Add education</p>
            }

        </div>
    )
}

export default Educations;