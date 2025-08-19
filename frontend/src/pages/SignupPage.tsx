import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Earth } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { signup } from "../lib/api";
import axios from "axios";

function SignupPage() {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const {
    mutate: signupMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 md:p-8 sm:p-6"
      data-theme="bumblebee"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* Left side with */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col ">
          <div className="mb-4 flex items-center justify-start gap-2">
            <Earth className="size-9 text-primary " />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              LinkLens
            </span>
          </div>
          {error && (
            <div className="alert alert-error shadow-lg mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {axios.isAxiosError(error)
                  ? error.response?.data?.message
                  : error.message}{" "}
              </div>
            </div>
          )}
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <h1 className="text-xl font-semibold">Create an Account</h1>
                  <p className="text-sm opacity-70">
                    Join LinkLens and start your learning journey now!
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Enter your full name"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered w-full"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">password</span>
                    </label>
                    <input
                      type="password"
                      className="input input-bordered w-full"
                      placeholder="***********"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <p className="text-xs opacity-70 mt-1">
                      password must be at least 6 character
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        required
                      />
                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">
                          terms of service
                        </span>{" "}
                        and{" "}
                        <span className="text-primary hover:underline">
                          privacy policy
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  {isPending ? (
                    <span className="loading loading-spinner loading-sm">
                      Signing up...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
                <div className="text-center mt-4">
                  <span className="text-sm opacity-70">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Signin here
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Right side with image */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i2.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Connect with language partners worldwide
              </h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language
                skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
