



export default function PasswordBody() {
    return(
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6 pt-20">
                <a href="/home" className='flex items-center gap-2 justify-center mt-14 mb-5'>
                    <img className='size-11 sm:size-12' src="/img/logo/logo.png" alt="LOGO" />
                    <h1 className='text-green text-3xl logo font-["merriweather"]'>GIPAN</h1>
                </a>
            <div className="bg-header brick  rounded-xl">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                <h1 className="block text-2xl font-bold text-white font-[merriweather]">Forgot password?</h1>
                <p className="mt-2 text-sm text-white">
                    Remember your password? <tb/>
                    <a className="text-green decoration-2 hover:underline font-medium" href="/login">
                     Login here
                    </a>
                </p>
                </div>

                <div className="mt-5">
                <form>
                    <div className="grid gap-y-4">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email address</label>
                        <div class="relative">
                        <input type="email" id="email" name="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" required aria-describedby="email-error"/>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="btn btn-primary hero-btn">
                            <span>Reset password</span>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </main>
    );
}