
import { AiTwotoneMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
      return (
            <div className="featured-login mt-32 px-4 md:px-8 lg:px-0">
                  <div className="hero-content flex flex-col lg:flex-row-reverse items-center">

                        <div className="card text-gray-900 mb-10 lg:mb-0 lg:mr-32 lg:ml-24">
                              <div className="flex text-white gap-8 mb-10">
                                    <FiPhoneCall className="bg-purple-600 h-12 w-12 p-2 rounded-full text-center mt-2" />
                                    <div>
                                          <h1 className="text-xl">Phone</h1>
                                          <p className="lg:text-2xl font-semibold">01682247291</p>
                                    </div>
                              </div>
                              <div className="flex text-white gap-8 mb-10">
                                    <AiTwotoneMail className="bg-purple-600 h-12 w-12 p-2 rounded-full text-center mt-2" />
                                    <div>
                                          <h1 className="text-xl">Email</h1>
                                          <p className="lg:text-2xl font-semibold">shahinalom3511371@gmail.com</p>
                                    </div>
                              </div>
                              <div className="flex text-white gap-8">
                                    <FaLocationDot className="bg-purple-600 h-12 w-12 p-2 rounded-full text-center mt-2" />
                                    <div>
                                          <h1 className="text-xl">Address</h1>
                                          <p className="lg:text-2xl font-semibold">Fulbaria, Mymensingh</p>
                                    </div>
                              </div>
                        </div>

                        <form className="card-body bg-[#140c1c] text-white w-full max-w-lg lg:max-w-none lg:w-[800px] rounded-xl p-8 lg:ml-24">
                              <h1 className="lg:text-5xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-purple-800 from-white">
                                    Let’s work together!
                              </h1>
                              <p className="text-lg mt-4">
                                    I design and code beautifully simple things and I love what I do.
                                    Just simple like that!
                              </p>

                              <div className="form-control mt-8">
                                    <label className="label flex justify-between items-center">
                                          <span className="absolute mt-[87px] lg:right-[860px] right-20" >
                                                <FaRegUser />
                                          </span>
                                          <p>Your Name</p>
                                    </label>
                                    <input
                                          required
                                          type="text"
                                          name="name"
                                          placeholder="Your Name"
                                          className="input input-bordered bg-[#050709] w-full lg:w-[530px] h-14 hover:border-2 hover:border-purple-600 duration-500 cursor-pointer"
                                    />
                              </div>

                              <div className="form-control mt-4">
                                    <label className="label flex justify-between items-center">
                                          <span className="absolute mt-[87px] lg:right-[860px] right-20" >
                                                <FiPhoneCall />
                                          </span>
                                          <p>Phone Number</p>
                                    </label>
                                    <input
                                          type="text"
                                          name="phone"
                                          placeholder="Phone Number"
                                          className="input input-bordered bg-[#050709] w-full lg:w-[530px] h-14 hover:border-2 hover:border-purple-600 duration-500 cursor-pointer"
                                          required
                                    />
                              </div>

                              <div className="form-control mt-4">
                                    <label className="label flex justify-between items-center">
                                          <span>Email Address</span>
                                          <span className="absolute mt-[87px] lg:right-[860px] right-20" >
                                                <AiTwotoneMail />
                                          </span>
                                    </label>
                                    <input
                                          type="email"
                                          name="email"
                                          placeholder="Email Address"
                                          className="input input-bordered bg-[#050709] w-full lg:w-[530px] h-14 hover:border-2 hover:border-purple-600 duration-500 cursor-pointer"
                                          required
                                    />
                              </div>

                              <label className="label mt-4">
                                    <span>Message</span>
                              </label>
                              <textarea
                                    className="appearance-none rounded py-2 px-3 bg-[#050709] w-full lg:w-[530px] hover:border-2 hover:border-purple-600 duration-500 cursor-pointer"
                                    id="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                              ></textarea>

                              <div className="mt-4 h-full flex justify-center lg:justify-start">
                                    <button className="text-xl rounded-full h-14 w-48 hover:text-purple-300 bg-transparent bg-clip-bg bg-gradient-to-r from-purple-800 duration-500 to-purple-600 font-semibold">
                                          Send Message
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Contact;
