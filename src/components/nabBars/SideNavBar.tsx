import { SalesMasterIcon1, SalesMasterIcon2 } from "../../assets";
import { categories } from "../../constants/sideBar";
import { useLocation } from "react-router";
import SideBarBtn from "../ui/button/SideBarBtn";
import LogoutBtn from "../ui/button/LogoutBtn";

const SideNavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col justify-between px-6 pt-8 pb-6 bg-dark-2 max-2sm:hidden">
      <div className=" flex w-[240px]  flex-col space-y-4 max-xl:w-[60px]">
        <div className="flex flex-col pb-8">
          <div className="flex items-center space-x-4">
            <img src={SalesMasterIcon1} alt="sales master icon 1" />
            <img
              src={SalesMasterIcon2}
              alt="sales master icon 2 max-2sm:hidden"
              className="mt-2 max-xl:hidden"
            />
          </div>
          <hr className="bg-[#C49494] opacity-30 mt-6" />
        </div>
        {categories.map((category, i) => {
          return (
            <SideBarBtn
              key={i}
              currentLocation={currentPath}
              name={category.name}
              route={category.path}
              icon={category.icon}
            />
          );
        })}
      </div>
      <div>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SideNavBar;
