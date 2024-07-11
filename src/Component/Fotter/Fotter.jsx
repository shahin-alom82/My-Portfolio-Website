import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Fotter = () => {
      return (
            <div>
                  <footer className="mt-20 bg-opacity-5 bg-purple-600 rounded-full">
                        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                              <div className="sm:flex sm:items-center sm:justify-between">
                                    <div>
                                          <span className="self-center text-4xl font-semibold whitespace-nowrap uppercase text-purple-600 lg:text-start lg:ml-0 ml-12">Sha<span className='text-purple-700'>hin</span> Alom</span>
                                          <h1 className='text-xl mt-3 lg:ml-0 ml-12'>Web Developer & Designer</h1>
                                    </div>


                                    <ul className="items-center mb-6 text-lg font-medium lg:ml-0 ml-12">
                                          <h1>Contact ME :-</h1>
                                          <h1>Email : shahinalom3511371@gmail.com</h1>
                                          <h1>Phone : 01682247291</h1>
                                          <div className='mt-4 flex gap-5'>
                                                <img className='h-8 ' src="https://i.ibb.co/NLN5mBs/facebook-logo-icon-257007.webp" alt="" />
                                                <img className='h-8 ' src="https://i.ibb.co/PCB43Nm/Github-desktop-logo-symbol-svg.png" alt="" />
                                                <img className='h-8 ' src="https://i.ibb.co/3057zJY/circle-linkedin-512.webp" alt="" />
                                                <img className='h-8 ' src="https://i.ibb.co/f1vcdd6/Instagram-logo-2016-svg.webp" alt="" />
                                                <img className='h-8 ' src="https://i.ibb.co/85gRDx1/twitter-logo-icon-186891.webp" alt="" />
                                          </div>
                                    </ul>
                              </div>


                              <hr className="my-6 border-purple-600 sm:mx-auto lg:my-8" />
                              <span className="block lg:text-xl  sm:text-center lg:ml-0 ml-12" >© 2024 <a href="#">Your Name™</a>. All Rights Reserved.</span>


                        </div>
                  </footer>

            </div>
      );
};

export default Fotter;