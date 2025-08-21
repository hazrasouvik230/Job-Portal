import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

import { toast } from "sonner"

const CreateJob = () => {
    const [title, setTitle] = useState("");
    
    const [role, setRole] = useState([
        { value: 'frontend', label: 'Frontend Developer' },
        { value: 'backend', label: 'Backend Developer' },
        { value: 'designer', label: 'UI/UX Designer' }
    ]);
    const [selectRole, setSelectRole] = useState([]);

    const [location, setLocation] = useState([
        { value: "Bangalore", label: "Bangalore" },
        { value: "Chennai", label: "Chennai" },
        { value: "Delhi", label: "Delhi" },
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Kolkata", label: "Kolkata" }
    ]);
    const [selectLocation, setSelectLocation] = useState([]);

    const [requirement, setRequirement] = useState([
        { value: "MongoDB", label: "MongoDB" },
        { value: "ExpressJS", label: "ExpressJS" },
        { value: "ReactJS", label: "ReactJS" },
        { value: "NodeJS", label: "NodeJS" },
    ]);
    const [selectRequirement, setSelectRequirement] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Title: ${title}, location: ${selectLocation.map(loc => loc.label).join(", ")}`);

        toast.success("Job posted successfully!", {
            description: new Date().toLocaleString(),
            action: {
                label: <span className=" text-yellow-500 hover:text-red-700">Undo</span>,
                onClick: () => console.log("Undo clicked"),
            },
        });

    };


    return (
        <div className='bg-slate-400/50 p-12'>
            <form className='bg-white border border-red-400' onSubmit={handleSubmit}>
                <h1 className='text-center text-2xl font-bold'>Post a job</h1>
                <p>Find the best talent for your company.</p>

                <div className='border'>
                    <label htmlFor="title">Job Title</label><br />
                    <input type="text" name="title" id="title" className='border w-full rounded px-2 py-1' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <CreatableSelect isMulti options={location} value={selectLocation} onChange={(newValue) => setSelectLocation(newValue)} onCreateOption={(inputValue) => {
                        const newOption = { value: inputValue.toLowerCase(), label: inputValue };
                        setLocation((prev) => [...prev, newOption]);
                        setSelectLocation((prev) => [...prev, newOption]);
                    }} />
                </div>

                <div>
                    <label htmlFor="role">Job role</label><br />
                    <CreatableSelect isMulti options={role} value={selectRole} onChange={(newValue) => setSelectRole(newValue)} onCreateOption={(inputValue) => {
                        const newOption = { value: inputValue.toLowerCase(), label: inputValue };
                        setRole((prev) => [...prev, newOption]);
                        setSelectRole((prev) => [...prev, newOption])
                    }} />
                </div>

                <div>
                    <label htmlFor="requirement">Requirements</label>
                    <CreatableSelect isMulti options={requirement} value={selectRequirement} onChange={(newValue) => setSelectRequirement(newValue)} onCreateOption={(inputValue) => {
                        const newOption = { value: inputValue.toLowerCase(), label: inputValue };
                        setRequirement((prev) => [...prev, newOption]);
                        setSelectRequirement((prev) => [...prev, newOption]);
                    }} />
                </div>

                <div className='flex justify-center mt-4 mb-8'>
                    <input type="submit" value="Post Job" className='bg-sky-400/50 px-8 py-2 rounded text-white font-semibold text-xl hover:scale-105 hover:shadow-lg hover:font-bold duration-300 ease-in-out cursor-pointer' />
                </div>
            </form>
        </div>
    )
}

export default CreateJob