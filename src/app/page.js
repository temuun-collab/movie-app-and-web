"use client";
import "./index.css";
import { FooterContent } from "./_component/FooterContent";
import { Header } from "./_Features/Header";
import { HeroSection } from "./_Features/HeroSection";
import { UpcomingMovieList } from "./UpComing/UpcomingMovieList";
import { PopularMovieList } from "./Popular/PopularMovieList";
import { useEffect } from "react";
import { TopRatedMovieList } from "./TopRated/TopRatedMovieList";

const apiLink =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export default function Home() {
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    console.log("this is data", jsonData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="gap-[10px] ">
      <Header />
      <HeroSection />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
      <FooterContent />
    </div>
  );
}
