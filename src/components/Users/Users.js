import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {jsonService} from "../../services";
import {LOAD_USERS} from "../../reducers";
import {User} from "../User/User";

const Users = () => {
    let users = useSelector(({userReducer}) => userReducer.users)
    const dispatch = useDispatch();

    useEffect(() => {
        jsonService.getUsers().then(({data}) => dispatch({type: LOAD_USERS, payload: data}))
    }, [])


    return (
        <div>
            {users.length && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};