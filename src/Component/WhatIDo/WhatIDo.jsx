import {
      FaLaptopCode,
      FaDraftingCompass,
      FaCode,
      FaStarOfDavid,
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { LiaAmericanSignLanguageInterpretingSolid } from "react-icons/lia";


const WhatIDo = () => {
      return (

            <div>
                  <div id="/#workplen" className="w-5/6 mx-auto mt-28">

                        <div className="">
                              <span className="my-5 mx-4 font-thin rounded-sm px-5 py-2 text-xl lg:ml-[500px] ml-24">
                                    FEATURES
                              </span>
                              <h3 className="lg:text-5xl text-3xl my-5 font-bold lg:ml-[450px] ml-24">
                                    What I Do
                              </h3>
                              <h1 className="border-b border-purple-700 mt-3 py-3"></h1>
                        </div>

                        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 sm:flex-row sm:justify-center gap-5 lg:ml-4 mt-16">

                              <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
                                    <div className="card-body  text-[#c4cfde] hover:text-white">
                                          <span>
                                                <FaLaptopCode className="text-6xl text-purple-500 mx-auto h-16"></FaLaptopCode>
                                          </span>
                                          <h2 className="card-title text-3xl my-2 text-center lg:ml-16 ml-14">Discussion</h2>
                                          <p className="text-xl text-center">
                                                To understand the project needs & requirements it’s very important
                                                for me, for that I discuss with every detail to related projects.
                                          </p>
                                    </div>
                              </div>

                              <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
                                    <div className="card-body  text-[#c4cfde] hover:text-white">
                                          <span>
                                                <LiaAmericanSignLanguageInterpretingSolid className="text-6xl text-purple-500 mx-auto h-16"></LiaAmericanSignLanguageInterpretingSolid>
                                          </span>
                                          <h2 className="card-title text-3xl my-2 lg:ml-[78px] ml-[70px]">Planning</h2>
                                          <p className="text-xl text-center">
                                                Then I can create a plan for the whole project. Planning gives the
                                                high potential to every project to do successful.
                                          </p>
                                    </div>
                              </div>

                              <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
                                    <div className="card-body  text-[#c4cfde] hover:text-white">
                                          <span>
                                                <FaDraftingCompass className="text-6xl text-purple-500 mx-auto h-16"></FaDraftingCompass>
                                          </span>
                                          <h2 className="card-title text-3xl my-2 lg:ml-[95px] ml-[85px]">Design</h2>
                                          <p className="text-xl text-center">
                                                I give highly concentration to website design, every time I try to
                                                give my best to do clean and services related awesome design for
                                                the website.
                                          </p>
                                    </div>
                              </div>

                              <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
                                    <div className="card-body  text-[#c4cfde] hover:text-white">
                                          <span>
                                                <FaCode className="text-6xl text-purple-500 mx-auto h-16"></FaCode>
                                          </span>
                                          <h2 className="card-title text-3xl my-2 lg:ml-[90px] ml-[85px]">Coding</h2>
                                          <p className="text-xl text-center">
                                                We need to code for every website. it’s very important to have
                                                hand coding, clean and developer friendly coding.
                                          </p>
                                    </div>
                              </div>

                              <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
                                    <div className="card-body  text-[#c4cfde] hover:text-white">
                                          <span>
                                                <FaStarOfDavid className="text-6xl text-purple-500 mx-auto h-16">
                                                      {" "}
                                                </FaStarOfDavid>
                                          </span>
                                          <h2 className="card-title text-3xl my-2 lg:ml-[14px] ml-[5px]">Submit for Review</h2>
                                          <p className="text-xl text-center">
                                                After design and coding, I send for review to client. After
                                                client’s checking, If have to change or revision I again do this.
                                          </p>
                                    </div>
                              </div>

                              <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
                                    <div className="card-body  text-[#c4cfde] hover:text-white">
                                          <span>
                                                <FaEarthAmericas className="text-6xl text-purple-500 mx-auto h-16" />
                                          </span>
                                          <h2 className="card-title text-3xl my-2 lg:ml-[20px] ml-[5px]">Website Is Ready!</h2>
                                          <p className="text-xl text-center">
                                                After reviewing everything, we are going to the final step, if
                                                everything has done, then I can publish it for everyone.
                                          </p>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default WhatIDo;