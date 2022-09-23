import Head from "next/head";
import Link from "next/link";
import Membership from "../components/Membership";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";

function Account() {
  const imgSrc =
    "https://avatars.githubusercontent.com/u/4273762?s=400&u=53ef9a998d8e51e3148aa05c66511b104ec9a78d&v=4";
  const { user } = useAuth();
  const subscription = useSubscription(user);
  return (
    <div>
      <Head>
        <title>Account Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-[#141414]">
        <Link href="/">
          <img
            src={imgSrc}
            width={30}
            height={30}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src={imgSrc}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer rounded"
          />
        </Link>
      </header>
      <main className="pt-24">
        <div>
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src={imgSrc} alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Mmeber since {subscription?.created}
            </p>
          </div>
        </div>
        <Membership />
        <div>
          <h4>Plan Details</h4>
          <div></div>
        </div>
      </main>
    </div>
  );
}

export default Account;
