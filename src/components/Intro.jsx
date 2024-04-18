import { useEffect } from "react";
import IntroSVG from "../assets/Intro.svg"
import { Button } from "./Button"
import AOS from 'aos';
import "aos/dist/aos.css";

const Intro = () => {

    useEffect(() => {
        AOS.init({ duration:1000});
      }, [])

    return (
        <div  className="xl:flex xl:justify-between my-10">
            <div data-aos={"fade-up"} className="  flex items-center justify-center">
                <div className="xl:max-w-xl w-full">
                    <h1 className="text-3xl text-center xl:text-start font-patua  xl:text-[3rem] text-[#140346]  tracking-wide  font-intro leading-[3.5rem] " style={{ fontFamily: "Patua One" }} >Craft, Share, Earn </h1>
                    <div className="mt-8 text-base text-center xl:text-start xl:text-2xl  text-[#484848] font-medium px-4 xl:px-0 ">
                         the power of Blockchain Supported Survey, Earn reward for your data!
                    </div>
                    <div className="flex justify-center xl:justify-start">
                        <Button className={"bg-[#5831C8] mt-10 w-[230px] font-poppins "} arrow={"right"}><div className="font-['Poppins'] " style={{ fontFamily: "Poppins" }}>Get Started</div></Button>
                    </div>
                </div>
            </div>
            <div data-aos={"fade-up"} className="hidden xl:block">
                <img src={IntroSVG} />
            </div>
        </div>
    )
}

export default Intro