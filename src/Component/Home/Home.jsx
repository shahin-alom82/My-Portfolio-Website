import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Fotter from "../Fotter/Fotter";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import Skils from "../Skils/Skils";
import WhatIDo from "../WhatIDo/WhatIDo";

const Home = () => {

      return (
            <div>
                  <Banner></Banner>
                  <WhatIDo></WhatIDo>
                  <Skils></Skils>
                  <MyPortfolio></MyPortfolio>
                  <Contact></Contact>
                  <Experience></Experience>
                  <Fotter></Fotter>
            </div>
      );
};

export default Home;



