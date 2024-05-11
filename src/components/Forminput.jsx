import React, { useEffect,  useState } from "react";
import { ReactComponent as DeskSvg } from "../images/illustration-sign-up-desktop.svg";
import { ReactComponent as MobSvg } from "../images/illustration-sign-up-mobile.svg";

const style = {
  succes: `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`,
  error: `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`,
};

function Forminput({ onSubmitSuccess }) {
  const [email, setEmail] = useState("");
  const [errorMessage,setErrorMessage]=useState("");

  
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]); // Initial window size

  useEffect(() => {
    const handleResize = () =>
      setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const handleInputChange=(event)=>{
    setEmail(event.target.value);
    setErrorMessage("")
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const isValidEmail = /\S+@\S+\.\S+/.test(email); // Basic email validation

    if (isValidEmail) {
      // Simulate successful form submission (replace with actual submission logic)
      console.log('Email submitted successfully:', email);
      setEmail(''); // Clear email input after successful submission
      onSubmitSuccess(); // Call the prop function to notify App of success
    } else {
      setErrorMessage('Valid email required');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen pb-2">
      <div class="flex sm:flex-row justify-between w-full max-w-2xl p-2  bg-white border border-gray-200 rounded-lg shadow sm:p-2 flex-col-reverse md:p-1 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-3 pt-0 sm:pt-10 px-8 text-justify" onSubmit={handleSubmit}>
          <h5 className="text-4xl font-bold text-gray-900 dark:text-white">
            Stay updated!
          </h5>
          <p className="text-xs font-semibold">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul role="list" className="space-y-3 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-orange-500 dark:text-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-xs font-semibold ms-3">
                Product discovery and building what matters
              </span>
            </li>

            <li class="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-orange-500 dark:text-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-xs font-semibold ms-3">
                Measuring to ensure updates are a success
              </span>
            </li>

            <li className="flex items-center">
              <svg
                class="flex-shrink-0 w-4 h-4 text-orange-500 dark:text-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-xs font-semibold ms-3">And much more!</span>
            </li>
          </ul>

          <div className="pt-3">
            <div className="flex justify-between">
              <label
                for="email"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
              >
                Email adress
              </label>
              <label
                for="email"
                className="mb-2 text-xs font-medium text-red-600 dark:text-white"
              >
                {errorMessage && <div className="error">{errorMessage}</div>}
              </label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className={errorMessage ? style.error:style.succes}
              placeholder="name@company.com"
              value={email}
              onChange={handleInputChange}
              
            />
          </div>

          <button
            type="submit"
            className="hover:bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 w-full text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Subscribe to monthly newsletter
          </button>
        </form>

        <div className="p-3 flex">
          {windowSize[0] > 640 ? (
            <DeskSvg height={400} width={300} />
          ) : (
            <MobSvg width={800} height={500} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Forminput;
