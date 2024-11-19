"use client";

import useWixClient from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}
const LoginPage = () => {
  const wixClient = useWixClient();
  const isLoggedin = async () => {
    const isLoggedIn = await (await wixClient).auth.loggedIn();

    if (isLoggedIn) {
      router.push("/");
    }
  };
  isLoggedin();
  const pathname = usePathname();
  const router = useRouter();

  const [mode, setMode] = useState(MODE.LOGIN);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const formTitle =
    mode === MODE.LOGIN
      ? "Log in"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset Your Password"
      : "Verify Your Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Log in"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : "Verify";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await (
            await wixClient
          ).auth.login({
            email,
            password,
          });
          break;
        case MODE.REGISTER:
          response = await (
            await wixClient
          ).auth.register({
            email,
            password,
            profile: { nickname: userName },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await (
            await wixClient
          ).auth.sendPasswordResetEmail(email, pathname);
          setMessage("password reset email sent. Please check your e-mail");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await (
            await wixClient
          ).auth.processVerification({
            verificationCode: emailCode,
          });
          break;
        default:
          break;
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Succesful! You are being redirected");
          const tokens = await (
            await wixClient
          ).auth.getMemberTokensForDirectLogin(response.data.sessionToken);
       
          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          (await wixClient).auth.setTokens(tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("email already exist");
          } else if (response.errorCode === "resetPassword") {
            setError("you need to reset your password");
          } else {
            setError("something went wrong");
          }
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("your account is pending approval");
        default:
          break;
      }

      console.log(response);
    } catch (error) {
      console.log(error);
      setError("something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  h-[calc(100vh-80px)] flex items-center justify-center   ">
      <form
        className="flex flex-col gap-8 md:w-1/2 max-sm:w-full sm:w-2/3 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold ">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="mega"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        ) : null}

        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700 ">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="mega@gmail.com"
              className="ring-2 ring-gray-300 rounded-md p-4 "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-4 "
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-gray-300 rounded-md p-4 "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer  "
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        <button
          className="bg-pinkypinky text-white p-2 rounded-t-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>
        {error && <div className="text-red-600 ">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className=" text-sm underline cursor-pointer "
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className=" text-sm underline cursor-pointer "
            onClick={() => setMode(MODE.LOGIN)}
          >
            have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className=" text-sm underline cursor-pointer "
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login page
          </div>
        )}
        {message && <div className="text-green-600 text-sm ">{message}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
