import { HeroSlide } from "../_component/HeroSlide";

export const HeroSection = (props) => {
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-[1440px] h-[600px] overflow-scroll ">
        <div className="w-[4320px] flex gap-5 relative ">
          <HeroSlide
            imgSrc={"./Feature.jpg"}
            title="Wicked"
            description={
              <span>
                Elphaba, a misunderstood young woman because of <br />
                her green skin, and Glinda, a popular girl, become
                <br />
                friends at Shiz University in the Land of Oz. After an
                <br />
                encounter with the Wonderful Wizard of Oz, their <br />
                friendship reaches a crossroads.
              </span>
            }
            rate={7}
          />
          <HeroSlide
            imgSrc={"./Feature.jpg"}
            title="Wicked"
            description={
              <span>
                Elphaba, a misunderstood young woman because of <br />
                her green skin, and Glinda, a popular girl, become
                <br />
                friends at Shiz University in the Land of Oz. After an
                <br />
                encounter with the Wonderful Wizard of Oz, their <br />
                friendship reaches a crossroads.
              </span>
            }
            rate={7}
          />
          <HeroSlide
            imgSrc={"./Feature.jpg"}
            title="Wicked"
            description={
              <span>
                Elphaba, a misunderstood young woman because of <br />
                her green skin, and Glinda, a popular girl, become
                <br />
                friends at Shiz University in the Land of Oz. After an
                <br />
                encounter with the Wonderful Wizard of Oz, their <br />
                friendship reaches a crossroads.
              </span>
            }
            rate={7}
          />
        </div>
      </div>
    </div>
  );
};
