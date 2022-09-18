import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/User.fetch.service";
import User from "../User/User";
import Address from "../Address/Address";
import css from '../UsersPage/Users.module.css'

const Users = () => {
    let [users, setUsers] = useState([]);
    let [address, setAddress] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);

    const addressLift = (addressLift) => {
        if(addressLift.zipcode !== address?.zipcode) {
            setAddress(addressLift)
        }else{
            setAddress(null)
        }
    }

    return (
        <div className={css.wrap}>
            <div>{users.map(user => <User key={user.id} user={user} addressLift={addressLift}/>)}</div>
            <div className={css.address}>{address ? <Address address={address}/> : ''}</div>
        </div>
    );
};

export default Users;