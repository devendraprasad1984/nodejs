import React, {useEffect, useState} from "react";


function GetDogs(props) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    // const {error, loading, data} = useQuery(LOAD_USERS);
    const header = {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query: `{getDogs{id,name,age,bread}}`})
    }
    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:6969/graphql', header).then(res => res.json()).then(data => {
            let udesc=data.data.getDogs
            setUsers(udesc)
            setIsLoading(false)
        })
    }, [userCreated]);

    if (isLoading) return <h1>please wait, loading dogs...</h1>
    return <div style={{height:'200px',overflow:'auto'}}>
        <ul>
            {users.map((val, i) => {
                return <li key={'u' + i}>{val.name} {val.age} - {val.bread}</li>;
            })}
        </ul>
    </div>
}

export default GetDogs;
