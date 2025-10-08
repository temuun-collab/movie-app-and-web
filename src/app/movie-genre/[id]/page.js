"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Genre } from "@/app/_component/Genre";
import { Header } from "@/app/_features/Header";
import { MovieCard } from "@/app/_component/MovieCard";
import { FooterContent } from "@/app/_component/FooterContent";
const apiLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function MovieGenre(props) {
  const [genres, setGenres] = useState([]);
  const [allGenre, setAllGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [isNextClick, setIsNextClick] = useState(false);
  const [isBackClick, setIsBackClick] = useState(false);

  const param = useParams();
  const { id } = param;
  const apiLinkGenreMore = `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${page}`;
  const getData = async () => {
    const data = await fetch(apiLinkGenreMore, options);
    const jsonData = await data.json();
    setGenres(jsonData.results);
  };

  const getDataGenres = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setAllGenre(jsonData.genres);
  };
  const genreName = allGenre.filter((item) => item.id == id);
  const handleAddpage = () => {
    setPage(page + 1);
    setIsNextClick(true);
    setIsBackClick(false);
  };
  const handleBeforePage = () => {
    if (page === 0) {
      return;
    } else {
      setPage(page - 1);
      setIsNextClick(false);
      setIsBackClick(true);
    }
  };

  useEffect(() => {
    getDataGenres();
  }, []);

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div className="bg-white w-[100vw] flex flex-col gap-5 items-center">
      <Header />
      <div className="flex justify-between w-[1280px] h-[36px] max-sm:w-[400px]">
        <p className="text-[24px] text-black 0">Search Filter</p>
      </div>
      <div className="w-[1280px] flex flex-row">
        <div className="w-[387px] h-[352px] mr-3">
          <div className="flex flex-col">
            <div className="w-[213px] h-[60px]">
              <h3 className="text-[24px] text-black">Genres</h3>
              <p className="text-[16px] text-black">
                See lists of movies by genre
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] mt-3">
            {allGenre?.map((genre, index) => {
              return (
                <Genre key={index} title={genre.name} movieId={genre.id} />
              );
            })}
          </div>
        </div>
        <div className="border-l-2 border-gray-100 h-250 w-3"></div>
        <div className="flex flex-col">
          {genres && (
            <div className="flex flex-col w-[806px]  max-sm:w-[400px] text-black text-[20px] font-bold">
              title in "{genreName[0]?.name}"
            </div>
          )}
          <div className="gap-5 grid grid-cols-4 max-sm:w-[350px] max-sm:grid max-sm:grid-cols-2">
            {page === 1 &&
              genres.slice(0, 12).map((movie, index) => {
                return (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    rating={movie.vote_average}
                    movieId={movie.id}
                    className={"w-[165px] h-[331px]"}
                  />
                );
              })}
            {page === 2 &&
              genres.slice(12, 20).map((movie, index) => {
                return (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    rating={movie.vote_average}
                    movieId={movie.id}
                    className={"w-[165px] h-[331px]"}
                  />
                );
              })}
          </div>
          <div className="mt-5 mb-5 ">
            <div className="w-[806px] h-[40px] flex justify-end">
              <div className="w-[382px] h-[40px] flex flex-row gap-[3px]">
                <button
                  className="w-[114px] h-[40px] flex justify-center items-center text-[#09090B] rounded-md  cursor-pointer"
                  onClick={handleBeforePage}
                  style={{
                    border: isBackClick ? "1px solid black" : "none",
                    color: isBackClick ? "black" : "gray",
                  }}
                >
                  <img src="/paginationVector" className="w-[5px] h-[5px]" />
                  Previous
                </button>
                <div className="w-[172px] h-[40px] flex flex-row gap-[3px]">
                  <button
                    className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  "
                    style={{ border: isBackClick ? "1px solid black" : "none" }}
                  >
                    1
                  </button>
                  <button
                    className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  "
                    style={{ border: isNextClick ? "1px solid black" : "none" }}
                  >
                    2
                  </button>
                  <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md  ">
                    ...
                  </button>
                  <button className="w-[40px] h-[40px] flex justify-center items-center text-black text-[14px] rounded-md ">
                    5
                  </button>
                </div>
                <button
                  className="w-[88px] h-[40px] flex justify-center items-center rounded-md  cursor-pointer"
                  onClick={handleAddpage}
                  style={{
                    border: isNextClick ? "1px solid black" : "none",
                    color: isNextClick ? "black" : "gray",
                  }}
                >
                  Next
                  <img
                    src="./paginationNextVector"
                    className="w-[5px] h-[5px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
