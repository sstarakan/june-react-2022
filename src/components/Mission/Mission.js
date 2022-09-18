import React from 'react';

const Mission = ({mission:{mission_name, launch_year, links}}) => {


    return (
        <div>
            <h3>{mission_name} year: {launch_year}</h3>
            <img src={links.mission_patch_small} alt=""/>
        </div>
    );
};

export default Mission;