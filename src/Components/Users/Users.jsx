import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const newUserData = useLoaderData([])
    console.log(newUserData);

    const [users, setUsers] = useState(newUserData)

    const handalDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted succesfully')
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining)
                }

            })

    }

    return (
        <div className="py-[100px] flex flex-col justify-center items-center">
            {
                newUserData.map(userData =>
                    <div key={userData._id}>
                        <p>Name: {userData.name}</p>
                        <p>email: {userData.email}
                            <Link to={`/update/${userData._id}`} className="btn btn-sm bg-transparent border-2 border-cyan-600">U</Link>
                            <Link onClick={() => handalDelete(userData._id)}
                                className="btn btn-sm bg-transparent border-2 border-red-700">X</Link> </p>
                    </div>
                )
            }
        </div>
    );
};

export default Users;