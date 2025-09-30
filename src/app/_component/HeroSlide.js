export const HeroSlide = (props) => {
  const { imgSrc, title, description, rate, button, beforeButton } = props;
  return (
    <div className="w-[1440px] h-[600px] max-sm:w-[430px] max-sm:h-[246px] ">
      <div className=" flex gap-5 relative max-sm:flex max-sm:flex-col">
        <img
          src={imgSrc}
          className="w-[1440px] h-[600px] absolute -z-1 max-sm:w-[430px] max-sm:h-[246px] max-sm:relative "
        />
        <div className="max-sm:mt-0 max-sm:ml-0 mt-[290px] ml-[20px]">
          {beforeButton}
        </div>
        <div className="flex justify-between w-[1350px]  max-sm:w-[430px] max-sm:h-[246px] max-sm:pt-0  pt-[170px] pl-[139px] max-sm:flex max-sm:justify-center my-[170px] ml-[139px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col max-sm:flex-row max-sm:w-[430px] max-sm:pl-[10px]">
              <div className="max-sm:flex max-sm:flex-col">
                <p className="text-[16px] text-white-600 max-sm:text-black max-sm:text-[14px]">
                  Now Playing:
                </p>
                <h1 className="text-[36px] text-white-800 max-sm:text-black max-sm:text-[24px]">
                  {title}
                </h1>
              </div>
              <div className="flex">
                <img src="./star.png" className="w-[23px] h-[22px]" />
                <p className="text-[18px] text-white-600 max-sm:text-black">
                  {rate}/10
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] text-white-400 max-sm:text-black  w-[302px] h-[80px]">
                {description}
              </p>
            </div>
            <div className="mt-5">
              <button className="w-[145px] h-[40px] bg-white rounded-md gap-[8px] text-black  justify-center items-center flex">
                <img src="./trailer.png" className="w-[9px] h-[12px]" />
                Watch trailer
              </button>
            </div>
          </div>
          <div className="mt-[120px] mb-[30px]">{button}</div>
        </div>
      </div>
    </div>
  );
};
