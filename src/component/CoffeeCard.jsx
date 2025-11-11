import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee)
    const { _id, name, quantity, price, photoURL } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(result => result.json())
                    .then(data => {
                        console.log('after deleted data', data)
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                        }

                    })

            }
        });


    }
    return (
        <div className="bg-[#F5F4F1] w-11/12 mx-auto rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md hover:shadow-lg transition bg-cover bg-center"
        
        >
            {/* Image */}
            <div className="w-full md:w-1/4 flex justify-center">
                <img
                    src={photoURL}
                    alt="Coffee"
                    className="w-28 h-28 object-contain"
                />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left space-y-1">
                <h2 className="text-lg font-semibold">
                    <span className="font-bold">Name :</span> {name}
                </h2>
                <p>
                    <span className="font-bold">Quantity :</span> {quantity}
                </p>
                <p>
                    <span className="font-bold">Price :</span> {price}
                </p>
            </div>

            {/* Action Buttons */}
            <div className=" md:flex-col flex gap-3">
                <Link to={`/coffee/${_id}`}>
                    <button className="btn btn-sm bg-[#D2B48C] border-none hover:bg-[#b89a6d] text-white">
                        <FaEye />
                    </button>
                </Link>

                <button className="btn btn-sm bg-gray-600 border-none hover:bg-gray-700 text-white">
                    <FaEdit />
                </button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-600 border-none hover:bg-red-700 text-white">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
