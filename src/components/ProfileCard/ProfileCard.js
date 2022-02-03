import React from 'react';

import './ProfileCard.css';

const ProfileCard = ({
    name,
    pic,
    caption
}) => {
    return <div className='profilecard'>
        <img src={pic} alt='profile pic' />
        <h3>{name}</h3>
        <p>{caption}</p>
    </div>
}

export default ProfileCard;