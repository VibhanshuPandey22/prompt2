"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <header>
      <nav className="flex justify-center items-center">
        <div className="w-full flex justify-between items-center max-w-[1300px] my-5 max-sm:my-3 max-sm:mx-3 max-md:mx-7 max-lg:mx-10 lg:mx-14">
          <div className="flex items-center justify-center gap-1">
            <Link href="/">
              <Image
                src="/assets/icons/logo.svg"
                width={50}
                height={50}
                className="max-lg:hidden object-contain"
              />
              <Image
                src="/assets/icons/logo.svg"
                width={40}
                height={40}
                className="lg:hidden max-sm:hidden object-contain"
              />
              <Image
                src="/assets/icons/logo.svg"
                width={30}
                height={30}
                className="sm:hidden"
              />
            </Link>
            <Link href="/">
              <span className="font-satoshi font-extrabold max-sm:text-xl text-2xl lg:text-4xl tracking-tight">
                Prompt2
              </span>
            </Link>
          </div>
          <div>
            {session?.user ? (
              <div className="flex-center gap-4 max-sm:gap-2 max-lg:gap-3">
                <Link href="/create-prompt">
                  <button className="bg-gray-800 text-white hover:bg-black transition-all duration-150 p-2 max-sm:py-[0.45rem] max-sm:px-2 rounded-md">
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-white max-sm:text-sm font-satoshi tracking-tight">
                        Create Prompt
                      </p>
                    </div>
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className=" bg-gray-800 text-white hover:bg-black  transition-all duration-150 p-2 max-sm:py-[0.45rem] max-sm:px-2 rounded-md"
                >
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-white max-sm:text-sm font-satoshi tracking-tight">
                      Sign Out
                    </p>
                  </div>
                </button>
                <div>
                  <Link href="/profile">
                    <Image
                      src={session?.user.image}
                      width={40}
                      height={40}
                      className="rounded-full hover:border-2 border-black transition-all duration-150"
                      alt="profile"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className=" bg-gray-800 text-white hover:bg-black transition-all duration-150 py-2 px-4 max-sm:py-[0.45rem] max-sm:px-2 rounded-md"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <p className="text-white max-sm:text-sm font-satoshi tracking-tight">
                          Sign In
                        </p>
                      </div>
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

//const { data: session } = useSession(); THIS IS SIMPLE DESTRUCTURING

// {
//   data: {
//     user: { /* user info like name, email */ },
//     expires: "2024-01-01T00:00:00.000Z", // session expiration time
//   },
//   status: "authenticated", // or "loading" or "unauthenticated"
// }

//WITHOUT DESTRUCTURING
// const sessionObject = useSession();
// console.log(sessionObject.data);

//WITH DESTRUCTURING
// const { data: session } = useSession();
// console.log(session);
