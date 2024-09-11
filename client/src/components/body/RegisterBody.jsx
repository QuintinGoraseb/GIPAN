import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"



export default function RegisterBody() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(ev) {
        ev.preventDefault();

        try {
            axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration was successful. Now you can login!');
        } catch (e) {
            alert('Registration failed. Please try again later!');
        }

    }

    return(
        <section className="bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/home" className='flex items-center gap-2 justify-center mt-14 mb-5    '>
                    <img className='size-11 sm:size-12' src="/img/logo/logo.png" alt="LOGO" />
                    <h1 className='text-green text-3xl logo font-["merriweather"] '>GIPAN</h1>
                </a>
                <div className="w-full brick bg-header bg-cover bg-bg-no-repeat rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" onSubmit={registerUser}>
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Your name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="full name" required aria-describedby="email-error" value={name} onChange={ev => setName(ev.target.value)}/>
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@company.com" required aria-describedby="email-error" value={email} onChange={ev => setEmail(ev.target.value)}/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" required aria-describedby="email-error" value={password} onChange={ev => setPassword(ev.target.value)}/>
                            </div>
                            <div className="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 outline-none" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-white">I accept the <a className="font-medium text-green hover:underline" href="/terms">Terms & Conditions</a> and <a className="font-medium text-green hover:underline" href="/privacy">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="btn btn-primary hero-btn">
                                    Register an account
                                </button>
                            </div>
                            <p className="text-sm font-light text-white">
                                Already have an account? <a href="/login" className="font-medium text-green hover:underline">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    );
}