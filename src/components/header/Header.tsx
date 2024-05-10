import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";

type Props = {
  image: string;
  title: string;
  description: string;
  number: number;
};

const Header = ({ image, title, description, number }: Props) => {
  return (
    <div className="flex justify-between">
      <HeaderTitle title={title} />
      <HeaderLogo
        image={image}
        description={description}
        number={number}
      />
    </div>
  );
};

export default Header;
