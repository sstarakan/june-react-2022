import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {userActions} from "../../redux";
import {LoadingComponent} from "../../components";

const UserDetailsPage = () => {
    const {user, loading} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (!user || user.id !== id) {
            dispatch(userActions.getUserById({id}))
        }
    }, [id])

    return (
        <div>
            {loading && <LoadingComponent/>}
            {user && <div>
                <h2>{user.name}</h2>
                <h3>{user.username}</h3>
                <ul>
                    <li>email: {user.email}</li>
                    <li>phone: {user.phone}</li>
                </ul>
            </div>
            }
        </div>
    );
};

export {UserDetailsPage};