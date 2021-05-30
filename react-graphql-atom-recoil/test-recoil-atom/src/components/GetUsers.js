import React, {useEffect, useState} from "react";
// import {useQuery} from "@apollo/client";
import {LOAD_USERS} from "../GraphQL/Queries";
import UserForm from "./Form";

function GetUsers(props) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    // const {error, loading, data} = useQuery(LOAD_USERS);
    const header = {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query: `{getAllUsers{id,firstName,lastName,email}}`})
    }
    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:6969/graphql', header).then(res => res.json()).then(data => {
            let udesc=data.data.getAllUsers
            setUsers(udesc)
            setIsLoading(false)
        })
    }, [userCreated]);

    if (isLoading) return <h1>please wait, loading users...</h1>
    return <div style={{height:'300px',overflow:'auto'}}>
        <UserForm onCreated={(flag) => setUserCreated(flag)}/>
        <ul>
            {users.map((val, i) => {
                return <li key={'u' + i}>{val.firstName} {val.lastName} - {val.email}</li>;
            })}
        </ul>
    </div>
}

export default GetUsers;
