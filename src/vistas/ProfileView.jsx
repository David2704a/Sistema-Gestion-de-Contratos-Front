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
                        <div className='icon'><i class="fa-solid fa-user"></i></div>
                        <div className='text'>Username</div>
                    </div>
                    <div className='info_item'>
                        <div className='icon'><i class="fa-solid fa-calendar-alt"></i></div>
                        <div className='text'>Date of Birth</div>
                    </div>
                    <div className='info_item'>
                        <div className='icon'><i class="fa-solid fa-map-marker-alt"></i></div>
                        <div className='text'>Location</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
