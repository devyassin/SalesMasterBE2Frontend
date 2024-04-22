import { Outlet } from "react-router-dom";
import SideNavBar from "../../components/nabBars/SideNavBar";

const Feed = () => {
  return (
    <div className="flex h-screen flex-col bg-[#111] text-white">
      <div className="flex h-full">
        <SideNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Feed;
