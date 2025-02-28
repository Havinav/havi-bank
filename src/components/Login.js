import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className=''>
            <div class="font-[sans-serif]">
                <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                    <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
                        <div>
                            <h2 class="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
                                Welcome Havi Bank
                            </h2>

                            <p class="text-sm mt-12 text-gray-800">Don't have an account <Link class="text-blue-600 font-semibold hover:underline ml-1"><Link to='/new-account'>New Account</Link></Link></p>
                        </div>

                        <form class="max-w-md md:ml-auto w-full">
                            <h3 class="text-gray-800 text-3xl font-extrabold mb-8">
                                Sign in
                            </h3>

                            <div class="space-y-4">
                                <div>
                                    <input name="email" type="email" autocomplete="email" required class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent" placeholder="Email address" />
                                </div>
                                <div>
                                    <input name="password" type="password" autocomplete="current-password" required class="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent" placeholder="Password" />
                                </div>
                                <div class="flex flex-wrap items-center justify-between gap-4">
                                    <div class="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="text-sm">
                                        <a href="jajvascript:void(0);" class="text-blue-600 hover:text-blue-500 font-semibold">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="!mt-8">
                                <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Log in
                                </button>
                            </div>

                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login