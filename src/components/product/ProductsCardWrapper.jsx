/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import axios from 'axios'; 
import ProductsCard from "./ProductsCard";
import { useSearchParams } from "react-router-dom";

const ProductsCardWrapper = () => {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();

  const categorySearchParams = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          categorySearchParams
            ? `https://fakestoreapi.com/products/category/${categorySearchParams}`
            : 'https://fakestoreapi.com/products'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categorySearchParams]);

  return (
    <div className="custom-container">
      <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12">
        {data &&
          data.map((product) => (
            <ProductsCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
              image={product.image}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsCardWrapper;
