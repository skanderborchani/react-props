import React from 'react'

export const Profile = ({FullName,Bio,Profession,image}) => {
    return (
        <div>
            <div className='image'>
            <img src={image} alt="" />
            </div>
            <div className='text'>
            <p>{FullName}</p>
            <p>{Profession}</p>
            <p>{Bio}</p>
            </div>
        </div>
    )
}
