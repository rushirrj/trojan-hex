import React from "react";
// import homeimg from "../../../public/home.jpeg"
const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
             Let's Manage Disaster
              <br class="hidden lg:inline-block" />
              With Blockchain
            </h1>
            <p class="mb-8 leading-relaxed">
          We are making a blockchain system for
          emergency disaster management and providing the solution for the same.

            </p>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/home.jpeg"
              // src="/home3.jpeg"
              
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
