import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../User/User";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";

const Users = () => {
    const dispatch = useDispatch();
    const {users, loading} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {loading && <LoadingComponent/>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};