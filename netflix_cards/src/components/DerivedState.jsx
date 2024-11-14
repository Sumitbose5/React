import { useState } from "react"

export const DerivedState = () => {
    const [users, setUsers] = useState([
        {name : 'Alice', age : 25},
        {name : 'Bob', age : 30},
        {name : 'Charlie', age : 35}
    ]);

    // To find the total number of users 
    const userCount = users.length;
    // To find the average age of the users
    const avgAge = users.reduce((acc, currVal) => acc + currVal.age, 0) / userCount;

    return(
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index}>
                            {user.name} - {user.age} years old
                        </li>
                    );
                })}
            </ul>
            <p>Total Users : {userCount}</p>
            <p>Users Average Age : {avgAge}</p>
        </div>
    );
}