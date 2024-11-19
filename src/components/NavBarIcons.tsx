"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CartModel from "./CartModel";
import useWixClient from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import Login from "./Login";
import AuthUrl from "./AuthUrl";
import { useCart } from "@/hooks/useCart";

const NavBarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const wixClient = useWixClient();

  const { cart, counter, getCart } = useCart();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  const isLoggedin = async () => {
    const isLoggedIn = (await wixClient).auth.loggedIn();

    return isLoggedIn;
  };

  let isLoggedIn: boolean;
  isLoggedin().then((data) => (isLoggedIn = data));

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await (
      await wixClient
    ).auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  // const loginRequestData = Login();
  // const authUrl = AuthUrl();

  // const login = () => {
  //   loginRequestData.then((data: any) =>
  //     localStorage.setItem("oAuthRedirectData", JSON.stringify(data))
  //   );

  //   authUrl.then((data) => (window.location.href = data));
  // };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        className=" cursor-pointer"
        alt="profile"
        // onClick={login}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-navlist z-20 bg-white ">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        className=" cursor-pointer"
        alt="notification"
      />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          width={22}
          height={22}
          className=" cursor-pointer"
          alt="cart"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-pinkypinky  rounded-full text-white  text-sm flex items-center justify-center  ">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};

export default NavBarIcons;
