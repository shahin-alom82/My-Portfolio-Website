import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {


      const [protfolio, setProtfolio] = useState([])
      useEffect(() => {
            fetch("/portfolio.json")
                  .then(res => res.json())
                  .then(data => setProtfolio(data))
      }, [])

      return (
            <div>
                  <div className="w-5/6 mx-auto mt-20">
                        <div className="text-center">
                              <span className="my-2 md:text-xl text-[18px] md:mx-4 font-thin rounded-sm md:px-5 py-2">
                                    VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
                              </span>
                              <h1 className=" border-b border-purple-700 py-8 lg:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-purple-800 from-white">
                                    My Portfolio
                              </h1>
                        </div>
                        <div className="grid md:grid-cols-3 items-center gap-8 mt-20" >
                              {protfolio.map((item) => (
                                    <div key={item.id} className="border-4 p-5 h-[478px] shadow-2xl border-purple-600 rounded-lg   bg-[#202327]  duration-1000 hover:bg-[#010101]">
                                          <img
                                                src={item.image}
                                                alt=""
                                                className="w-full h-80 object-cover object-top rounded-t-2xl hover:object-bottom duration-[5000ms]"
                                          />

                                          <div className="flex justify-between items-center my-5 text-white">
                                                <Link to={item.liveLink}>
                                                      <button className="text-xl text-purple-600">Demo</button>
                                                </Link>
                                                <Link
                                                      to={item.githubLink}

                                                >
                                                      <button className="text-xl text-purple-600">GitHub</button>
                                                </Link>
                                          </div>
                                          <div>
                                                <ul className="text-white text-xl">
                                                      <li>{item.name}</li>
                                                </ul>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default MyPortfolio;