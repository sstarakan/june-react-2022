import React from 'react';

const User = ({user:{id, name, address}, addressLift}) => {
    return (
        <div>
            <h5>{id} - {name}</h5>
            <button onClick={()=> addressLift(address) }>Address</button>
        </div>
    );
};

export default User;