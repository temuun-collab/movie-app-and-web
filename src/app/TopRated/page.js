"use client";
import Home from "../page";
import { Header } from "../_Features/Header";
import { MovieCard } from "../_component/MovieCard";
import { useEffect, useState } from "react";
import { FooterContent } from "../_component/FooterContent";
const apiLink =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function TopRated() {
  const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setTopRatedMoviesData(jsonData.results);
  };

  console.log("topRatedMoviesData", topRatedMoviesData);

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
          <p className="text-[24px] text-black 0">Top Rated</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex w-[1277px] gap-[30px] max-sm:hidden">
            {topRatedMoviesData.slice(0, 5).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  rating={movie.rating}
                />
              );
            })}
          </div>
          <div className="flex w-[1277px] gap-[30px] max-sm:hidden">
            {topRatedMoviesData.slice(5, 10).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  rating={movie.rating}
                />
              );
            })}
          </div>
          <div className="flex w-[1277px] gap-[30px] max-sm:hidden">
            {topRatedMoviesData.slice(15, 20).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  rating={movie.rating}
                />
              );
            })}
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
