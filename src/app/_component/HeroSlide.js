export const HeroSlide = (props) => {
  const { imgSrc, title, description, rate, button, beforeButton } = props;
  return (
    <div className="w-[1440px] h-[600px]   ">
      <div className=" flex gap-5 relative ">
        <img src={imgSrc} className="w-[1440px] h-[600px] absolute -z-1 " />
        <div style={{ paddingTop: "290px", paddingLeft: "20px" }}>
          {beforeButton}
        </div>
        <div
          className="flex justify-between w-[1350px]"
          style={{ paddingTop: "170px", paddingLeft: "139px" }}
        >
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col">
              <p className="text-[16px] text-white-600">Now Playing:</p>
              <h1 className="text-[36px] text-white-800">{title}</h1>
              <div className="flex">
                <img src="./star.png" className="w-[23px] h-[22px]" />
                <p className="text-[18px] text-white-600">{rate}/10</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] text-white-400">{description}</p>
            </div>
            <button className="w-[145px] h-[40px] bg-white rounded-md gap-[8px] text-black  justify-center items-center flex">
              <img src="./trailer.png" className="w-[9px] h-[12px]" />
              Watch trailer
            </button>
          </div>
          <div style={{ paddingTop: "120px", paddingBottom: "30px" }}>
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};
