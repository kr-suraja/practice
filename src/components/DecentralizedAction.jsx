import preHook from "../assets/preHook.svg"
import postHook from "../assets/postHook.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const data = [{
    imageSrc: preHook,
    imageAlt: "preHook",
    title: "On Chain Pre Verification Hooks",
    sections: [
        { text: "Develop smart contracts for user eligibility verification before survey ", delay: "300" },
        { text: "Define eligibility criteria like token ownership or participation history. ", delay: "400" },
        { text: "Implement validation functions within contracts to assess user credentials.", delay: "500" },
        { text: "Proceed with survey submission if criteria met, reject otherwise ", delay: "600" }
    ],
    reverse: false
},
{
    imageSrc: postHook,
    imageAlt: "postHook",
    title: "On Chain Post Verification Hooks",
    sections: [
        { text: "Set triggers for post-submission actions, like token distribution or airdrops, based on conditions. ", delay: "300" },
        { text: "Define triggering conditions such as response thresholds or specific outcomes.", delay: "400" },
        { text: "Monitor submission progress and verify conditions for action triggers.", delay: "500" },
        { text: "Execute predefined actions, like distributing tokens, using smart contracts upon meeting conditions.", delay: "600" },
    ],
    reverse: true
}]

const SmartContractStep = ({ description, keep, delay }) => {
    return (
        <div data-aos={"fade-up"} data-aos-delay={delay} className="flex">
            <div className="flex flex-col items-center mr-4">
                <div>
                    <div className="flex items-center justify-center w-10 h-10 border bg-[#5831C8] rounded-full">
                        <svg className="w-6 text-white" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"></polyline>
                        </svg>
                    </div>
                </div>
                {/* {keep &&
                    <div className="w-px h-full bg-gray-300"></div>
                } */}
            </div>
            <div className="pt-2 pb-8">
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const DecentralizedAction = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    const contentContainerClass = "max-w-xl";
    const titleClass = "font-patua text-4xl mt-5";

    const ContentComponent = ({ imageSrc, imageAlt, title, subTitle, sections, reverse }) => (
        <div className={reverse ? "flex flex-row-reverse justify-around py-[30px]" : "flex flex-row justify-around py-[80px]"}>
            <div data-aos={"fade-up"} className={contentContainerClass}>
                <div className={titleClass}>{title}</div>
                <div className="my-5">
                    <div className="lg:py-6 lg:pr-16">
                        {sections.map((x, index) => {
                            if (index === sections.length - 1) {
                                return <SmartContractStep description={x.text} keep={false} delay={x.delay} />
                            } else {
                                return <SmartContractStep description={x.text} keep={true} />
                            }
                        })}
                    </div>
                </div>
            </div>
            <div data-aos={"fade-up"} className="  flex align-middle">
                <img width={350} height={400} src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    );


    const MobileViewCard = ({ data }) => {
        return (
            <div  className=" bg-white rounded-2xl shadow-2xl my-3 mx-6 mt-8">
                <div className="px-5 py-3">
                    <div  className="text-center font-patua text-lg ">
                        {data.title}
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-[180px] max-h-[180px] w-full h-full mt-5 ">
                            <img src={data.imageSrc} alt={"preHook"} />
                        </div>
                    </div>
                    <div className="my-4 py-4">
                        {data.sections.map((x, index) => {
                            if (index === data.sections.length - 1) {
                                return <SmartContractStep description={x.text} keep={false} delay={x.delay} />
                            } else {
                                return <SmartContractStep description={x.text} keep={true} />
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className=" my-[4rem]">
            <h1 data-aos={"fade-up"} className="flex justify-center text-2xl md:text-4xl font-patua tracking-wide  text-center">Decentralized Actions: Elevating Survey Engagement in Crypto Products</h1>
            <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-10 text-center max-w-[1000px] px-2 flex justify-center font-medium tracking-wide text-[#263238]">At SurveyBull, we value your opinions and insights. That's why we've created an opportunity for you to earn tokens simply by sharing your thoughts through surveys. Our platform offers a seamless experience where your contributions are not only appreciated but also rewarded. Here's how it works</div>
            </div>
            {/* <div className="xl:grid xl:grid-cols-2 xl:gap-16 mt-12 px-4" >
                <div className="flex flex-col py-4 rounded-2xl bg-[#E7F4FC] ">
                    <div className="font-extrabold text-xl mt-6 px-4">Enhanced Survey Experience</div>
                    <div className="flex-1 flex items-center px-4">
                        <div>
                            <div className="my-3">Imagine conducting a survey on a new blockchain-based social media platform. In addition to answering questions, participants may follow a decentralized profile, interact with smart contracts, or engage in community governance votes. This feature transcends data collection, creating an immersive and interactive survey experience.</div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 xl:mt-0 flex flex-col py-4  rounded-2xl bg-[#E7F4FC] ">
                    <div className="font-extrabold text-xl mt-6 px-4">On-Chain Verification Hooks</div>
                    <div className="flex-1 flex items-center px-4">
                        <div>
                            <div className="my-8">Tailored for Crypto product surveys, the On-chain Verification Hooks feature provides advanced customization and functionality. Requesters establish specialized on-chain hooks executed upon participant survey submission. Particularly impactful for token-gated surveys or token airdrops, it ensures eligibility based on personalized criteria..</div>
                        </div>

                    </div>
                </div>
            </div> */}
            <div className="hidden xl:block">
                {data.map((element) => {
                    return (
                        <ContentComponent
                            imageSrc={element.imageSrc}
                            imageAlt={element.imageAlt}
                            title={element.title}
                            subTitle={element.subTitle}
                            sections={element.sections}
                            reverse={element.reverse}
                        />
                    )
                })}
            </div>
            
            {/* <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-10 text-center max-w-[1000px] px-2 flex justify-center font-medium tracking-wide text-[#263238]"><p><b>Use Case : </b> 
Picture a requester conducting a token distribution survey. By setting on-chain verification hooks, they ensure participants meet specific criteria, like holding a minimum token balance or engaging with decentralized applications. This feature extends beyond traditional survey mechanics, enabling seamless integration of blockchain-based verification processes for secure and targeted token distribution.
</p></div>
            </div> */}
            <div className="xl:hidden">
                {data.map((element) => {
                    return (
                        <MobileViewCard data={element} />
                    )
                })}
            </div>
        </div>
    )
}

export default DecentralizedAction