import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';


const Header = () => {

      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };


      const navLink = [
            { text: "Home", path: "/" },
            { text: "About", path: "/About" },
            { text: "Skils", path: "/Skils" },
            { text: "Projects", path: "/Projects" },
            { text: "Contacts", path: "/contact" }
      ]

      return (
            <div className='h-28 md:mx-[50px] rounded shadow-xl shadow-purple-600/15'>

                  <div className='flex items-center justify-between w-[80%] p-10 h-[100%] gap-10'>
                        {/* <h1 className='flex-[0.6] cursor-pointer text-[40px] uppercase font-semibold text-start text-white'>
                              Sha<span className='text-purple-600'>hin</span>
                        </h1> */}
                        <img className='h-20 w-28' src="https://i.ibb.co/RvS6yBb/initial-letter-s-logo-company-name-simple-and-modern-logotype-design-for-business-and-company-identi.png" alt="" />


                        <ul className='hidden md:flex gap-12 items-center lg:ml-56'>


                              {
                                    navLink.map((item, index) => (
                                          <li key={index} className='nav-link text-[22px] text-white relative group lg:ml-12'>

                                                <a className='text-white hover:text-purple-600' href={item.path}>{item.text}</a>
                                                <div className='absolute bottom-0 h-[2px] left-0 w-[0px] group-hover:w-[60px] bg-purple-600 hover:text-purple-600  transition-all duration-500'></div>
                                          </li>
                                    ))
                              }
                        </ul>


                        <div className='md:hidden'>
                              <FaBars onClick={toggleMenu} className="w-[2rem] ml-40 h-[2rem] cursor-pointer text-purple-700" />
                        </div>
                  </div>


                  {isOpen && (
                        <div className={`fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[999] bg-[#09101a]`}>
                              <ul className="w-full h-full flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8">

                                    {
                                          navLink.map((item, index) => (
                                                <li key={index} className='nav-link text-[22px] text-white relative group'>

                                                      <a className='text-white hover:text-purple-600' href={item.path}>{item.text}</a>
                                                      <div className='absolute bottom-0 h-[2px] left-0 w-[0px] group-hover:w-[60px] bg-purple-600 hover:text-purple-600  transition-all duration-500'></div>
                                                </li>
                                          ))
                                    }
                              </ul>
                              <div
                                    onClick={toggleMenu}
                                    className="absolute cursor-pointer top-10 right-12 w-8 h-8 text-purple-700"
                              >
                                    <FaXmark size={32} />
                              </div>
                        </div>

                  )}

            </div>
      );
};

export default Header;
