import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

const components = {
    DropdownIndicator: null
};

const createOption = (label) => ({
    label,
    value: label
});

const Languages = () => {
    const [inputLanguage, setInputLanguage] = useState("");
    const [languages, setLanguages] = useState([]);

    const handleKeydown = (e) => {
        if(!inputLanguage) return;

        switch (e.key) {
            case "Enter":
            case "Tab":
                setLanguages((prev) => [...prev, createOption(inputLanguage)]);
                setInputLanguage("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor="languages">Languages</label>
            <CreatableSelect isMulti isClearable components={components} inputValue={inputLanguage} menuIsOpen={false} onChange={(newValue) => setLanguages(newValue)} onInputChange={(newValue) => setInputLanguage(newValue.trim())} onKeyDown={handleKeydown} value={languages} />
        </div>
    )
};

export default Languages;