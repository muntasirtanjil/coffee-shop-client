import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { singIn } = use(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        singIn(email, password)
            .then(result => {
                console.log(result.user)
                const signInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:5173/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': "application/json",
                    },
                    body: JSON.stringify(signInInfo)
                })
                    .then(result => result.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
            });

    }
    return (
        <div className='flex justify-center my-11'>
            <div>
                <form onSubmit={handleLogin} className="fieldset  justify-center  bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;