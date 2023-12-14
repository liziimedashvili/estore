/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "./Category";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category: category });
    console.log("Selected Category:", category);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Categories:", categories);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 md:justify-center lg:justify-center xl:justify-center">
      {categories.length === 0 ? (
        <p className="font-bold flex justify-center">Loading...</p>
      ) : (
        categories.map((category) => (
          <Category
            key={category}
            category={category}
            onChooseCategory={handleSelectCategory}
          />
        ))
      )}
    </div>
  );
};

export default Categories;
