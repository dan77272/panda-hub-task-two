import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
import UpperSection from "./components/UpperSection";

export default function Home() {
  return (
    <div>
      <hr className="text-[#DBDBDB]"/>
      <div className="flex">
        <Sidebar/>
        <div className="flex flex-col gap-[42px] mx-[49px] mt-[41px] w-full">
          <UpperSection/>
          <Cards/>
        </div>
      </div>
    </div>
  );
}
