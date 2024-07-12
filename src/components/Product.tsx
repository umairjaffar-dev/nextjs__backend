import { resolve } from "path";
import React from "react";

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
};

export default Product;
