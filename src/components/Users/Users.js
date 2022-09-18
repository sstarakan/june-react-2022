import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/users.axios.service";
import User from "../User/User";

const Users = ({getId}) => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getId={getId}/>)}
        </div>
    );
};

export default Users;