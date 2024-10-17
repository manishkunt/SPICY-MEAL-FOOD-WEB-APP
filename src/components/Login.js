import React, { useEffect } from "react";

const Login = ({ closeLogin }) => {
  useEffect(() => {
    // Lock the scroll on body when login page is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when login is closed
    };
  }, []);

  const handleCloseLogin = (event) => {
    event.preventDefault(); // Prevent default action
    closeLogin(); // Call the closeLogin function
  };

  return (
    <div className="dark:bg-black min-h-screen">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleCloseLogin} // Close login on clicking outside
      ></div>

      {/* Login container */}
      <div
        className="fixed top-0 right-0 h-min w-[70%] lg:w-[35%] bg-white dark:bg-black dark:border-l
       dark:border-slate-800 z-50 shadow-lg transition-transform transform translate-x-0 lg:h-full rounded-xl
        lg:rounded-none pb-8"
      >
        <div className="px-4 lg:px-10 lg:py-10">
          <div className="font-[sans-serif]">
            <div className="flex flex-col justify-center items-center pt-6">
              <div className="w-full rounded-lg max-w-md">
                <form className="space-y-6">
                  {/* Header */}
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-gray-800 text-2xl lg:text-3xl font-extrabold dark:text-white">
                      Sign in
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 lg:mt-4 leading-relaxed dark:text-slate-300 font-medium">
                      To keep this project as hassle-free as possible, this page
                      basically does nothing✌️. Just click on{" "}
                      <strong>Login</strong>, <strong>Guest</strong>, or
                      anywhere outside this box to close this window and carry
                      on with your day!
                    </p>
                  </div>

                  {/* Username Field */}
                  <div>
                    <label className="text-gray-800 text-sm mb-1 lg:mb-2 block dark:text-white">
                      User name
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="username"
                        type="text"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[rgb(254,80,5)]"
                        placeholder="Enter user name"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="10" cy="7" r="6"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="text-gray-800 text-sm mb-1 lg:mb-2 block dark:text-white">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type="password"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[rgb(254,80,5)]"
                        placeholder="Enter password"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                        viewBox="0 0 128 128"
                      >
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm text-gray-800 dark:text-white"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-[rgb(254,80,5)] hover:underline font-semibold"
                        onClick={handleCloseLogin} // Close login on clicking
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  {/* Login Button */}
                  <div className="!mt-6 lg:!mt-8">
                    <button
                      type="button"
                      className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[rgb(254,80,5)] hover:bg-[#fe1e05] focus:outline-none"
                      onClick={closeLogin}
                    >
                      Log in
                    </button>
                  </div>

                  {/* Register / Guest Link */}
                  <p className="text-sm !mt-6 lg:!mt-8 text-center text-gray-800 dark:text-white">
                    Don't have an account?
                    <a
                      href="#"
                      className="text-[rgb(254,80,5)] font-semibold hover:underline ml-1 whitespace-nowrap"
                      onClick={handleCloseLogin} // Close login on clicking
                    >
                      Login as Guest
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
