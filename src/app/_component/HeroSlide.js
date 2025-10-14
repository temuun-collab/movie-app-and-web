import { useState } from "react";

import { useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const HeroSlide = (props) => {
  const { imgSrc, title, description, rate, button, beforeButton, movieId } =
    props;
  const [showTrailer, setShowTrailer] = useState(false);
  const [playTrailer, setPlayTrailer] = useState([]);

  const apiLink = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const handleClickButton = () => {
    setShowTrailer(!showTrailer);
  };
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();

    setPlayTrailer(jsonData);
  };

  useEffect(() => {
    getData();
  }, [movieId]);

  return (
    <>
      <div className="w-[1440px] h-[600px] max-sm:w-[430px] max-sm:h-[530px] overflow-hidden max-sm:overflow-auto ">
        <div className=" flex gap-5 relative max-sm:flex max-sm:flex-col">
          <img
            src={imgSrc}
            className="w-[1440px] h-[600px] absolute -z-1 max-sm:w-[430px] max-sm:h-[246px] max-sm:relative "
          />
          {showTrailer && (
            <div
              className="flex  ml-60 mt-10 max-sm:w-0 max-sm:h-0 max-sm:ml-5 max-sm:mt-0"
              onClick={() => {
                setShowTrailer(false);
              }}
            >
              <div className="mb-80 max-sm:w-[435px] max-sm:z-10 max-sm:h-[400px] max-sm:flex max-sm:justify-start flex justify-start z-10 absolute">
                <iframe
                  src={
                    playTrailer?.results?.length > 0
                      ? `https://www.youtube.com/embed/${playTrailer.results[0]?.key}`
                      : ""
                  }
                  allowFullScreen
                  className=" w-[997px] h-[551px] max-sm:w-[380px] max-sm:h-[265px]"
                ></iframe>
                <button className="max-sm:w-[25px] max-sm:h-[25px] max-sm:bg-white max-sm:rounded-full max-sm:text-black max-sm:cursor-pointer max-sm:hover:opacity-55 w-[35px] h-[35px] bg-white rounded-full text-black cursor-pointer opacity-55">
                  x
                </button>
              </div>
            </div>
          )}
          <div className="max-sm:h-[20px] max-sm:flex max-sm:justify-between max-sm:items-center max-sm:mt-30 max-sm:w-[430px] absolute">
            <div className="max-sm:mt-0 mt-[320px] ">{beforeButton}</div>
            <div className=" ml-[1400px] max-sm:ml-90 max-sm:mt-0">
              {button}
            </div>
          </div>

          <div className="flex justify-between w-[1350px]  max-sm:w-[430px] max-sm:h-[246px] max-sm:my-0 max-sm:ml-0  max-sm:flex max-sm:justify-center my-[170px] ml-[139px] ">
            <div
              className="flex flex-col gap-[16px] max-sm:relative"
              style={{ zIndex: playTrailer === "" ? "-1" : "0" }}
            >
              <div className="flex flex-col max-sm:flex-row max-sm:w-[350px]  ">
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
                <p className="text-[12px] text-white-400 max-sm:text-black  w-[302px]">
                  {description}
                </p>
              </div>
              <div className="mt-5 max-sm:mt-0">
                <button
                  className="w-[145px] h-[40px] bg-white rounded-md gap-[8px] text-black  justify-center items-center flex hover:scale-[0.9] cursor-pointer max-sm:bg-black max-sm:text-white"
                  onClick={handleClickButton}
                >
                  <img
                    src="./trailer.png"
                    className="w-[9px] h-[12px] max-sm:hidden"
                  />
                  <img
                    src="./trailer1.png"
                    className="max-sm:w-[9px] max-sm:h-[12px] hidden"
                  />
                  Watch trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
