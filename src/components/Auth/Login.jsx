import { useState } from "react";
import Alert from "../Alert/Alert";
import loginImage from "../../assets/logo/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleAsyncError } from "../../utils/Helper/handleAsyncError";
//import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utils";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, type } = useSelector((state) => state.error);

  const handleOtpLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = new FormData(event.target);
    const { email, password } = Object.fromEntries(response.entries());
    // both fields should not be empty
    if (email != "" && password != "") {
      // checking if email is vaild or not
      const isEmailValid = isValidEmail(email);
      if (!isEmailValid)
        return handleAsyncError(dispatch, "Invalid Email & Password");
    }
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div className="min-h-screen login relative">
      {/* alert or error showing  */}
      {message && <Alert error={message} errorType={type} />}
      {/* login  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-gradient-to-t from-theme-dark from-20% via-theme via-40% to-theme-seconday-dark to-90% rounded-bl-[18rem] lg:bg-none">
        {/* login image section */}
        <div className="bg-gradient-to-t from-theme-seconday-dark from-20% via-theme via-40% to-theme-dark to-90% min-h-screen hidden lg:block">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={loginImage}
              className="w-[80%] mx-auto mb-5 drop-shadow-2xl"
              alt="LOGO"
            />
            {/* <h1 className="text-6xl text-center uppercase font-bold text-gray-100 mb-1">
              Sure Success
            </h1>
            <p className="text-gray-200 uppercase font-semibold text-2xl">
              App Installation Ads
            </p> */}
          </div>
        </div>
        {/* login from section  */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-[90%] lg:w-[65%]">
            {/* <div className="flex flex-col items-center justify-center lg:hidden mb-5">
              <img
                src={webLogo}
                className="w-32 mx-auto mb-5 drop-shadow-2xl"
                alt="LOGO"
              />
            </div> */}
            <div className="mb-8">
              <h1 className="text-4xl font-black uppercase text-gray-100 lg:text-black mb-2">
                Welcome to <span className="lg:text-theme">Rento</span>
              </h1>
              <p className="capitalize text-gray-200 lg:text-gray-400">
                Welcome back! Please enter your credentials to continue.
              </p>
            </div>
            <div>
              <form className="w-full mx-auto mb-8" onSubmit={handleOtpLogin}>
                <div className="mb-5">
                  <div className="relative mt-2 text-gray-100 lg:text-gray-500">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="stroke-gray-100 lg:stroke-gray-500"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="someone@example.com"
                      name="email"
                      id="email"
                      className="w-full pl-[3.4rem] pr-4 py-3.5 appearance-none bg-transparent outline-none border border-gray-100 lg:border-gray-300 focus:border-text-gray-200 lg:focus:border-theme lg:focus:text-gray-800 text-gray-100 lg:text-gray-800 outline-none rounded-lg placeholder-gray-100 lg:placeholder-gray-400"
                      onChange={(e) => e.target.value}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative mt-2 text-gray-100 lg:text-gray-500">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="stroke-gray-100 lg:stroke-gray-500"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <input
                      type="password"
                      placeholder="************"
                      name="password"
                      id="password"
                      className="w-full pl-[3.4rem] pr-4 py-3.5 appearance-none bg-transparent outline-none border border-gray-100 lg:border-gray-300 focus:border-text-gray-200 lg:focus:border-theme lg:focus:text-gray-800 text-gray-100 lg:text-gray-800 outline-none rounded-lg placeholder-gray-100 lg:placeholder-gray-400"
                      onChange={(e) => e.target.value}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-theme-dark lg:bg-theme py-3.5 px-6 rounded-lg text-white uppercase hover:bg-theme-dark transition duration-200 ease-in-out disabled:bg-gray-500 outline-none"
                  disabled={loading}
                >
                  {/* {loading ? <Spinner message={"Signing In.."} /> : "Sign In"} */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
