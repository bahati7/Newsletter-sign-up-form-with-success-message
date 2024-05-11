import React from "react";
import { ReactComponent as SuccesSvg } from "../images/icon-success.svg";



const Formsuccess = ({ onReturnToForm }) => {

    const handleClick = () => {
        onReturnToForm(); // Call the prop function to notify App
      };

  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className="w-full max-w-80 h-3/5  p-6 bg-white text-left border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <SuccesSvg width={50} height={50} />
        <a href="#">
          <h5 className="mb-2 pt-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thanks for subscribing!
          </h5>
        </a>
        <p className="mb-3 text-xs font-normal text-gray-500 dark:text-gray-400">
          A confirmation email has been sent to <span className="font-bold">ash@loremcompany.com.</span>  Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button
          type="submit"
          onClick={handleClick}
          className=" hover:bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 w-full text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Formsuccess;
