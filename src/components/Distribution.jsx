import distribution from "../assets/distribution.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const rewardData70 = [
    {
        title: "Active Participants",
        delay:"500",
        percentage: "50%",
        description: "Directly allocated based on their engagement level and the quality of their responses. The more actively involved participants are, the greater their share of rewards."
    },
    {
        title: "Staked BULL Token Holders",
        delay:"700",
        percentage: "40%",
        description: "Participants who stake their BULL Tokens receive an additional portion of rewards, calculated based on their stake weight. This incentivizes long-term engagement and commitment to the platform."
    },
    {
        title: "Referral Program Participants",
        delay:"900",
        percentage: "10%",
        description: "Encourages community growth and network expansion by rewarding participants who refer others to the platform, with rewards allocated based on their referral count."
    }
];

const rewardData30 = [
    {
        title: "20% to the Staking Pool",
        delay:"500",
        description: "Reserved for participants who stake their BULL Tokens, supporting the platform and earning additional incentives."
    },
    {
        title: "5% for Token Burning",
        delay:"700",
        description: "This portion of rewards is dedicated to reducing the token supply, fostering scarcity, and potentially increasing the token's value."
    },
    {
        title: "5% to the Company Wallet",
        delay:"900",
        description: "Allocated to support platform development, operations, and future initiatives, ensuring continuous improvement and sustainability."
    }
];


const Distribution = () => {

    useEffect(() => {
        AOS.init({ duration:1000});
      }, [])

    return (
        <div className=" my-[4rem]">
            <h1 data-aos={"fade-up"} className="flex justify-center text-2xl md:text-4xl font-patua tracking-wide  text-center">Weighted Reward Calculation Mechanism</h1>
            <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-10 text-center max-w-[62.5rem] px-2 flex justify-center font-medium tracking-wide text-[#263238]">SurveyBull employs a sophisticated reward distribution mechanism, meticulously designed to ensure fairness and to uphold our commitment to rewarding participation while nurturing community growth. Our weighted approach to distributing rewards benefits both participants and stakeholders alike. Here's a breakdown of how it operates:</div>
            </div>
            <div data-aos={"fade-up"} className="flex justify-center my-10 px-5">
                <img src={distribution} />
            </div>
            <div  className="px-4 xl:grid xl:grid-cols-2 xl:gap-16 ">
                <div data-aos={"fade-up"} className="flex flex-col xl:h-[25rem] rounded-2xl ">
                    <div className="font-extrabold text-xl mt-6 px-4 text-[#3B82F6]">Allocation of 70% of Rewards</div>
                    <div className="flex-1 flex items-center px-4">
                        <div >
                            {rewardData70.map((x) => {
                                return (
                                    <div data-aos={"fade-up"} data-aos-delay={x.delay} >
                                        <div className="font-semibold my-3"> 💰 {x.title}({x.percentage})</div>
                                        <div className="my-3">{x.description}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div data-aos={"fade-up"} className="mt-6 xl:mt-0 flex flex-col xl:h-[25rem] rounded-2xl ">
                    <div className="font-extrabold text-xl mt-6 px-4 text-[#FACC15]">Allocation of 30% of Rewards</div>
                    <div className="flex-1 flex items-center px-4">
                        <div >
                            {rewardData30.map((x) => {
                                return (
                                    <div data-aos={"fade-up"} data-aos-delay={x.delay}>
                                        <div className="font-semibold my-4">💰 {x.title}</div>
                                        <div className="my-1">{x.description}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distribution