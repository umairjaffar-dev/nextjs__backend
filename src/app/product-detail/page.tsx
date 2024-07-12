import Product from "@/components/Product";
import Reviews from "@/components/Reviews";
import React, { Suspense } from "react";

// export const fetchCache = "default-cache"

const ProductDetail = async () => {
  const response = await fetch("http://localhost:3001/products", {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  const products = await response.json();
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full px-3 py-2">
      <p>Product Detail</p>
      {products.map((product: any) => {
        return (
          <div className="w-full h-auto bg-gray-200 rounded-md p-2">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
      {/* <Suspense fallback={<p>Loading The Products...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading The Reviews...</p>}>
        <Reviews />
      </Suspense> */}
    </div>
  );
};

export default ProductDetail;
