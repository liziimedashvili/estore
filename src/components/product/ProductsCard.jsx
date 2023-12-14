/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductsCard = ({ id, title, price, category, description, image }) => {
  return (
    <div>
      <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="flex flex-col w-full max-w-full md:w-[400px] h-[430px] px-4 md:px-0 gap-4 border rounded-md overflow-hidden py-4 shadow-xl transition-transform transform hover:scale-105">
          <div className="mx-auto">
            <img src={image} alt="ProductCardPhoto" className="w-full h-48 md:h-56 object-cover rounded-md"/>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-base md:text-xl text-black font-bold">{title}</h1>
            <h2 className="text-lg md:text-2xl">{price}$</h2>
            <span className="text-gray-500 p-1 rounded-md cursor-pointer">{category}</span>
          </div>
          <div>
            <span className="text-gray-500">{description}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
