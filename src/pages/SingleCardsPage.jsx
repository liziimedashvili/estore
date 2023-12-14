import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const { cardId } = useParams();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${cardId}`
        );
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cardId]);

  return (
    <div className="custom-container">
      <div className="flex justify-center h-screen">
      
          <div className="m-auto text-center w-[500px]">
            <img className="w-80 h-80 m-auto" src={cardData.image}></img>
            <h2 className="font-bold mt-5">{cardData.title}</h2>
            <p className="text-green-600 mt-2">Price: ${cardData.price}</p>
            <p className="mt-2">{cardData.category}</p>
            <p className="mt-2 font-light">{cardData.description}</p>
          </div>
      
      </div>
    </div>
  );
};

export default ProductCard;
