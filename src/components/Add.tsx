"use client";
import { useCart } from "@/hooks/useCart";
import useWixClient from "@/hooks/useWixClient";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string | undefined;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const { addItem, isLoading } = useCart();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium   ">Choose a Quantity</h4>
      <div className="justify-between flex  ">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex  items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl "
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl "
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs ">Product is Out of Stock</div>
          ) : (
            <div className="text-xs ">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left! <br /> {"Don't"}
              {""} miss it
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          className="w-36 rounded-3xl ring-1 ring-pinkypinky text-pinkypinky py-2 px-4 hover:bg-pinkypinky hover:text-white  disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-white   disabled:ring-0   "
          disabled={isLoading}
        > 
        {/* every thing added */}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
