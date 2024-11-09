"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModel from "./CartModel";

const NavBarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  // temp
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        className=" cursor-pointer"
        alt="profile"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-navlist z-20 ">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        className=" cursor-pointer"
        alt="notification"
      />

      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          className=" cursor-pointer"
          alt="cart"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-cartNumber  rounded-full text-white  text-sm flex items-center justify-center  ">
          2
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};

export default NavBarIcons;
