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
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const nextActiveButton = () => {
    setPage(page + 1);
  };
  const backActiveButton = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };
  const [heroSectionData, setHeroSectionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setHeroSectionData(jsonData.results);
    setTotalPage(jsonData.total_pages);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-[1440px] h-[600px] bg-[#F4F4F5] max-sm:w-[430px] max-sm:bg-[#F4F4F5]"></div>
      </div>
    );
  }

  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[1440px] h-[600px] overflow-scroll  max-sm:w-[430px]">
        <div
          className="w-[4320px] flex gap-5 relative translate-x-[0px] max-sm:w-[1125px]
"
        >
          {page === 1 &&
            heroSectionData.slice(0, 1).map((movie, index) => {
              return (
                <HeroSlide
                  key={index}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie.title}
                  description={movie.overview}
                  button={
                    <button
                      className="w-[40px] h-[40px] hover:scale-[0.9] cursor-pointer bg-[#F4F4F5] rounded-full flex justify-center items-center "
                      onClick={nextActiveButton}
                    >
                      <img src="./HeroVector.png" className="w-[4px] h-[8px]" />
                    </button>
                  }
                  rate={movie.vote_average}
                  movieId={movie.id}
                  beforeButton={
                    <button
                      className="w-[40px] h-[40px] hover:scale-[0.9] cursor-pointer bg-[#F4F4F5] rounded-full flex justify-center items-center "
                      onClick={backActiveButton}
                    >
                      <img src="./backVector.png" className="w-[4px] h-[8px]" />
                    </button>
                  }
                  buttonDot1={
                    <button
                      className="border-1 w-10 rounded-sm text-black"
                      style={{
                        borderColor: isBackClick ? "black" : "none",
                        borderColor: isNextClick ? "black" : "none",
                      }}
                    >
                      {page}
                    </button>
                  }
                />
              );
            })}
          {page === 2 &&
            heroSectionData.slice(1, 2).map((movie, index) => {
              return (
                <HeroSlide
                  key={index}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie.title}
                  description={movie.overview}
                  button={
                    <button
                      className="w-[40px] h-[40px] hover:scale-[0.9] cursor-pointer bg-[#F4F4F5] rounded-full flex justify-center items-center "
                      onClick={nextActiveButton}
                    >
                      <img src="./HeroVector.png" className="w-[4px] h-[8px]" />
                    </button>
                  }
                  rate={movie.vote_average}
                  beforeButton={
                    <button
                      className="w-[40px] h-[40px] hover:scale-[0.9] cursor-pointer bg-[#F4F4F5] rounded-full flex justify-center items-center "
                      onClick={backActiveButton}
                    >
                      <img src="./backVector.png" className="w-[4px] h-[8px]" />
                    </button>
                  }
                  movieId={movie.id}
                />
              );
            })}
          {page === 3 &&
            heroSectionData.slice(2, 3).map((movie, index) => {
              return (
                <HeroSlide
                  key={index}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  title={movie.title}
                  description={movie.overview}
                  beforeButton={
                    <button
                      className="w-[40px] h-[40px] bg-[#F4F4F5] rounded-full flex justify-center items-center hover:scale-[0.9] cursor-pointer"
                      onClick={backActiveButton}
                    >
                      <img src="./backVector.png" className="w-[4px] h-[8px]" />
                    </button>
                  }
                  rate={movie.vote_average}
                  movieId={movie.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
