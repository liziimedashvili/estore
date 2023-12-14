import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import TitleIcon from "../components/icons/TitleIcon";
import SearchIcon from "../components/icons/SearchIcon";
import UserIcon from "../components/icons/UserIcon";
import BagIcon from "../components/icons/BagIcon";

export default function Header() {
  const { bagCount, } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products?category=${searchInput}`);
  };
  useEffect(() => {
  }, [bagCount]);

  

  return (
    <div>
      <header className="bg-[#FFF9F3] text-[#3E3E3E] mb-9">
        <div className="custom-container container mx-auto flex flex-col lg:flex-row items-center justify-between p-3 lg:p-6">
          <Link to="/" className="font-medium">
            <TitleIcon />
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-3 mt-3 lg:mt-0">
            <div className="flex flex-row gap-1 items-center">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full lg:w-[700px] lg:p-3 rounded-3xl text-black focus:outline-none"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </div>
              <div>
                <button className="flex items-center" onClick={handleSearch}>
                  <SearchIcon />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 mt-3 lg:mt-0">
              <Link to="/products" className="font-medium">
                Products
              </Link>
              <Link to="/Account">
                <UserIcon />
              </Link>
              <Link to="/Bag" className="flex items-center">
                <BagIcon />
                {bagCount > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-2 ml-1">
                    {bagCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
