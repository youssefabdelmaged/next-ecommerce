"use client";

import Image from "next/image";

const CartModel = () => {
  // temp
  const cartItems = true;
  return (
    <div className=" w-max  absolute p-4 rounded-md shadow-navlist bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* list */}
          <div className="flex flex-col gap-8 ">
            {/* item */}
            <div className="flex gap-4 ">
              <Image
                src="https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md "
              />
              <div className="flex flex-col justify-between w-full  ">
                {/* Top */}
                <div>
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8   ">
                    <h3 className="font-semibold   ">Product Name</h3>
                    <div className=" p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm text-gray-500   ">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 ">Qty.2</span>
                  <span className="text-blue-500 ">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">
              Shipping and taxes calculated at checkout
            </p>
            <div className=" flex justify-between text-sm ">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300   ">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
