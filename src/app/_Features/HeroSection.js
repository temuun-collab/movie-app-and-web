import { useState, useEffect } from "react";
import { HeroSlide } from "../_component/HeroSlide";

const apiLink =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const HeroSection = (props) => {
  const [slide, setSlide] = useState(1);
  const nextActiveButton = () => {
    setSlide(slide + 1);
  };
  const backActiveButton = () => {
    if (slide === 1) {
      return;
    } else {
      setSlide(slide - 1);
    }
  };
  const [heroSectionData, setHeroSectionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setHeroSectionData(jsonData.results);
    setLoading(false);
  };
  console.log("loading", loading);
  console.log("heroSectionData", heroSectionData);

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div className="w-[1440px] h-[600px] bg-[#F4F4F5] max-sm:w-[430px] max-sm:bg-[#F4F4F5]"></div>
    );
  }

  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[1440px] h-[600px] overflow-scroll  max-sm:w-[430px]">
        <div
          className="w-[4320px] flex gap-5 relative translate-x-[0px] max-sm:w-[1125px]
"
        >
          {slide === 1 &&
            heroSectionData.slice(0, 1).map((movie, index) => {
              return (
                <HeroSlide
                  key={index}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie.title}
                  description={movie.overview}
                  button={
                    <button
                      className="w-[40px] h-[40px] bg-[#F4F4F5] rounded-full flex justify-center items-center max-sm:hidden"
                      onClick={nextActiveButton}
                    >
                      <img
                        src="./HeroVector.png"
                        className="w-[16px] h-[16px]"
                      />
                    </button>
                  }
                  rate={movie.vote_average}
                />
              );
            })}
          {slide === 2 &&
            heroSectionData.slice(1, 2).map((movie, index) => {
              return (
                <HeroSlide
                  key={index}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie.title}
                  description={movie.overview}
                  button={
                    <button
                      className="w-[40px] h-[40px] bg-[#F4F4F5] rounded-full flex justify-center items-center max-sm:hidden"
                      onClick={nextActiveButton}
                    >
                      <img
                        src="./HeroVector.png"
                        className="w-[16px] h-[16px]"
                      />
                    </button>
                  }
                  rate={movie.vote_average}
                  beforeButton={
                    <button
                      className="w-[40px] h-[40px] bg-[#F4F4F5] rounded-full flex justify-center items-center max-sm:hidden"
                      onClick={backActiveButton}
                    >
                      <img
                        src="./HeroVector.png"
                        className="w-[16px] h-[16px]"
                      />
                    </button>
                  }
                />
              );
            })}
          {slide === 3 &&
            heroSectionData.slice(2, 3).map((movie, index) => {
              return (
                <HeroSlide
                  key={index}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie.title}
                  description={movie.overview}
                  beforeButton={
                    <button
                      className="w-[40px] h-[40px] bg-[#F4F4F5] rounded-full flex justify-center items-center max-sm:hidden"
                      onClick={backActiveButton}
                    >
                      <img
                        src="./HeroVector.png"
                        className="w-[16px] h-[16px]"
                      />
                    </button>
                  }
                  rate={movie.vote_average}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
