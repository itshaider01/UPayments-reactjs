interface IProps {}

export const HeaderTop = () => {
  return (
    <div className="bg-white flex flex-row items-center justify-between content-center font-semibold text-xl h-14 rounded-xl px-4 mt-10 mx-20">
      <a href="/">Upayments Store</a>
      <a href="#">Register</a>
    </div>
  );
};

const Header: React.FC<IProps> = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-full w-full">
        <HeaderTop />
      </div>
    </>
  );
};

export default Header;
