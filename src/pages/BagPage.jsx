/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../App";
import DeleteIcon from "../components/icons/DeleteIcon";

const BagItemCard = ({ item, increaseBagItemQuantity, decreaseBagItemQuantity }) => {
  const { removeItemFromBag, setBagCount } = useContext(AppContext);

  const handleDeleteItem = () => {
    removeItemFromBag(item.id);
    setBagCount((prevCount) => prevCount - 1); 
  };

  return (
    <div className="custom-container flex mb-4">
      <div className="bg-white p-5 border w-[600px] rounded shadow-md mb-4 flex justify-between">
        <img src={item.image} alt={item.title} className="w-auto h-[200px]" />

        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="text-xl font-bold">{item.title}</p>
          </div>
          <div>
            <p className="text-gray-700">Price: ${item.price}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => decreaseBagItemQuantity(item.id)} className="px-2 py-1 bg-gray-300 text-gray-700 rounded">-</button>
              <p className="text-gray-700">Add to Bag: {item.quantity}</p>
              <button onClick={() => increaseBagItemQuantity(item.id)} className="px-2 py-1 bg-gray-300 text-gray-700 rounded">+</button>
            </div>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <div onClick={handleDeleteItem}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const BagPage = () => {
  const { bagItems, increaseBagItemQuantity, decreaseBagItemQuantity } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center">
      {bagItems.map((item) => (
        <BagItemCard
          key={`${item.id}-${item.title}`}
          item={item}
          increaseBagItemQuantity={increaseBagItemQuantity}
          decreaseBagItemQuantity={decreaseBagItemQuantity}
        />
      ))}
    </div>
  );
};

export default BagPage;
