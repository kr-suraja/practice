import { useState } from "react"
import register from "../assets/register.svg"
import staking from "../assets/staking.svg"
import refer from "../assets/Refer.svg"

function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={
            "mt-0.5 h-6 w-6 -ml-1 "
        }>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            />
        </svg>
    );
}

const content = {
    register: {
        image: register,
        title: "Register on Our Platform for Rewards",
        description: "To register for rewards on our platform, users must possess a World ID. After signing up and completing their profile with the World ID, users need to authenticate with the Orb to access survey participation. Participation in surveys earns rewards for authenticated Orb World ID users"
    },
    stake: {
        image: staking,
        title: "Stack More to Earn More",
        description: "Stake Tokens on our platform to earn rewards. Staking rewards are given for holding and supporting the Token. Additionally, Token stackers receive extra rewards from surveys they participate in, with 50% of survey rewards allocated to them based on their staking percentage."
    },
    refer: {
        image: refer,
        title: "Refer and Earn:",
        description: "Increase your earnings by referring others to our platform. You'll earn a bonus based on the number of successful referrals you make. 10% of survey rewards are dedicated to referral bonuses, with the amount you earn determined by your referral percentage – the more people you refer, the more you can earn."
    }


};


const ContentComponent = ({ content }) => {
    return (
        <div>
            <div className="font-bold my-2 text-lg">{content.title}</div>
            <div className="flex justify-center">
                <div className="max-w-[350px] max-h-[350px] w-full h-full">
                    <img src={content.image} alt="Your Image" class="" />
                </div>
            </div>
            <div className="text-base text-[#232222] tracking-[1px] pt-12">{content.description}</div>
        </div>
    );
};

const MobileMenu = [
    {
        image: register,
        title: "Register on Our Platform for Rewards",
        description: "To register for rewards on our platform, users must possess a World ID. After signing up and completing their profile with the World ID, users need to authenticate with the Orb to access survey participation. Participation in surveys earns rewards for authenticated Orb World ID users"
    },
    {
        image: staking,
        title: "Stack More to Earn More",
        description: "Stake Tokens on our platform to earn rewards. Staking rewards are given for holding and supporting the Token. Additionally, Token stackers receive extra rewards from surveys they participate in, with 50% of survey rewards allocated to them based on their staking percentage."
    },
    {
        image: refer,
        title: "Refer and Earn:",
        description: "Increase your earnings by referring others to our platform. You'll earn a bonus based on the number of successful referrals you make. 10% of survey rewards are dedicated to referral bonuses, with the amount you earn determined by your referral percentage – the more people you refer, the more you can earn."
    }
]

const MobileViewCard = ({ data }) => {
    return (
        <div className=" bg-white rounded-2xl shadow-2xl my-3 mx-6 mt-8">
            <div className="px-5 py-3">
                <div className="text-center text-lg font-bold">
                    {data.title}
                </div>
                <div className="flex justify-center">
                    <div className="max-w-[180px] max-h-[180px] w-full h-full mt-5 ">
                        <img src={data.image} alt={"preHook"} />
                    </div>
                </div>
                <div className="my-4">
                    <div className="text-sm text-[#232222] tracking-[1px] ">{data.description}</div>
                </div>
            </div>
        </div>
    )
}



const User = () => {

    const [section, setSection] = useState("register")

    const btnClass = "my-3 border px-3 py-2 text-start flex justify-between items-center rounded-md border-solid max-w-[300px] w-full border-gray-600"
    const shadowClass = "shadow-[0px_2px_8px_rgba(79,79,255,0.1),_0px_4px_12px_rgba(59,130,246,0.5),_0px_8px_28px_rgba(79,79,255,0.1)]"

    return (

        <div class="flex  mt-[80px] mb-[80px]">
            <div class="flex-1 flex items-center ">
                <div className="ml-60px w-full">
                    <div className="flex justify-center xl:justify-start font-bold text-3xl xl:text-4xl mt-5">
                        Earn tokens for sharing
                    </div>
                    <div className="flex justify-center xl:justify-start font-bold text-3xl xl:text-4xl mt-2">
                        your thoughts
                    </div>
                    <div className=" xl:hidden mt-[30px]">
                        {MobileMenu.map((x) => {
                            return (
                                <MobileViewCard data={x} />
                            )
                        })}
                    </div>
                    <div className="hidden xl:block my-10 " >
                        <div>
                            <button className={`${btnClass} ${section === "register" && shadowClass}`}
                                onClick={() => setSection("register")}>
                                <div className="flex items-center">Register on Platform</div> <ArrowIcon /> </button>
                        </div>
                        <div>
                            <button className={`${btnClass} ${section === "stake" && shadowClass}`}
                                onClick={() => setSection("stake")}
                            ><div className="flex items-center">Stack More to Earn More</div> <ArrowIcon /> </button>
                        </div>
                        <div>
                            <button className={`${btnClass} border-gray-600 ${section === "refer" && shadowClass}`}
                                onClick={() => setSection("refer")}
                            ><div className="flex items-center">Refer And Earn</div> <ArrowIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden xl:block flex-1 relative ">
                <ContentComponent content={content[section]} />
            </div>
        </div>
    )
}

export default User


