import React, { useEffect, useState } from "react";
import axios from 'axios';

const UserList = () => {
    const [listOfUSer, setListOfUser] = useState([])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => setListOfUser(response.data))
    }, []);
    //console.log(listOfUSer)
    return (
        <>
            {listOfUSer.map(user => <p key={user.id} >{user.name}</p>)}
        </>

    )
}

export default UserList