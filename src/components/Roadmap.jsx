import tick from "../assets/tick.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const Roadmap = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className=" my-[6rem]">
            <h1 data-aos={"fade-up"} className="text-2xl md:text-4xl flex justify-center text-center font-patua tracking-wide  text-[#484848] ">Roadmap</h1>
            <div className=" relative flex justify-center my-24">
                <div data-aos={"fade-up"} class="absolute w-[30px] z-10 rounded-2xl h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 "></div>
                <div className="w-full flex flex-col justify-between">

                    <div className="  my-10 flex justify-start items-center h-fit w-full ">
                        <div className="absolute flex justify-center w-full h-8 ">
                            <img className=" z-10" width={26} height={26} src={tick} />
                        </div>
                        <div data-aos={"zoom-in"} className="  w-[45%] xl:w-[28.125rem] xl:ml-32 py-9">
                            <div className="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ">

                                <div className=" font-patua w-full text-right text-xl">
                                    Stage 1
                                </div>
                                <div className="mt-2 text-right w-full">
                                    Develop smart contracts for user eligibility verification before survey submission.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" my-10 flex justify-end items-center h-fit w-full">
                        <div className="absolute flex justify-center w-full h-8 ">
                            <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
                        </div>
                        <div data-aos={"zoom-in"} className="  w-[45%] xl:w-[28.125rem] xl:mr-32 py-9">
                            <div className="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ">

                                <div className="font-patua w-[150px] md:w-full text-left text-xl">
                                    Stage 2
                                </div>
                                <div className="mt-2 text-left w-[150px] md:w-full">
                                    Develop smart contracts for user eligibility verification before survey submission.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 flex justify-start items-center h-fit w-full ">
                        <div className="absolute flex justify-center w-full h-8 ">
                            <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
                        </div>
                        <div data-aos={"zoom-in"} className="   w-[45%] xl:w-[28.125rem] xl:ml-32 py-9">
                            <div className="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ">

                                <div className="font-patua w-full text-right text-xl">
                                    Stage 3
                                </div>
                                <div className="mt-2 text-right w-full">
                                    Develop smart contracts for user eligibility verification before survey submission.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" my-10 flex justify-end items-center h-fit w-full ">
                        <div className="absolute flex justify-center w-full h-8 ">
                            <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
                        </div>
                        <div data-aos={"zoom-in"} className="   w-[45%] xl:w-[28.125rem] xl:mr-32 py-9">
                            <div className="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                                <div className="font-patua w-[150px] md:w-full text-left text-xl">
                                    Stage 4
                                </div>
                                <div className=" mt-2 text-left  w-[150px] md:w-full">
                                    Develop smart contracts for user eligibility verification before survey submission.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap