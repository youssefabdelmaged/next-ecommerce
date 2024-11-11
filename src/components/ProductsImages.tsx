"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/7018389/pexels-photo-7018389.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/7195289/pexels-photo-7195289.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/7214336/pexels-photo-7214336.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const ProductsImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="product"
          fill
          sizes="50vw"
          className="object-cover rounded-md  "
        />
      </div>
      <div className="flex justify-between gap-4 mt-8  ">
        {images.map((img, index) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8  cursor-pointer"
            key={img.id}
            onClick={() => setIndex(index)}
          >
            <Image
              src={img.url}
              alt="product"
              fill
              sizes="30vw"
              className="object-cover rounded-md  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsImages;
