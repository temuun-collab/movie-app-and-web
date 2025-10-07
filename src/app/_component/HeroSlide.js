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
      <div className="w-[1440px] h-[600px] max-sm:w-[430px] max-sm:h-[246px] overflow-hidden ">
        <div className=" flex gap-5 relative max-sm:flex max-sm:flex-col">
          <img
            src={imgSrc}
            className="w-[1440px] h-[600px] absolute -z-1 max-sm:w-[430px] max-sm:h-[246px] max-sm:relative "
          />
          <div className="max-sm:mt-0 max-sm:ml-0 mt-[290px] ml-[20px]">
            {beforeButton}
          </div>
          <div className="flex justify-between w-[1350px]  max-sm:w-[430px] max-sm:h-[246px] max-sm:my-0 max-sm:ml-0  max-sm:flex max-sm:justify-center my-[170px] ml-[139px]">
            <div
              className="flex flex-col gap-[16px] "
              style={{ zIndex: playTrailer === "" ? "-1" : "0" }}
            >
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
                <button
                  className="w-[145px] h-[40px] bg-white rounded-md gap-[8px] text-black  justify-center items-center flex hover:scale-[0.9] cursor-pointer"
                  onClick={handleClickButton}
                >
                  <img src="./trailer.png" className="w-[9px] h-[12px]" />
                  Watch trailer
                </button>
              </div>
              {showTrailer && (
                <div
                  className="flex w-[100vh] h-[100vh] justify-center absolute -z-1"
                  onClick={() => {
                    setShowTrailer(false);
                  }}
                >
                  <div className="w-[100vh] h-[100vh] mb-80 ml-50">
                    <iframe
                      src={`https://www.youtube.com/embed/${playTrailer.results[0]?.key}`}
                      width="697px"
                      height="401px"
                      allowFullScreen
                      className="absolute z-10"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-[120px] mb-[30px] max-sm:mt-0 max-sm:mb-0 max-sm:mb-50px max-sm:mr-30px">
              {button}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
