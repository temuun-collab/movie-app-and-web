"use client";
import "./index.css";
import { FooterContent } from "./_component/FooterContent";
import { Header } from "./_Features/Header";
import { HeroSection } from "./_Features/HeroSection";
import { Movie } from "./_Features/Movie";
export default function Home() {
  return (
    <div className="gap-[10px] ">
      <Header />
      <HeroSection />
      <Movie />
      <FooterContent />
    </div>
  );
}
