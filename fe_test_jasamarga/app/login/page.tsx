'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthService from '@/services/authService';
import Image from 'next/image';
import logo from '@/logo.png';
import mainimg from '@/mainImg.jpg';

export default Login;

function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        AuthService.login(username, password).then(
            () => {
                router.push("/");
            },
            (err) => {
                console.log(err.response.data.message);
            },
        );
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {/* <div className="relative bg-white w-full h-[700px] overflow-hidden text-left text-[32px] text-gray-9 font-inter">
                <div className="absolute top-[20px] left-[920px] w-[800px] h-[600px]">
                    <Image
                        className="rounded-sm"
                        alt=""
                        src={mainimg}
                        width={4000}
                        height={6000}
                    />
                </div>
                <div className="absolute top-[153px] left-[190px] w-[500px] h-[462px] text-xl">
                    <div className="absolute top-[0px] right-[100px] w-[500px] h-40 text-[24px]">
                        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[500px] h-40" />
                        <Image
                            className="absolute top-[0px] left-[0px] w-[500px] h-[160.91px]"
                            alt=""
                            src={logo}
                        />
                    </div>
                    <div className="absolute top-[209px] left-[0px] text-black">Username</div>
                    <div className="absolute top-[309px] left-[0px] text-black">Password</div>
                    <input
                        className="pl-1 bg-gray-1 absolute top-[240px] left-[0px] rounded box-border w-[340px] h-12 border-[1px] border-solid border-gray-7 text-black"
                        type="text"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="pl-1 bg-gray-1 absolute top-[340px] left-[0px] rounded box-border w-[340px] h-12 border-[1px] border-solid border-gray-7 text-black"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="cursor-pointer [border:none] py-2.5 px-[30px] bg-gray-8 absolute top-[418px] left-[226px] rounded flex flex-row items-center justify-center bg-gray-800"
                        type='submit'
                    >
                        <div className="relative text-xl font-semibold font-inter text-white text-left">
                            Login
                        </div>
                    </button>
                </div>
            </div> */}

            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <Image
                            className="images_logo"
                            alt=""
                            src={logo}
                        />
                    </div>
                    <div>
                        <div className="relative">

                            <input
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                type="text"
                                value={username}
                                placeholder="Enter email"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            className="w-full rounded-lg mt-4 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-lg bg-gray-700 px-5 mt-4 py-3 text-sm font-medium text-white"
                    >
                        Login
                    </button>
                </div>
                <div className="relative h-80 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <Image
                        alt="Welcome"
                        src={mainimg}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

        </form>
    )
}