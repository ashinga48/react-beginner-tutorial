import React from "react";

import ProfileCard from "../ProfileCard/ProfileCard";
import './ProfileList.css'

import users from './ProfileList.json';

const printEachUser = ({
  name,
  caption,
  pic
}) => {
  return <ProfileCard
      name={name}
      pic={pic}
      caption={caption}
    />
}


const ProfileList = () => {
  return (
    <div className="profile-list">

      {users.map( printEachUser )}

    </div>
  );
};

export default ProfileList;
