import React, { useState } from 'react'
import Experiences from '@/profile-components/Experiences';
import Projects from '@/profile-components/Projects';
import Educations from '@/profile-components/Educations';
import Languages from '@/profile-components/Languages';
import Interests from '@/profile-components/Interests';
import Skills from '@/profile-components/Skills';
import SocialMedias from '@/profile-components/SocialMedias';

const Profile = () => {
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("+91 ");

//     const [photo, setPhoto] = useState(null);
// const [photoPreview, setPhotoPreview] = useState(null);

// const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         setPhoto(file);
//         setPhotoPreview(URL.createObjectURL(file));
//     }
// };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, email: ${email}, Address: ${address}, mobile: ${mobile}`);
    }

    return (
        <div className='bg-slate-400/50 p-12'>
            <form className='border rounded bg-white p-4 py-12' onSubmit={handleSubmit}>
                {/* Name Section */}
                <div className="mb-3">
                    <label htmlFor="name">Fullname</label><br />
                    <input type="text" name="name" id="name" className='border w-full p-1.5 px-3 rounded' placeholder='hii' />
                </div>

                {/* Email Section */}
                <div className="mb-3">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" className='border w-full p-1.5 px-3 rounded' placeholder='hi' />
                </div>

                {/* Mobile Section */}
                <div className="mb-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name="mobile" id="mobile" className='border w-full p-1.5 px-3 rounded' placeholder='hi' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>

                {/* Profile photo upload section */}
                {/* <div className="mb-3">
                    <input type="file" name="photo" id="photo" />
                </div> */}
                {/* Profile photo upload section */}
{/* <div className="mb-6">
    <label htmlFor="profilePhoto" className="block mb-2">Profile Photo</label>
    <input 
        type="file" 
        id="profilePhoto" 
        accept="image/*" 
        onChange={handlePhotoChange} 
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                   file:rounded file:border-0
                   file:text-sm file:font-semibold
                   file:bg-cyan-50 file:text-cyan-700
                   hover:file:bg-cyan-100"
    />
    {photoPreview && (
        <div className="mt-4">
            <img src={photoPreview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full border shadow" />
        </div>
    )}
</div> */}


                {/* Address Section */}
                <div className="mb-3">
                    <label htmlFor="address">Address</label><br />
                    <input type="text" name="address" id="address" className='border w-full p-1.5 px-3 rounded' placeholder='hi' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                {/* Social media Section */}
                <SocialMedias />

                {/* Educations Section */}
                <Educations />

                {/* Skills Section */}
                <Skills />

                {/* Projects Section */}
                <Projects />

                {/* Experiences Section */}
                <Experiences />

                {/* Languages Sections */}
                <Languages />

                {/* Interests Sections */}
                <Interests />

                <div className='mt-4 flex items-center justify-center'>
                    <input type="submit" value="Save" className='bg-cyan-600/50 text-white px-20 py-2 text-xl font-semibold rounded cursor-pointer hover:scale-110 duration-300 ease-in-out hover:shadow-lg' />
                </div>
            </form>
        </div>
    )
}

export default Profile;