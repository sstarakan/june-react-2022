import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {jsonService} from "../../services";
import {CHOOSE_USER} from "../../reducers";

const UserDetailsPage = () => {
    let user = useSelector(({userReducer}) => userReducer.user);
    const dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        if (!user || user.id !== id) {
            jsonService.getUserById(id).then(({data}) => dispatch({type: CHOOSE_USER, payload: data}))
        }
    }, [id])

    return (
        <div>
            {user && <div>
                <h2>{user.name}</h2>
                <h3>{user.username}</h3>
                <ul>
                    <li>email: {user.email}</li>
                    <li>phone: {user.phone}</li>
                </ul>
            </div>}
        </div>
    );
};

export {UserDetailsPage};