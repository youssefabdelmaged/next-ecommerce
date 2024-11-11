import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductsImages from "@/components/ProductsImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductsImages />
      </div>
      {/* text */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6  ">
        <h1 className="text-4xl font-medium  ">Product Name</h1>

        <p className="text-gray-500 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam unde
          sunt laborum, labore minima similique consequatur est temporibus
          veniam nulla, provident nobis perspiciatis consectetur placeat dicta
          sequi illo rem iste facere sapiente doloremque commodi aspernatur
          explicabo? Iusto cumque necessitatibus quas veniam expedita, voluptate
          beatae adipisci itaque molestiae vitae possimus et.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h2 className="text-xl text-gray-500 line-through ">$59</h2>
          <h3 className="font-medium text-2xl">$49</h3>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm ">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
            asperiores vero tempora ab porro. Ratione voluptates architecto
            cupiditate maxime!
          </p>
        </div>
        <div className="text-sm ">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
            asperiores vero tempora ab porro. Ratione voluptates architecto
            cupiditate maxime!
          </p>
        </div>
        <div className="text-sm ">
          <h4 className="font-medium mb-4 ">Title</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
            asperiores vero tempora ab porro. Ratione voluptates architecto
            cupiditate maxime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
