import { Link } from "react-router-dom";

type Props = {
  route: string;
  name: string;
  icon: string;
  currentLocation: string;
};
const SideBarBtn = ({ route, name, icon, currentLocation }: Props) => {
  return (
    <Link
      className={` ${
        currentLocation == route
          ? "bg-dark-blue"
          : " hover:opacity-60 hover:duration-300"
      }  text-2xl 
        
       h-[32px] pl-4 rounded-xl flex items-center space-x-6 font-tajwal`}
      to={route}
    >
      <img width={20} src={icon} alt={name} />
      <h1 className="text-[18px] text-white max-xl:hidden">{name}</h1>
    </Link>
  );
};

export default SideBarBtn;
