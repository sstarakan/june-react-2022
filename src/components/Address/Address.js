import React from 'react';

const Address = ({address:{street, suite, city, zipcode}}) => {
    return (
        <div>
            <p>Street: {street} </p>
            <p>Suite: {suite} </p>
            <p>City: {city} </p>
            <p>Zipcode: {zipcode} </p>
        </div>
    );
};

export default Address;