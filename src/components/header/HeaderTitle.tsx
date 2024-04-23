type Props = {
  title: string;
};

const HeaderTitle = ({ title }: Props) => {
  return (
    <h1 className=" text-5xl text-light-white-2">
      {title}
    </h1>
  );
};

export default HeaderTitle;
