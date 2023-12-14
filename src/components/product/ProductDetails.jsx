
import  { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BagIcon from "../icons/BagIcon";
import axios from "axios";
import { AppContext } from "../../App"



const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const { bagItems, setBagItems, setBagCount } = useContext(AppContext);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  const handleClickAddToBag = () => {
    const isItemInBag = bagItems.some((item) => item.id === productDetails.id);

    if (!isItemInBag) {
      setBagItems((prevItems) => [
        ...prevItems,
        {
          id: productDetails.id,
          title: productDetails.title,
          price: productDetails.price,
          image: productDetails.image,
        },
      ]);
      setBagCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="custom-container flex justify-center">
      <div className="flex flex-col justify-center max-w-[500px] border shadow-2xl rounded-lg p-7">
        {productDetails ? (
          <div className="text-center">
            <div className="m-3 cursor-pointer flex flex-row items-center" onClick={handleClickAddToBag}>
              <BagIcon />
              <p className="text-gray-500">Add to bag</p>
            </div>
            <img
              className=" h-auto max-h-[300px] mx-auto w-auto"
              src={productDetails.image}
              alt={productDetails.title}
            />
            <h2 className="font-bold mt-5">{productDetails.title}</h2>
            <h1 className="text-black-600 mt-2 font-bold">
              Price: ${productDetails.price}
            </h1>
            <p className="mt-2">{productDetails.category}</p>
            <p className="mt-2 font-light">{productDetails.description}</p>
          </div>
        ) : (
          <p>Product Not found</p>
        )}
      </div>
    </div>
  );
  
};

export default ProductDetails;


