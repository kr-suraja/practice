import stakingW from "../assets/stakingW.svg"
import referEarnW from "../assets/referEarnW.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const data = [{
    imageSrc: stakingW,
    imageAlt: "stakingW",
    title: "Staking Rewards",
    subTitle: "By staking your BULL Tokens, you not only contribute to the stability and growth of the SurveyBull ecosystem but also unlock a stream of additional rewards. Here's how staking works:",
    sections: [
        { title: "Support Platform Growth ", text: "Staking your BULL Tokens demonstrates your commitment to the SurveyBull platform, contributing to its long-term sustainability and success." },
        { title: "Earn Additional Incentives ", text: "As a token staker, you become eligible to earn a share of rewards reserved specifically for participants who stake their tokens. The more tokens you stake, the greater your potential rewards." },
        { title: "Participate in Governance ", text: "Stakers may also have the opportunity to participate in governance decisions, helping shape the future direction of the platform." }
    ],
    reverse: false
},
{
    imageSrc: referEarnW,
    imageAlt: "referEarnW",
    title: "Referral Program",
    subTitle: "Invite others to join the SurveyBull community and reap the rewards through our referral program. Here's how you can benefit:",
    sections: [
        { title: "Expand the Community", text: "Encourage your friends, colleagues, and network to join SurveyBull and contribute to our vibrant community of participants." },
        { title: "Earn Rewards", text: "For every successful referral, you'll earn rewards based on the referral's activity on the platform. The more referrals you bring in, the more you stand to earn." },
        { title: "Foster Network Growth", text: "By actively promoting SurveyBull and sharing your positive experiences, you'll play a pivotal role in expanding our network and fostering community growth." },
    ],
    reverse: true
}]

const MobileViewCard = ({ data }) => {
    return (
        <div className=" bg-white rounded-2xl shadow-2xl my-3">
            <div className="px-5 py-3">
                <div className="text-center text-lg font-bold">
                    {data.title} 
                </div>
                <div className={"font-normal text-base  mt-3"}>{data.subTitle}</div>
                <div className="flex justify-center">
                    <div className="max-w-[180px] max-h-[200px] mt-5 ">
                        <img src={data.imageSrc} alt={"stakingW"} />
                    </div>
                </div>
                <div className="my-4">
                    {data.sections.map((x) => (
                        <div className="mt-2">
                            <div className="font-semibold text-base">{x.title}</div>
                            <div className="text-sm">{x.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Hooks = () => {

    useEffect(() => {
        AOS.init({ duration:1000});
      }, [])

    const contentContainerClass = "max-w-xl";
    const titleClass = " font-patua text-4xl mt-5";
    const subTitleClass = "font-normal text-base font-light mt-3";
    const sectionTitleClass = "font-semibold text-2xl";
    const sectionTextClass = "font-normal text-lg font-light mt-1";

    const ContentComponent = ({ imageSrc, imageAlt, title, subTitle, sections, reverse }) => (
        <div   className={reverse ? "flex flex-row-reverse justify-between py-[20px]" : "flex flex-row justify-between py-[80px]"}>
            <div data-aos={"fade-up"} className={contentContainerClass}>
                <div className={titleClass}>{title}</div>
                <div className={subTitleClass}>{subTitle}</div>

                <div className="my-5">
                    {sections.map((section, index) => (
                        <div key={index} className="my-5">
                            <div className={sectionTitleClass}>{section.title}</div>
                            <div className={sectionTextClass}>{section.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div data-aos={"fade-up"} className=" flex align-middle">
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    );

    return (
        <div className="my-[4rem]">
            <h1 data-aos={"fade-up"} className="flex justify-center text-2xl md:text-4xl  font-patua tracking-wide  text-center">Maximize Your Earnings : Staking and Referrals</h1>
            <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-10  px-2 text-center max-w-[1000px] flex justify-center font-medium tracking-wide text-[#263238]">Unlock additional avenues to boost your rewards beyond survey participation through SurveyBull's innovative staking and referral programs. Explore these opportunities to maximize your earnings and become an integral part of our thriving community.</div>
            </div>
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
            <div className=" xl:hidden mx-[20px] ">
                {data.map((element) => (
                    <MobileViewCard data={element} />
                ))}
            </div>
        </div>
    )
}

export default Hooks


