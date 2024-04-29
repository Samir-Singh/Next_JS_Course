import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>Product {params.productId} Details</h1>;
};

export default ProductDetails;
