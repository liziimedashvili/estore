/* eslint-disable react/prop-types */
export const Category = ({ category, onChooseCategory }) => {
  return (
    <div
      className="items-center justify-center flex cursor-pointer mb-3 mt-6"
      onClick={() => onChooseCategory(category)}
    >
      <h2 className="border p-2 rounded-2xl hover:bg-orange-500 hover:text-white border-gray-400">{category}</h2>
    </div>
  );
};

