import React from 'react';
import '../styles/profile.css'

const ProfileView = () => {
    return (
        <div className='profileView'>
            <div className='header'>
                <div className='container_name'>
                    <h4>Name</h4>
                </div>
                <div className='container_exit'>
                    <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
                </div>
            </div>

            <div className='container_info'>
                <div className='image_profile'>
                    <img src="/logo192.png" alt="Logo" />
                </div>
                <div className='data_item'>
                    <div className='info_item'>
                        <div className='text'>Johan David Bolaños</div>
                    </div>
                    <div className='info_item'>
                        <div className='text'><span className='caption'>Email: </span><span className='value'>johanbolanos@gmail.com</span></div>
                    </div>
                    <div className='info_item'>
                        <div className='text'><span className='caption'>Birthdate: </span><span className='value'>27 of April of 2005</span></div>
                    </div>
                    <div className='info_item'>
                        <div className='text'><span className='caption'>Phone: </span><span className='value'>+57 316 4964750</span></div>
                    </div>
                    <div className='info_item'>
                        <div className='text'><span className='caption'>ID: </span><span className='value'>1058667409</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
