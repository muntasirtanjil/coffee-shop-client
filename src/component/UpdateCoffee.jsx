import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, photoURL, details, price, taste, supplier, quantity } = useLoaderData();
    const navigate = useNavigate()
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());


        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(result => result.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                navigate('/')
            })
    }
    return (
        <div className=''>

            <div
                className='p-16  bg-[#F4F3F0] w-10/12 my-12 mx-auto '

            >

                <div className="w-10/12 mb-8">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-[#374151] font-semibold hover:text-[#E3B577] transition-colors"
                    >
                        <BsArrowLeft size={20} />
                        <span className='rancho'>Back to Home</span>
                    </Link>
                </div>
                <div className=' space-y-5 text-center mb-10 '>
                    <h1 className='text-3xl font-semibold rancho'>Update Existing Coffee Details</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>


                </div>
                <form onSubmit={handleUpdateCoffee} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <fieldset className="fieldset   rounded-box  p-2">
                            <label className="label">Name</label>
                            <input type="text" name='name' defaultValue={name} className="input w-full" placeholder=" Enter Coffee name" required />
                        </fieldset>
                        <fieldset className="fieldset   rounded-box  p-2">
                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter coffee Quantity" />
                        </fieldset>
                        <fieldset className="fieldset   rounded-box  p-2">
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset   rounded-box  p-2">
                            <label className="label">Taste</label>
                            <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset   rounded-box  p-2">
                            <label className="label">Price</label>
                            <input type="text" name='price' defaultValue={price} className="input w-full" placeholder=" Price per cup " />
                        </fieldset>
                        <fieldset className="fieldset   rounded-box  p-2">
                            <label className="label"> Details</label>
                            <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>

                    </div>
                    <fieldset className="fieldset   rounded-box  p-2">
                        <label className="label"> Photo</label>
                        <input type="text" name='photoURL' defaultValue={photoURL} className="input w-full" placeholder="Enter Photo URL" />
                    </fieldset>

                    <button type='submit' className="btn btn-block bg-[#D2B48C] rounded-box my-5 rancho  p-2">Update Coffee Details</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;