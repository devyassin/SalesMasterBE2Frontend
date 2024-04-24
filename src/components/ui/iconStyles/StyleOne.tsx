const StyleOne = ({ children  }: any) => {
  return (
    <div className="bg-blue-dark-5 w-fit p-2 md:p-3 text-white cursor-pointer rounded-lg shadow-sm hover:opacity-70 duration-150">
      {children }
    </div>
  );
};

export default StyleOne;
