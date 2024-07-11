import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { TbBrandFacebookFilled } from 'react-icons/tb';
import Work from '../Work/Work';
const Banner = () => {
      return (
            <div>
                  <div className="flex flex-col lg:flex-row text-white">
                        {/* text serction */}
                        <div className=" text-white mt-24 px-6 sm:py-10 sm:px-8 md:py-12 md:px-16 lg:px-20 xl:py-16 xl:px-24">
                              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold duration-500 lg:text-start text-center">Hi, My Name is</h1>
                              <p className="lg:text-6xl lg:text-start text-center sm:text-5xl md:text-6xl font-bold text-4xl sm:mt-6  lg:mt-2 xl:mt-5  text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-700 duration-500">Shahin Alom
                              </p>



                              {/* <Typewriter
                                    options={{
                                          strings: ["I Am Shahin Alom", "Frontend Developer"],
                                          autoStart: true,
                                          loop: true,
                                          cursor: " ",
                                    }}
                              /> */}

                              <p className="lg:text-2xl sm:text-3xl md:text-4xl text-xl mt-6 sm:mt-8 md:mt-10 lg:mt-6 hover:rotate-[4deg] duration-500 lg:text-start text-center">I break down complex user experinece problems to
                                    <br />
                                    create integritiy focussed solutions that
                                    <br />
                                    connect billions of people . </p>

                              <div className=" gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-8 items-center">

                                    <button class="lg:text-[18px] text-purple-600 font-medium rounded-full text-center border duration-500 hover:bg-purple-700  hover:text-white border-purple-700 px-5 py-2.5 inline-flex items-center me-2 ">
                                          <IoMdArrowRoundDown className='w-10' />
                                          Download CV
                                    </button>
                                    <button className="border border-purple-700 rounded-full p-2 h-10 text-purple-700 hover:bg-purple-700 hover:text-white duration-500 lg:ml-4 "><FaGithub />
                                    </button>
                                    <button className="border border-purple-700 rounded-full p-2 h-10 text-purple-700 hover:bg-purple-700 hover:text-white duration-500 lg:ml-4 ml-2"><TbBrandFacebookFilled />
                                    </button>
                                    <button className="border border-purple-700 rounded-full p-2 h-10 text-purple-700 hover:bg-purple-700 hover:text-white duration-500 lg:ml-4 ml-2"><FaLinkedinIn />
                                    </button>
                                    <button className="border border-purple-700 rounded-full p-2 h-10 text-purple-700 hover:bg-purple-700 hover:text-white duration-500 lg:ml-4 ml-2"><FaTwitter />
                                    </button>
                              </div>

                        </div>

                        {/* Image Section */}
                        <div className="lg:ml-40 ml-[35px] mt-28  w-[330px] h-[400px]  border-4 rounded-3xl border-purple-700 cursor-pointer">
                              <img className='hover:rotate-[15deg] duration-500 hover:border-4 border-4  border-purple-700 w-[330px] h-[400px]  rounded-3xl ' src="https://i.ibb.co/y5hLCHT/448803900-991780162595052-2271124324976378812-n-removebg-preview.png" alt="" />
                        </div>
                  </div>

                  <Work></Work>

            </div>
      );
};

export default Banner;