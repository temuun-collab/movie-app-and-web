export const Navbar = (props) => {
  const { src } = props;
  return (
    <div className="flex gap-[8px] w-[90px] h-[20px]">
      <img className="w-20px h-20px " src="./logo.png" />
      <h1 className="text-indigo-700 text-[16px] font-inter">Movie Z</h1>
    </div>
  );
};
