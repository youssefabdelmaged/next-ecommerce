"use client";

import { useCart } from "@/hooks/useCart";
import useWixClient from "@/hooks/useWixClient";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { cart, currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
const CartModel = () => {
  // temp
  // const cartItems = true;

  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCart();
  console.log(cart);

  const handleCheckout = async () => {
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });
      const { redirectSession } = await redirects.createRedirectSession({
        ecomCheckout: { checkoutId: checkout.checkoutId },
        callbacks: {
          postFlowUrl: window.location.origin,
          thankYouPageUrl: `${window.location.origin}/succes`,
        },
      });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-max  absolute p-4 rounded-md shadow-navlist bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart?.lineItems ? (
        <div>cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* list */}
          <div className="flex flex-col gap-8 ">
            {/* item */}
            {cart.lineItems?.map((item: any) => (
              <div className="flex gap-4 " key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md "
                  />
                )}

                <div className="flex flex-col justify-between w-full  ">
                  {/* Top */}
                  <div>
                    {/* Title */}
                    <div className="flex items-center justify-between gap-8   ">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className=" p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500   ">
                            {item.quantity} x{" "}
                          </div>
                        )}{" "}
                        EGP {item.price?.amount}
                      </div>
                    </div>
                    {/* Desc */}
                    <div className="text-sm text-gray-500   ">
                      {item.availability?.status}
                    </div>
                  </div>
                  {/* Bottom */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 ">Qty.{item.quantity}</span>
                    <span
                      className="text-blue-500 cursor-pointer"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              {cart?.subtotal && <span>EGP {cart?.subtotal?.amount}</span>}
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">
              Shipping and taxes calculated at checkout
            </p>
            <div className=" flex justify-between text-sm ">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300   ">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
                onClick={handleCheckout}
              >
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
