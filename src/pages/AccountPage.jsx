import { useState } from "react";
import axios from "axios";
import loginphoto from "../assets/loginphoto.jpg";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import LogginMainPhoto from "../assets/sign.png";

const AccountPage = () => {
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const apiUrl = "https://fakestoreapi.com/auth/login";

    try {
      const { status, data } = await axios.post(apiUrl, userInput);

      if (status === 200) {
        console.log("Login successful", data);
        setLoginSuccess(true);
        setError(null);
      } else {
        handleLoginError(data);
      }
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error) => {
    console.error("There is an error", error);
    setError("Incorrect username or password. Please try again.");
    setLoginSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="lg:flex-shrink-0">
        <img src={LogginMainPhoto} alt="login" className="lg:w-64 xl:w-80" />
      </div>
      <div className="bg-white p-8 shadow-md rounded-md w-full lg:w-96 xl:w-108">
        <h2 className="text-2xl mb-4">Login</h2>
        {!loginSuccess ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Username:</label>
              <input
                type="text"
                name="username"
                className="border w-full p-2 mt-1"
                value={userInput.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password:</label>
              <input
                type="password"
                name="password"
                className="border w-full p-2 mt-1"
                value={userInput.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
            <p className="text-blue-600 mt-4 cursor-pointer underline">Forgot Your Password?</p>
            <p className="text-blue-600 cursor-pointer mt-4 underline">Register here! <ArrowRightIcon/></p>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </>
        ) : (
          <div className="flex items-center flex-col">
            <img src={loginphoto} alt="login" className="w-64 h-64" />
            <p className="text-xl text-green-900 font-medium">Hello, {userInput.username}!</p>
            <h1 className="text-black">You are Logged in successfully!</h1>
            <p className="text-black">You can purchase anything you want</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
