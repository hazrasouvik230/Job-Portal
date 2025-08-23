import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

const components = {
    DropdownIndicator: null
};

const createOption = (label) => ({
    label,
    value: label
});

const Skills = () => {
    const [inputSkill, setInputSkill] = useState("");
    const [skills, setSkills] = useState([]);

    const handleKeydown = (e) => {
        if(!inputSkill) return;

        switch (e.key) {
            case "Enter":
            case "Tab":
                setSkills((prev) => [...prev, createOption(inputSkill)]);
                setInputSkill("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor="skills">Skills</label>
            <CreatableSelect isMulti isClearable components={components} inputValue={inputSkill} menuIsOpen={false} onChange={(newValue) => setSkills(newValue)} onInputChange={(newValue) => setInputSkill(newValue.trim())} onKeyDown={handleKeydown} value={skills} />
        </div>
    )
};

export default Skills;