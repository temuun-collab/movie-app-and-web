"use client";
import "./index.css";
import { Feature } from "./_component/Feature";

import { Navbar } from "./_component/Navbar";
import { Navbar1 } from "./_component/Navbar1";
import { Navbar2 } from "./_component/Navbar2";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center h-[59px] items-center w-100vw">
        <div className="flex justify-between h-[36px] w-[1280px] items-center">
          <Navbar />
          <Navbar1 />
          <Navbar2 />
        </div>
      </div>
      <div className="w-[100vw] h-[600px] overflow-scroll">
        <div className="w-[300vw] flex gap-5">
          <div>
            <Feature src={"./Feature.jpg"} text="Now Playing:" />
          </div>
          <div>
            <Feature src={"./movie.png"} />
          </div>
          <div>
            <Feature src={"./movie1.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}
