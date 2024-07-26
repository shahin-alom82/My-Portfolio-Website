import Container from "../Container/Container";
import CountUp from 'react-countup';

const Experience = () => {
      return (
            <Container id={"#"}>
                  <div>
                        <div className='grid grid-cols-1 lg:grid-cols-4 lg:ml-20 ml-20 mt-20'>


                              <div className='flex gap-5'>
                                    <div>
                                          <h1 className='lg:text-[65px] text-3xl mt-8 font-bold lg:ml-0 ml-10'> <CountUp end={2} duration={.5}></CountUp> </h1>
                                    </div>
                                    <div className='mt-6 text-xl'>
                                          <h1>Years of </h1>
                                          <h1>Experience</h1>
                                    </div>
                              </div>


                              <div className='flex gap-5'>
                                    <div>
                                          <h1 className='lg:text-[65px] text-3xl mt-8 font-bold lg:ml-0 ml-10'><CountUp end={4} duration={.5}></CountUp> </h1>
                                    </div>
                                    <div className='mt-6 text-xl'>
                                          <h1>Backend </h1>
                                          <h1>Projects</h1>
                                    </div>
                              </div>

                              <div className='flex gap-5'>
                                    <div>
                                          <h1 className='lg:text-[65px] text-3xl mt-8 font-bold lg:ml-0 ml-10'><CountUp end={10} duration={.5}></CountUp></h1>
                                    </div>
                                    <div className='mt-6 text-xl'>
                                          <h1>Happy</h1>
                                          <h1>Clients</h1>
                                    </div>
                              </div>


                              <div className='flex gap-5'>
                                    <div>
                                          <h1 className='lg:text-[65px] text-3xl mt-8 font-bold lg:ml-0 ml-10'><CountUp end={16} duration={.5}></CountUp><span className='font-bold'>+</span></h1>
                                    </div>
                                    <div className='mt-6 text-xl'>
                                          <h1>Project</h1>
                                          <h1>Completed</h1>
                                    </div>
                              </div>




                        </div>

                  </div>
            </Container>
      );
};

export default Experience;