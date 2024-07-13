import React from 'react';
import Marquee from 'react-fast-marquee';
import Container from '../Container/Container';

const Work = () => {
      return (
            <Container>
                  <div>
                        <div className="text-white text-center p-10 rounded-lg mt-6">
                              <Marquee gradient={false}>
                                    <div className="lg:text-3xl mx-8 cursor-pointer">
                                          <ul>
                                                {[
                                                      "HTML-CSS",
                                                      "JavaScript",
                                                      "React",
                                                      "TailwindCSS",
                                                      "Bootstrap",
                                                      "MaterialUI",
                                                      "NodeJS",
                                                      "ExpressJS",
                                                      "MongoDB",
                                                      "Firebase",
                                                      "Vercel",
                                                ].map((skill, index) => (
                                                      <li
                                                            key={index}
                                                            className="inline-block px-6 py-3 mx-4 my-2 border-2 border-purple-700 rounded-lg text-text-1 font-medium hover:text-purple-700 transition-colors duration-500"
                                                      >
                                                            {skill}
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              </Marquee>
                        </div>
                  </div>
            </Container>
      );
};

export default Work;

