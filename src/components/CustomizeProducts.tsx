"use client";
import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import Add from "./Add";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string | undefined;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSetselectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariant, setSetselectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });

    setSetselectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSetselectedOptions((prev: any) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6 ">
      {productOptions.map((option: any) => (
        <div className="flex flex-col gap-6 " key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice: any) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  key={choice.description}
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300  relative    "
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed " : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    " />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] rotate-45 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-red-800" />
                  )}
                </li>
              ) : (
                <li
                  key={choice.description}
                  className="ring-1 ring-pinkypinky text-pinkypinky rounded-md py-1 px-4 text-sm      "
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#fbcfeb"
                      : "#fff",
                    color: selected || disabled ? "#FFF" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  );
};

export default CustomizeProducts;
