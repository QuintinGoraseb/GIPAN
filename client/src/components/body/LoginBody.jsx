import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";



export default function LoginBody() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/login', {email, password});
            setUser(data);
            alert('Login Successful!');
            setRedirect(true)
        } catch (e) {
            alert('Login failed!');
        }
    }

    if (redirect) {
        return <Navigate to={'/user'} />
    }

    return(
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/home" className='flex items-center gap-2 justify-center mt-14 mb-5'>
                    <img className='size-11 sm:size-12' src="/img/logo/logo.png" alt="LOGO" />
                    <h1 className='text-green text-3xl logo font-["merriweather"]'>GIPAN</h1>
                </a>
                <div className="w-full brick bg-header rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLoginSubmit}>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@company.com" required aria-describedby="email-error" value={email} onChange={ev => setEmail(ev.target.value)}/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" required aria-describedby="email-error" value={password} onChange={ev => setPassword(ev.target.value)}/>
                            </div>
                            <div className="sm:flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-white">Remember me</label>
                                    </div>
                                </div>
                                <a href="/password" className="text-sm font-medium text-green hover:underline">Forgot password?</a>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="btn btn-primary hero-btn">
                                    <span>Sign-in to account</span>
                                </button>
                            </div>
                            <p className="text-sm font-light text-white">
                                Don’t have an account yet? <a href="/register" className="font-medium text-green hover:underline">Sign up now!</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}