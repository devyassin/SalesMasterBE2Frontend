type Props = {
  image: string;
  description: string;
  number: number;
};
const HeaderLogo = ({ image, description, number }: Props) => {
  return (
    <div className="relative">
      <img src={image} alt={description} />
      <div
        className="absolute text-center top-6 right-10  h-8 w-8 text-sm flex items-center justify-center text-[#000] 
  bg-[#4299e1] border-white border-2 rounded-full  "
      >
        {number}
      </div>
    </div>
  );
};

export default HeaderLogo;
