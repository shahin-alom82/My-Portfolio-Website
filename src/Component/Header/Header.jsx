

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };

      const navLink = [
            { title: "Home", path: "home", value: "", },
            { title: "About", path: "about", value: "01.", delay: 0.1 },
            { title: "Experience", path: "experience", value: "02.", delay: 0.2 },
            { title: "Projects", path: "projects", value: "03.", delay: 0.3 },
            { title: "Contact", path: "contact", value: "04.", delay: 0.4 }
      ];

      return (
            <div className="h-24   shadow-hovarColor/10 px-4 lg:px-0  bg-primaryColor font-bodyFont shadow-xl shadow-purple-600/25 " >
                  <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full">
                        <img className="h-16 w-24 cursor-pointer" src="https://i.ibb.co/RvS6yBb/initial-letter-s-logo-company-name-simple-and-modern-logotype-design-for-business-and-company-identi.png" alt="Logo" />

                        <div className="hidden md:inline-flex items-center gap-10">
                              <ul className="flex text-[18px] gap-10">
                                    {navLink.map((item, index) => (
                                          <Link
                                                to={item.path}
                                                smooth={true}
                                                duration={200}
                                                key={index}
                                                className="font-medium hover:text-purple-600 duration-300 cursor-pointer"
                                          >
                                                <motion.p
                                                      initial={{ y: -10, opacity: 0 }}
                                                      animate={{ y: 0, opacity: 1 }}
                                                      transition={{ duration: 0.1, delay: item.delay }}
                                                >
                                                      <li>
                                                            <span className="text-purple-600 mr-2">{item.value}</span>
                                                            <span className="uppercase tracking-wide">{item.title}</span>
                                                      </li>
                                                </motion.p>
                                          </Link>
                                    ))}
                              </ul>

                              <motion.a
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                              >
                                    <a href="">
                                          <button className="text-[18px] border border-designColor font-medium rounded-lg px-6 py-2 me-2 hover:bg-hovarColor cursor-pointer duration-300">
                                                Resume
                                          </button>
                                    </a>
                              </motion.a>
                        </div>

                        <div className="md:hidden">
                              <FaBars onClick={toggleMenu} className="w-[2rem] h-[2rem] cursor-pointer text-purple-600" />
                        </div>
                  </div>

                  {isOpen && (
                        <div className="fixed inset-0 z-[999] bg-[#09101a]">
                              <ul className="w-full h-full flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8">
                                    {navLink.map((item, index) => (
                                          <li key={index} className="nav-link text-[22px] text-white relative group ">
                                                <Link
                                                      to={item.path}
                                                      smooth={true}
                                                      duration={200}
                                                      className="text-white hover:text-purple-600 duration-300"
                                                      onClick={toggleMenu}
                                                >
                                                      {item.title}
                                                </Link>
                                                <div className="absolute bottom-0 h-[2px] left-0 w-[0px] group-hover:w-[60px] transition-all duration-500"></div>
                                          </li>
                                    ))}
                              </ul>
                              <div
                                    onClick={toggleMenu}
                                    className="absolute top-7 right-5 cursor-pointer text-purple-600"
                              >
                                    <FaXmark size={32} />
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default Header;
