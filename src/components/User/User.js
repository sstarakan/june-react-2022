import React from 'react';

const User = ({user: {id, name}, getId}) => {
    return (
        <div>
            <h4>{id} {name}</h4>
            <button onClick={() => {
                getId(id)
            }}>Posts
            </button>
        </div>
    );
};

export default User;