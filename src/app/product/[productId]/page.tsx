import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1>Product {params.productId} Details</h1>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
      </ul>
    </>
  );
};

export default ProductDetails;
