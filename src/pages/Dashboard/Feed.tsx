import { Outlet } from "react-router-dom";
import SideNavBar from "../../components/nabBars/SideNavBar";
import { useAppSelector } from "../../store/store";

const Feed = () => {
  const overlayVisibility: any = useAppSelector(
    (state) => state.modals.overlayVisibility
  );
  return (
    <div className="flex h-screen flex-col bg-[#111] text-white">
      {overlayVisibility && (
        <div className="absolute top-0 bottom-0 left-0 right-0  bg-[#000] z-30 opacity-50" />
      )}
      <div className="flex h-full w-full">
        <SideNavBar />
        <div className="mx-10 my-12 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Feed;
