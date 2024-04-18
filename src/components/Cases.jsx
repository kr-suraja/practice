import blockchain from "../assets/blockchain.svg"
import userprofile from "../assets/userprofile.svg"
import health from "../assets/health.svg"
import crypto from "../assets/Crypto.svg"
import investor from "../assets/investor.svg"
import marketTrend from "../assets/marketTrend.svg"
import realestate from "../assets/realestate.svg"
import politicalImg from "../assets/politicalImg.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const SurveyCard = ({ imageSrc, title, description }) => {
    return (
        <div data-aos={"fade-up"} class="flex h-fit items-center justify-center bg-white">
            <div class="group h-[18.75rem] w-[16.875rem] [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-[0_3px_10px_rgb(88,49,200,0.4)]  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0 ">
                        <div className="flex flex-col items-center h-full justify-center">
                            <img class="h-[180px] w-[180px] mx-auto " src={imageSrc} alt="" />
                            <div className="mt-3 px-2 text-center" >{title} </div>
                        </div>
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-[#5831C8]/95 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <p class="font-semibold ">{description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Cases = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className="  md:my-[8rem]">
            <h1 data-aos={"fade-up"} className="text-2xl md:text-4xl flex justify-center font-patua text-[#484848] ">Use Cases</h1>
            <div className="xl:flex justify-between my-20 ">
                <div
                    className="grid grid-cols-1 gap-12 mb-[3rem] xl:mb-0 ">
                    <SurveyCard
                        imageSrc={blockchain}
                        title="Blockchain Adoption Surveys"
                        description="Blockchain startups and projects use the survey platform to gather feedback on user experiences, preferences, and challenges related to adopting blockchain technology."
                    />
                    <div className="mb-[3rem] md:mb-[0px]">
                        <SurveyCard
                            imageSrc={userprofile}
                            title="User Satisfaction Surveys"
                            description="A cryptocurrency wallet provider conducts regular surveys to understand user satisfaction, feature preferences, and security concerns."
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-12 mb-[3rem] xl:mb-0  ">
                    <div className="md:mt-[0px]">
                        <SurveyCard
                            imageSrc={health}
                            title="Healthcare Research Consortium"
                            description="A consortium of healthcare researchers collaborates on a platform to gather data for epidemiological studies."
                        />
                    </div>
                    <SurveyCard
                        imageSrc={crypto}
                        title="Cryptocurrency Education & Awareness"
                        description="A crypto education platform utilizes surveys to understand the knowledge gaps and learning preferences of its audience."
                    />
                </div>
                <div className="grid grid-cols-1 gap-12 ">
                    <SurveyCard
                        imageSrc={investor}
                        title="ICO/STO Investor Sentiment Analysis"
                        description="Companies launching Initial Coin Offerings (ICOs) or Security Token Offerings (STOs) use the survey platform to gauge investor sentiment."
                    />
                    <div className="mb-[3rem] md:mb-[0px]">
                        <SurveyCard
                            imageSrc={marketTrend}
                            title="Crypto Market Trends and Predictions"
                            description="A market research firm in the crypto space conducts regular surveys to gather predictions and opinions on market trends, price movements, and potential upcoming developments."
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1  gap-12">
                    <div className="md:mt-[0px]">
                        <SurveyCard
                            imageSrc={realestate}
                            title="Real Estate Market Analysis"
                            description="Real estate developers leverage the platform to conduct market research on evolving housing preferences."
                        />
                    </div>
                    <SurveyCard
                        imageSrc={politicalImg}
                        title="Political Engagement Tracker"
                        description="A civic engagement group employs the platform to gauge public sentiment on political issues over time."
                    />
                </div>
            </div>
        </div>
    )
}


export default Cases