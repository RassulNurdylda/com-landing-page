import React from "react";

const Support = () => {
  return (
    <div className="bg-style  mt-20">
      <div className="flex flex-col justify-center items-center text-center ">
        <div>
          <p className="text-4xl capitalize mt-20 text-white">Newsletter</p>
          <p className="text-2xl mt-10 w-[60ch] text-gray-s">
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </p>
        </div>
        <form>
          <div className="relative w-[751px] mt-16">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              type="email"
              id="default-email"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
