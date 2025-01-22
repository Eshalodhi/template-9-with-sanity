import Link from "next/link";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"; 
import { AiFillApple } from "react-icons/ai"; 
import Navmenu from "@/components/navmenu";
import Image from "next/image";
import Footer from "@/components/footer";


const SignInForm = () => {
  return (
    <div>
        <Navmenu/>
        {/* Hero Section */}
                    <section className="relative w-full h-[250px] md:h-[410px] bg-black">
                      <Image
                        src="/unsplash_4ycv3Ky1ZZU.png"
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                        <h1 className="text-2xl md:text-4xl font-bold">Sign In</h1>
                        <p className="text-yellow-500 mt-2 text-sm md:text-base">
                          <a href="/" className="hover:underline">
                            Home
                          </a>{" "}
                          &gt; Sign In
                        </p>
                      </div>
                    </section>
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black text-center mb-6">Sign In</h2>

        {/* Input Fields */}
        <form className="space-y-4">
          {/* Email Field */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <AiOutlineMail  />
            <input
              type="email"
              placeholder="Email"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <AiOutlineLock  />
            <input
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me?
            </label>
          </div>

         {/* Submit Button */}
<div className="space-y-4">

  {/* Sign Up Button */}
  <button
    type="button"
    className="w-full py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition duration-300"
  >
    <Link href="/signup" className="block text-center">
      Sign Up
    </Link>
  </button>
</div>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-3">
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Sign In */}
        <div className="space-y-3">
          {/* Google Sign-In */}
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <FcGoogle size={24}  />
            <span className="text-gray-700">Sign up with Google</span>
          </button>

          {/* Apple Sign-In */}
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <AiFillApple size={24} />
            <span className="text-gray-700">Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
    {/* Support Section */}
    <div className="flex flex-col bg-black lg:flex-row items-center px-12 py-8 justify-between gap-8">
            {/* Left Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h4 className="text-xl text-white font-bold">
                <span className="text-[#ff9f0d]">Still</span> You Need Our Support?
              </h4>
              <p className="text-white text-sm">
                Don’t wait, make a smart & logical quote here. It’s pretty easy.
              </p>
            </div>
    
            {/* Right Input and Button */}
            <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-3 w-full max-w-[250px] lg:max-w-[300px] bg-white text-black border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
              />
              <button className="px-6 py-3 bg-[#ff9f0d] text-black font-bold rounded-r-md hover:bg-[#ffa500] transition duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
          <Footer/>
    </div>
  );
};

export default SignInForm;
