"use client";
import { Header } from "../_features/Header";
import { MovieCard } from "../_component/MovieCard";
import { useEffect, useState } from "react";
import { FooterContent } from "../_component/FooterContent";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function UpComing() {
  const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const apiLink = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;

  const handleAddpage = () => {
    setPage(page + 1);
  };
  const handleBeforePage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setUpcomingMoviesData(jsonData.results);
  };

  console.log("upcomingMoviesData", upcomingMoviesData);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <div
        className="w-[100vw] flex flex-col gap-[30px] items-center"
        style={{ paddingTop: "40px" }}
      >
        <div className="flex justify-between w-[1277px] h-[36px]">
          <p className="text-[24px] text-black 0">Upcoming</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className=" w-[1277px] gap-[30px]  grid grid-cols-5">
            {page === 1 &&
              upcomingMoviesData.slice(0, 10).map((movie, index) => {
                return (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    rating={movie.vote_average}
                    movieId={movie.id}
                  />
                );
              })}
            {page === 2 &&
              upcomingMoviesData.slice(10, 20).map((movie, index) => {
                return (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    rating={movie.vote_average}
                    movieId={movie.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <div className="w-[1280px] h-[40px] flex justify-end">
          <div className="w-[382px] h-[40px] flex flex-row gap-[3px]">
            <button
              className="w-[114px] h-[40px] flex justify-center items-center text-[#09090B]"
              onClick={handleBeforePage}
            >
              <img src="./paginationVector" className="w-[5px] h-[5px]" />
              Previous
            </button>
            <div className="w-[172px] h-[40px] flex flex-row gap-[3px]">
              <button
                className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md "
                style={{ border: page == "page===1" ? "1px" : "none" }}
              >
                1
              </button>
              <button
                className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  "
                style={{ border: page == "page===2" ? "1px" : "none" }}
              >
                2
              </button>
              <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">
                ...
              </button>
              <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">
                5
              </button>
            </div>
            <button
              className="w-[88px] h-[40px] flex justify-center items-center text-black"
              onClick={handleAddpage}
              style={{
                border: page == "page" ? "1px" : "none",
                borderColor: page == "page" ? "gray" : "none",
              }}
            >
              Next
              <img src="./paginationNextVector" className="w-[5px] h-[5px]" />
            </button>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
