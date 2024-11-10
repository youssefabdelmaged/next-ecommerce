import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (

      <div className="mt-12 flex gap-x-8 gap-y-16  gap-16 flex-wrap  ">
        <Link
          href="/test"
          className="w-full sm:w-[45%] lg:w-[23%] flex flex-col gap-4"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
            />
            <Image
              src="https://media.istockphoto.com/id/1338927733/photo/light-fabric-bag-isolated-on-a-white-background-with-a-clipping-path.jpg?s=612x612&w=0&k=20&c=ANUiDJAuxWsblXKn-TN8cBBvSCcXaQsK2l_sauxf06s="
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500 ">My Description</div>
          <button className="rounded-2xl ring-1 ring-pinkypinky text-pinkypinky py-2 px-4 text-xs hover:bg-pinkypinky hover:text-white w-max ">
            Add to Cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full sm:w-[45%] lg:w-[23%] flex flex-col gap-4"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
            />
            <Image
              src="https://media.istockphoto.com/id/1338927733/photo/light-fabric-bag-isolated-on-a-white-background-with-a-clipping-path.jpg?s=612x612&w=0&k=20&c=ANUiDJAuxWsblXKn-TN8cBBvSCcXaQsK2l_sauxf06s="
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500 ">My Description</div>
          <button className="rounded-2xl ring-1 ring-pinkypinky text-pinkypinky py-2 px-4 text-xs hover:bg-pinkypinky hover:text-white w-max ">
            Add to Cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full sm:w-[45%] lg:w-[23%] flex flex-col gap-4"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
            />
            <Image
              src="https://media.istockphoto.com/id/1338927733/photo/light-fabric-bag-isolated-on-a-white-background-with-a-clipping-path.jpg?s=612x612&w=0&k=20&c=ANUiDJAuxWsblXKn-TN8cBBvSCcXaQsK2l_sauxf06s="
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500 ">My Description</div>
          <button className="rounded-2xl ring-1 ring-pinkypinky text-pinkypinky py-2 px-4 text-xs hover:bg-pinkypinky hover:text-white w-max ">
            Add to Cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full sm:w-[45%] lg:w-[23%] flex flex-col gap-4"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
            />
            <Image
              src="https://media.istockphoto.com/id/1338927733/photo/light-fabric-bag-isolated-on-a-white-background-with-a-clipping-path.jpg?s=612x612&w=0&k=20&c=ANUiDJAuxWsblXKn-TN8cBBvSCcXaQsK2l_sauxf06s="
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500 ">My Description</div>
          <button className="rounded-2xl ring-1 ring-pinkypinky text-pinkypinky py-2 px-4 text-xs hover:bg-pinkypinky hover:text-white w-max ">
            Add to Cart
          </button>
        </Link>
      </div>
 
  );
};

export default ProductList;
