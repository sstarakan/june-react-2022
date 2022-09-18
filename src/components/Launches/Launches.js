import React, {useEffect, useState} from 'react';
import {getLaunches} from "../../services/spaceX.axios.service";
import Mission from "../Mission/Mission";

const Launches = () => {
    let [missions, setMissions] = useState([]);

    useEffect(() => {
        getLaunches()
            .then(value => setMissions(value.data.filter(mission => mission.launch_year !== 2020)))
        console.log(missions);
    },[])


    return (
        <div>
            {missions.map(mission => <Mission key={mission.launch_date_unix} mission={mission}/>)}
        </div>
    );
};

export default Launches;