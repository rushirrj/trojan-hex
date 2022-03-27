import React from "react";
import RecieveSupply from "../components/NGO/RecieveSupply";
import SendSupply from "../components/NGO/SendSupply";

const NGO = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <SendSupply />
            <RecieveSupply />
          </div>
          {/* <button class="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default NGO;
