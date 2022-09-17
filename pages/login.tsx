import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function Login() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>VOD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://avatars.githubusercontent.com/u/4273762?s=400&u=53ef9a998d8e51e3148aa05c66511b104ec9a78d&v=4"
        width={30}
        height={30}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />
      <form
        action=""
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label htmlFor="email" className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label htmlFor="password" className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#810511] py-3 font-semibold"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to VOD?{" "}
          <button type="submit" className="text-white hover:underline">
            Sign up new
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
