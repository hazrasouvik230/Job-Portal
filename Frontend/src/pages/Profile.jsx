import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Experiences from '@/profile-components/Experiences';
import Projects from '@/profile-components/Projects';
import Educations from '@/profile-components/Educations';

const components = {
    DropdownIndicator: null
};

const createOption = (label) => ({
    label,
    interest: label
});

const Profile = () => {
    const [address, setAddress] = useState("");  

    const [interest, setInterest] = useState([]);
    const [inputInterest, setInputInterest] = useState("");

    const handleInterest = (e) => {
        if(!inputInterest) return;

        switch(e.key) {
            case "Enter":
            case "Tab":
                setInterest((prev) => [...prev, createOption(inputInterest)]);
                setInputInterest("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    const [languages, setLanguages] = useState([]);
    const [inputLanguage, setInputLanguage] = useState("");

    const handleLanguage = (e) => {
        if(!inputLanguage) return;

        switch(e.key) {
            case "Enter":
            case "Tab":
                setLanguages((prev) => [...prev, createOption(inputLanguage)]);
                setInputLanguage("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    const [skills, setSkills] = useState([]);
    const [inputSkill, setInputSkill] = useState("");

    const handleSkill = (e) => {
        if(!inputSkill) return;

        switch(e.key) {
            case "Enter":
            case "Tab":
                setSkills((prev) => [...prev, createOption(inputSkill)]);
                setInputSkill("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(address, skills);
    }

    return (
        <div className='bg-slate-400/50 p-12'>
            <form className='border rounded bg-white p-4 py-12' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Fullname</label><br />
                    <input type="text" name="name" id="name" className='border w-full p-1.5 px-3 rounded' placeholder='hii' />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" className='border w-full p-1.5 px-3 rounded' placeholder='hi' />
                </div>

                <div className="mb-3">
                    <label htmlFor="address">Address</label><br />
                    <input type="text" name="address" id="address" className='border w-full p-1.5 px-3 rounded' placeholder='hi' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name="mobile" id="mobile" className='border w-full p-1.5 px-3 rounded' placeholder='hi' />
                </div>

                <div className="mb-3">
                    <label htmlFor="socialLink">Social media links</label>
                    <input type="text" name="socialLink" id="socialLink" className='border w-full p-1.5 px-3 rounded' placeholder='hi' />
                </div>

                {/* Educations Section */}
                <Educations />

                {/* Skills Section */}
                <div className="mb-3">
                    <label htmlFor="skills">Skills</label>
                    <CreatableSelect components={components} inputValue={inputSkill} isClearable isMulti menuIsOpen={false} onChange={(newValue) => setSkills(newValue)} onInputChange={(newValue) => setInputSkill(newValue)} onKeyDown={handleSkill} value={skills} />
                </div>

                {/* Projects Section */}
                <Projects />

                {/* Experiences Section */}
                <Experiences />

                {/* Languages Sections */}
                <div className="mb-3">
                    <label htmlFor="languages">Languages</label>
                    <CreatableSelect components={components} inputValue={inputLanguage} isClearable isMulti menuIsOpen={false} onChange={(newValue) => setLanguages(newValue)} onInputChange={(newValue) => setInputLanguage(newValue)} onKeyDown={handleLanguage} value={languages} />
                </div>

                {/* Interests Sections */}
                <div className="mb-3">
                    <label htmlFor="interests">Interests</label>
                    <CreatableSelect components={components} inputValue={inputInterest} isClearable isMulti menuIsOpen={false} onChange={(newValue) => setInterest(newValue)} onInputChange={(newValue) => setInputInterest(newValue)} onKeyDown={handleInterest} value={interest} />
                </div>

                <div className='mt-4 flex items-center justify-center'>
                    <input type="submit" value="Save" className='bg-cyan-600/50 text-white px-20 py-2 text-xl font-semibold rounded cursor-pointer hover:scale-110 duration-300 ease-in-out hover:shadow-lg' />
                </div>
            </form>
        </div>
    )
}

export default Profile;