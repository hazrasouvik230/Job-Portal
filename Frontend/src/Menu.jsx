import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ({ setShowMenu }) => {
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate("/profile");
        setShowMenu(false);
    }
    
    const handleLogout = () => {
        navigate("/");
        setShowMenu(false);
    }

    return (
        <div className="p-2 space-y-2 min-w-[150px] bg-white absolute -mt-5 border shadow-xl rounded-md top-20 right-8">
            <p className="cursor-pointer hover:bg-gray-100 p-2 rounded hover:font-semibold duration-300" onClick={handleProfile}>My Profile</p>
            <p className="cursor-pointer hover:bg-gray-100 p-2 rounded hover:font-semibold duration-300" onClick={handleLogout}>Logout</p>
        </div>
    );
};

export default Menu;
