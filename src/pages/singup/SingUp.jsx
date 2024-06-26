import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSingUp from "./hook";

const SignUp = () => {
    const navigate = useNavigate();
    const [{ userSingUp }] = useSingUp();

    const value = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    }
    
    const [initialState, setInitialState] = useState(value);

    const handleSingUp = async () => {
        userSingUp(initialState).then((res) => {
            if(res.status === 200) {
                console.log("user created success");
                navigate('/login');
            }
        }).catch((err) => {
            console.log("user not login", err)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="firstname" className="block mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Firstname"
                            value={initialState.firstName}
                            onChange={(e) => setInitialState({ ...initialState, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Lastname"
                            value={initialState.lastName}
                            onChange={(e) => setInitialState({ ...initialState, lastName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email address"
                            value={initialState.email}
                            onChange={(e) => setInitialState({ ...initialState, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            value={initialState.password}
                            onChange={(e) => setInitialState({ ...initialState, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block mb-1">
                            Role of Person
                        </label>
                        <select
                            id="role"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            defaultValue=""
                            onChange={(e) => setInitialState({ ...initialState, role: e.target.value })}
                        >
                            <option value="" disabled>Select a role</option>
                            <option value="Admin">Admin</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleSingUp()}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        disabled={!initialState.firstName || !initialState.lastName || !initialState.email || !initialState.password || !initialState.role}
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline focus:outline-none">
                        User Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
