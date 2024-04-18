import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const SDK = () => {

    useEffect(() => {
        AOS.init({ duration:1000});
      }, [])
    return (
        <div className=" my-[4rem] xl:my-[4rem]">
            <h1 data-aos={"fade-up"} className="flex px-2 justify-center text-2xl md:text-4xl font-patua tracking-wide   text-center">Software Development Kit (SDK) for Seamless Survey Integration</h1>
            <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-10 px-2 text-center max-w-[1000px] flex justify-center font-medium tracking-wide text-[#263238]">The SurveyBull SDK empowers effortless creation and management of on-chain surveys, offering seamless participant sign-up and survey submission functionalities. This versatile SDK is meticulously crafted for integration with any web3 or web2 product, unlocking the full array of SurveyBull features.</div>
            </div>
            <div className="flex ">
                <div className="xl:grid xl:grid-cols-2 xl:gap-16 mt-12 px-4">
                    <div data-aos={"fade-up"} class="div group xl:h-[300px] border  bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                        <div
                            class="circle absolute h-[5em] w-[5em] -top-[2.5em] -left-[2.5em] rounded-full bg-[#5831C8] group-hover:scale-[1800%] duration-500 z-[-1] op"
                        ></div>
                        <h1
                            class="z-20 mt-6 ml-5 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
                        >
                            Streamlined Integration
                        </h1>
                        <div class="mt-8 px-4 group-hover:text-white" >Imagine creating a Telegram Bot customized for surveys using the SurveyBull SDK. With this integration, generating surveys within the Telegram app becomes intuitive, facilitating survey distribution across diverse groups for active engagement. The user-friendly nature of the SDK enhances accessibility and interaction, turning Telegram into a dynamic hub for efficient data collection.</div>
                    </div>
                    <div data-aos={"fade-up"} class="div group xl:h-[300px] mt-5 xl:mt-0 border  bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                        <div
                            class="circle absolute h-[5em] w-[5em] -top-[2.5em] -left-[2.5em] rounded-full bg-[#5831C8] group-hover:scale-[1800%] duration-500 z-[-1] op"
                        ></div>
                        <h1
                            class="z-20 mt-6 ml-5 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
                        >
                            Expanding Accessibility
                        </h1>
                        <div class="mt-8 px-4 group-hover:text-white" >Furthermore, the SurveyBull SDK extends its utility to existing web2 data brokers seeking to adopt web3 survey capabilities. By seamlessly integrating the SDK, these data brokers can transition towards decentralized survey functionalities while earning affiliation fees. This collaborative approach ensures a seamless integration of web3 survey capabilities into existing data brokerage systems, bridging the gap between conventional and decentralized survey ecosystems.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SDK