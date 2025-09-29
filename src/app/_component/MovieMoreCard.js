import { Header } from "../_features/Header";
export const MovieMoreCard = (props) => {
  const { title, rating, imgSrc, posterSrc, relase_date, tagline } = props;
  return (
    <div className="w-[1440px] h-[72px]">
      <Header />
      <div className="w-[1080px] h-[524px] flex flex-col ">
        <div className="w-[1080px] h-[72px] flex justify-between">
          <div className="flex flex-col w-[211px] h-[72px]">
            <p className="text-[36px] text-black text-700">{title}</p>
            <p className="text-[18px] text-black">{relase_date}</p>
          </div>
          <div className="flex flex-col  w-[83px] h-[72px] justify-center items-center ">
            <p className="w-[83px] h-[16px] text-[12px] text-black">
              {tagline}
            </p>
            <div className="flex w-[83px] h-[48px] ">
              <img src="./star.png" className="w-[23px] h-[22px]" />
              <div className="flex w-[51px] h-[44px] flex-col">
                <p className="text-[12px] text-black">{rating}/10</p>
                <p className="text-[12px] text-[#71717A]">37k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] flex justify-center">
          <div className="w-[1080px] h-[428px] flex gap-10">
            <img src={imgSrc} className="w-[290px] h-[428px] rounded-md" />
            <div className="w-[760px] h-[428px] relative ">
              <img
                src={posterSrc}
                className="w-[760px] h-[428px] rounded-md absolute"
              />
              <div className="w-[174px] h-[40px] flex gap-5">
                <button className="rounded-full w-[40px] h-40px] bg-white flex justify-center items-center">
                  <img className="w-[9px] h-[12px] " src="./vectorClick.png" />
                </button>
                <p className="text-[16px] text-white">Play trailer</p>
                <p className="text-[14px] text-white">2:35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
