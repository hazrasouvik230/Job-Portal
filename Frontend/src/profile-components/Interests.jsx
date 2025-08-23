import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

const components = {
    DropdownIndicator: null
};

const createOption = (label) => ({
    label,
    value: label
});

const Interests = () => {
    const [inputInterest, setInputInterest] = useState("");
    const [interests, setInterest] = useState([]);

    const handleKeydown = (e) => {
        if(!inputInterest) return;

        switch (e.key) {
            case "Enter":
            case "Tab":
                setInterest((prev) => [...prev, createOption(inputInterest)]);
                setInputInterest("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor="interests">Interests</label>
            <CreatableSelect isMulti isClearable components={components} menuIsOpen={false} inputValue={inputInterest} onChange={(newValue) => setInterest(newValue)} onInputChange={(newValue) => setInputInterest(newValue.trim())} onKeyDown={handleKeydown} value={interests} />
        </div>
    )
};

export default Interests;