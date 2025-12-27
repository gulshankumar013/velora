"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";


const LoginModal = ({ onClose }: { onClose: () => void }) => {
  //login states
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupName, setSignupName] = useState("");
  //signup states
  const [signupEmail, setSignupEmail] = useState("");
  const [signupMobile, setSignupMobile] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);



  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (signupPassword !== signupConfirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    setSignupLoading(true);

    try {
      const res = await axios.post("http://localhost:8081/api/auth/signup", {
        fullName: signupName,
        email: signupEmail,
        mobile: signupMobile,
        password: signupPassword
      });

      toast.success("Signup Successful 🎉");

      // After signup → redirect user back to Login form
      setTimeout(() => {
        setIsSignup(false);
      }, 600);

    } catch (err: any) {
      toast.error(err.response?.data?.message || "Signup failed ❌");
    }

    setSignupLoading(false);
  };


  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8081/api/auth/login", {
        email,
        password,
      });

      toast.success("Login Successful 🎉");

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        window.dispatchEvent(new Event("login-success"));
      }

      setTimeout(() => onClose(), 500);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Invalid username or password ❌");
    }

    setLoading(false);
  };


  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* MODAL WRAPPER */}
      <div className="fixed inset-0 flex items-center justify-center z-50 py-6">

        <div className="bg-white rounded-3xl max-w-3xl w-[90%] flex shadow-2xl overflow-hidden relative">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl z-50"
          >
            ✕
          </button>

          {/* LEFT SIDE – JEWELRY UI (unchanged) */}
          <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-[#fff7ec] border-r border-[#f4e4c3] p-10 relative">

            {/* Floating sparkles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="animate-pulse absolute top-10 left-16 w-3 h-3 bg-white rounded-full opacity-60"></div>
              <div className="animate-pulse absolute top-40 right-20 w-4 h-4 bg-white rounded-full opacity-60"></div>
              <div className="animate-pulse absolute bottom-20 left-24 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="animate-pulse absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full opacity-60"></div>
            </div>

            {/* Jewelry Box */}
            <Image
              src="/login1.png"
              alt="Jewelry Box"
              width={300}
              height={400}
              className="object-contain drop-shadow-lg relative z-10"
            />

            {/* Offer Banner */}
            <div className="relative z-10 bg-gradient-to-b from-[#ffe8bc] to-[#ffe0a1] px-8 py-4 rounded-xl shadow-md mt-4 text-center border border-[#f4c987]">
              <p className="text-sm text-[#7a5a27] font-medium">On your first order get</p>
              <p className="text-3xl font-extrabold text-[#7a4b14]">
                ₹500 <span className="text-xl">off</span>
              </p>
            </div>

            {/* Benefits */}
            <p className="mt-6 text-lg font-medium text-[#7a4b14]">And other benefits</p>

            <div className="flex items-center gap-6 mt-4 text-sm text-[#6d4b2f]">

              <div className="flex items-center gap-2">
                <span>Unlock wishlist</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Personalized shopping</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – LOGIN + SIGNUP SLIDE ANIMATION */}
          <div className="relative w-full md:w-1/2 p-8 overflow-hidden">

            {/* SLIDER WRAPPER */}
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isSignup ? "-translate-x-1/2" : "translate-x-0"
                }`}
              style={{ width: "200%" }}
            >

              {/* LOGIN FORM */}
              <div className="w-1/2 px-6">
                <div className="text-center mb-7">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-400 w-14 h-14 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mt-3">Welcome Back</h3>
                  <p className="text-gray-500 text-sm">Sign in to your account</p>
                </div>

                <form className="space-y-5" onSubmit={handleLogin}>

                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />


                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-3 py-2 border rounded-lg pr-10 text-sm"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="absolute right-3 top-2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <button
                    className="w-40 mx-auto block bg-[#00a874] text-white py-2.5 rounded-lg text-sm hover:bg-[#009060]"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>


                </form>



                {/* Social Login */}
                <div className="relative my-5">
                  <div className="border-t w-2/3 mx-auto"></div>
                  <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-2 text-xs text-gray-500">
                    OR Continue With
                  </span>
                </div>


                <div className="flex gap-4 justify-center mt-4">
                  <button className="flex items-center gap-2 bg-white border px-3 py-1.5 rounded-lg">
                    <Image src="/google.svg" width={15} height={15} alt="Google" />
                  </button>

                  <button className="flex items-center gap-2 bg-white border px-3 py-1.5 rounded-lg">
                    <Image src="/apple.svg" width={15} height={15} alt="Apple" />
                  </button>

                  <button className="flex items-center gap-2 bg-white border px-3 py-1.5 rounded-lg">
                    <Image src="/fb.svg" width={15} height={15} alt="Facebook" />
                  </button>
                </div>

                <p className="text-xs text-center text-gray-600 mt-5">
                  Not a user?{" "}
                  <span
                    className="text-[#00a874] cursor-pointer hover:underline"
                    onClick={() => setIsSignup(true)}
                  >
                    Sign up
                  </span>
                </p>
              </div>

              {/* SIGNUP FORM */}
              <div className="w-1/2 px-10">
                <div className="text-center mb-6">
                  <h3 className="text-1xl font-bold mt-3">Create Account</h3>
                  <p className="text-gray-500 text-sm">Sign up to continue</p>
                </div>

                <form className="space-y-3" onSubmit={handleSignup}>

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    value={signupMobile}
                    onChange={(e) => setSignupMobile(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border rounded-lg text-sm mb-3"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  />

                  <button
                    className="w-full bg-[#00a874] text-white py-2.5 rounded-full text-sm hover:bg-[#009060]"
                    disabled={signupLoading}
                  >
                    {signupLoading ? "Creating account..." : "Create Account"}
                  </button>

                </form>

                <p className="text-xs text-center text-gray-600 mt-5">
                  Already have an account?{" "}
                  <span
                    className="text-[#00a874] cursor-pointer hover:underline"
                    onClick={() => setIsSignup(false)}
                  >
                    Sign In
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default LoginModal;
