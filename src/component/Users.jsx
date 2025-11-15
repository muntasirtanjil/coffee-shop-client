import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (id) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(result => result.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500

                            });
                            const remainigUser = users.filter(user => user._id !== id);
                            setUsers(remainigUser)
                        }
                    })


            }
        });

    }
    return (
        <div className="my-12 py-8 px-4 rounded-2xl w-11/12 mx-auto bg-gray-100">

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-sm md:text-base">
                            <th>SN</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last Sign In</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="text-sm md:text-base">
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-10 w-10 md:h-12 md:w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-xs md:text-sm opacity-50">{user.address}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-xs md:text-base">{user.email}</td>

                                    <td className="text-xs md:text-base">{user.lastSignInTime}</td>

                                    <th className="flex gap-1 md:gap-2">
                                        <button className="btn btn-xs md:btn-sm">V</button>
                                        <button className="btn btn-xs md:btn-sm">E</button>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-xs md:btn-sm">D</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default Users;