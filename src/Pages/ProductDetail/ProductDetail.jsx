import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoint";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
}

export default ProductDetail;
