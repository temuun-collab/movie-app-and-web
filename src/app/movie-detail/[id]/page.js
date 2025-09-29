"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieMoreCard } from "@/app/_component/MovieMoreCard";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState();
  const param = useParams();
  const { id } = param;
  const apiLink = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovieDetail(jsonData.results);
    console.log("this is my data", jsonData);
  };
  console.log("movieDetail", movieDetail);

  useEffect(() => {
    getData();
  }, [id]);
  if (!id) {
    return <div>Something wrong</div>;
  }
  return (
    <div>
      {movieDetail.map((movie, index) => {
        return (
          <MovieMoreCard
            key={index}
            title={movie.title}
            tagline={movie.tagline}
            imgSrc={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            posterSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            rating={movie.rating}
            relase_date={movie.vote_average}
          />
        );
      })}
    </div>
  );
}
