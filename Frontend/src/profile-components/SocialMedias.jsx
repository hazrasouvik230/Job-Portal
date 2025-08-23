import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

const components = {
    DropdownIndicator: null
};

const createOption = (label) => ({
    label,
    value: label
});

const SocialMedias = () => {
    const [inputtSocialLink, setInputSocialLink] = useState("");
    const [socialLinks, setSocialLinks] = useState([]);

    const handleKeydown = (e) => {
        if(!inputtSocialLink) return;

        switch (e.key) {
            case "Enter":
            case "Tab":
                setSocialLinks((prev) => [...prev, createOption(inputtSocialLink)]);
                setInputSocialLink("");
                e.preventDefault();
                break;
            default: break;
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor="socialLinks">Social Media Links</label>
            <CreatableSelect isMulti isClearable components={components} inputValue={inputtSocialLink} menuIsOpen={false} onChange={(newValue) => setSocialLinks(newValue)} onInputChange={(newValue) => setInputSocialLink(newValue.trim())} onKeyDown={handleKeydown} value={socialLinks} />
        </div>
    )
};

export default SocialMedias;