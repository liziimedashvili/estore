import CardPhoto from "../assets/cardphoto.png";
import CardPhoto2 from "../assets/cardphoto2.png";
import CardPhoto3 from "../assets/cardphoto3.png";

export default function HomePageCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <div className="w-full md:w-[400px] flex flex-col md:flex-row gap-5 items-center bg-gray-200 p-4">
        <div className="w-auto h-auto">
          <img src={CardPhoto2} alt="blog2" className="w-full md:w-[250px] h-[150px]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold">A community doing good</h1>
          <span>Commerce is a global online marketplace, where people.</span>
        </div>
      </div>
      <div className="w-full md:w-[400px] flex flex-col md:flex-row gap-5 items-center bg-gray-200 p-4">
        <div className="w-auto h-auto">
          <img src={CardPhoto} alt="blog2" className="w-full md:w-[250px] h-[150px]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold">Support independent creators</h1>
          <span>Just millions of people selling the things they love.</span>
        </div>
      </div>
      <div className="w-full md:w-[400px] flex flex-col md:flex-row gap-5 items-center bg-gray-200 p-4">
        <div className="w-auto h-auto">
          <img src={CardPhoto3} alt="blog2" className="w-full md:w-[250px] h-[150px]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold">Peace of mind</h1>
          <span>Privacy is the highest priority of our dedicated team.</span>
        </div>
      </div>
    </div>
  );
}
