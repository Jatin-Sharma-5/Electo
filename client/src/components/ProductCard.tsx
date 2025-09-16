"use client"
import React, { useState } from 'react'
import { ProductType } from "@/types";
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }: { product: ProductType }) => {
    const [productTypes, setProductTypes] = useState({
        size: product.sizes[0], 
        color: product.colors[0],
    });

    const handleProductType = ({
        type,
        value,
    }: {
        type: "size" | "color";
        value: string;
    }) => {
        setProductTypes((prev) => ({
            ...prev,
            [type]: value,
        }));
    };
      
  return (
      <div className="shadow-lg rounded-lg overflow-hidden">
        {/* IMAGES */}
          <Link href={`/products/${product.id}`}>
              <div className="relative aspect-[2/3]">
                  <Image 
                      src={product.images[product.colors[1]]}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-all duration-300"
                  />
              </div>
          </Link>
            {/* PRODUCT DETAILS */}
            <div className="flex flex-col gap-4 p-4">
              <h1 className="font-medium">{product.name}</h1>
              <p className="text-sm text-gray-500">{product.shortDescription}</p>

            {/* PRODUCTS TYPES */}
              <div className='flex items-center gap-4 text-xs'>

                {/* SIZE */}
                  <div className="flex flex-col gap-1">
                      <span className="text-gray-500">Size</span>
                      <select
                          name="size"
                          id="size"
                          className="ring ring-gray-300 rounded-md px-2 py-1"
                          onChange={(e) =>
                              handleProductType({ type: "size", value: e.target.value })
                          }
                      >
                          {product.sizes.map((size) => (
                              <option key={size} value={size}>
                                  {size.toUpperCase()}
                              </option>
                          ))}
                      </select>


                    {/* Colors */}
                      <div className="flex flex-col gap-1">
                
                </div>
            </div>
        </div>
        </div>
       </div>
  )
}

export default ProductCard