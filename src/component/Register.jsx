
import { use } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register } = use(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());


        // console.log(email, password, userProfile)

        register(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)

                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(result => result.json())
                    .then(data => {
                        // console.log(" after create profile ",data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Create profile successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <div className='flex  justify-center my-10'>


            <form onSubmit={handleRegister} className="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className=" text-2xl mb-2 font-semibold text-center rancho">Register Now !</legend>

                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />

                <label className="label">Phone</label>
                <input type="number" name='phone' className="input" placeholder="phone Number" />

                <label className="label">Address</label>
                <input type="text" name='address' className="input" placeholder="address" />

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default Register;