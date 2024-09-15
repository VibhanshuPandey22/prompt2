"use client";
import { useSession } from "next-auth/react";
import Feed from "@components/Feed";

const Home = () => {
  const { data: session } = useSession();

  return (
    <section>
      <div>
        <div className="sm:px-4 h-full flex justify-center items-center flex-col gap-8 lg:gap-10 max-sm:gap-7 pt-20 pb-16 max-sm:py-12">
          <div>
            <h1 className="text-8xl max-lg:text-7xl max-sm:text-4xl max-sm:px-2 font-bold tracking-tight text-center">
              Discover & Share <br />{" "}
              <span className="text_gradient"> AI Powered </span>
              Prompts
            </h1>
          </div>
          <div>
            <p className="text-gray-500 font-medium tracking-tight text-2xl max-lg:text-xl max-lg:px-10 max-sm:text-lg max-sm:px-8 text-center">
              Generate powerful prompts for your writing, brainstorming, and
              creative projects with our advanced AI technology. Unlock
              limitless ideas, overcome creative blocks, and explore new
              perspectives with prompts tailored to inspire and elevate your
              imagination.
            </p>
          </div>
        </div>
      </div>

      <Feed />
    </section>
  );
};

export default Home;

//  Object.values(providers) converts the providers object into an array of its values.
//  For example :
// const providers = {
//   google: { id: 'google', name: 'Google' },
//   facebook: { id: 'facebook', name: 'Facebook' },
// };

// const providerArray = Object.values(providers);
// providerArray: [{ id: 'google', name: 'Google' }, { id: 'facebook', name: 'Facebook' }]
