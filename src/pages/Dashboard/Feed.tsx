import { Outlet, useLocation } from "react-router-dom";
import SideNavBar from "../../components/nabBars/SideNavBar";
import { useAppSelector } from "../../store/store";

const Feed = () => {
  const overlayVisibility: any = useAppSelector(
    (state) => state.modals.overlayVisibility
  );
  const location = useLocation();
  const currentPath = location.pathname;
  const isFacturationPath = /dashboard+/.test(currentPath);
  // const isFacturationPath = /facturation\/\d+/.test(currentPath);
  return (
    <div className="flex h-screen flex-col bg-[#111] text-white overflow-y-hidden ">
      {overlayVisibility && (
        <div className="absolute top-0 bottom-0 left-0 right-0  bg-[#000] z-30 opacity-50" />
      )}
      <div className="flex h-full w-full  ">
        <SideNavBar />
        <div
          className={`mx-10 ${isFacturationPath ? "my-4 mb-2" : "my-12"}  w-full`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Feed;
