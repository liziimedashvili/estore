import TitleIcon from "../components/icons/TitleIcon";
import ArrowIcon from "../components/icons/ArrowRightIcon";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#FFF9F3] text-[#3E3E3E]">
        <div className="custom-container  mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between p-4 lg:p-6">
          <div>
            <TitleIcon />
          </div>
          <div className="text-center lg:text-left lg:ml-10">
            <h1 className="text-orange-900">Yes!</h1>
            <p className="text-orange-800">
              Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Commerce.
            </p>
          </div>
          <div className="mt-3 lg:mt-0 flex flex-col lg:flex-row items-center gap-3">
            <div className="border py-[5px] px-[9px] bg-white flex flex-row items-center gap-2 rounded-[50px]">
              <div>
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className="w-full lg:w-[400px] rounded-md text-black focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row items-center border rounded-[50px] py-[5px] px-[18px] bg-orange-500 gap-1 cursor-pointer">
              <span className="text-white">Subscribe</span>
              <ArrowIcon />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
