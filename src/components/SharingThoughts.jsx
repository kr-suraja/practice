import crafting from "../assets/craftings.svg"
import reward from "../assets/reward1.svg"
import participation from "../assets/participation.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../@/components/ui/dialog"

const imgContainerClass = "xl:max-w-[300px] my-5";
const textClass = "text-l text-center mt-12 font-bold px-5 xl:px-0";
const descriptionClass = "text-l text-center mt-8 px-5 xl:px-0";

const Dialogcard = (data) => {
    return (
        <Dialog >
            <DialogTrigger>
                {data.trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                    <div className="py-4 px-6">
                        <DialogDescription className={"text-[#263238]"}>
                            {data.description}
                        </DialogDescription>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

const Card = ({ src, alt, text, description, delay }) => (
    <div data-aos={"zoom-in"} data-aos-delay={delay}  className={imgContainerClass}>
        <div className="flex justify-center">
            <img width={140} height={140} src={src} alt={alt} />
        </div>
        <div className={textClass}>{text}</div>
        <div className={descriptionClass}>{description}</div>
        <div className={descriptionClass} style={{ color: "#4E55FF" }}>Learn more</div>
    </div>
);

const dialogData = [
    {
        trigger: <Card src={participation} alt={"participation"} text={"Participation Rewards"} description={"Participate in surveys on SurveyBull to earn tokens for your time and effort."} delay={"500"} />,
        title: "Participation Rewards",
        description: "Participate in surveys on SurveyBull to earn tokens for your time and effort. Our smart contracts guarantee transparency and fairness in reward distribution, ensuring you're compensated fairly for your contributions. Trust us for a rewarding survey experience."
    },
    {
        trigger: <Card src={crafting} alt={"crate"} text={" Transparent Process"} description={"Our reward system, built on smart contracts, securely holds tokens until distribution to participants."} data={"700"} />,
        title: "Transparent Process",
        description: "Our reward system, built on smart contracts, securely holds tokens until distribution to participants. Surveys close and rewards are calculated automatically, following predefined criteria like response quality and completeness. This ensures a transparent and efficient distribution process."
    },
    {
        trigger: <Card src={reward} alt={"reward"} text={"Claiming Your Rewards"} description={"After a survey closes, participants are alerted on the SurveyBull platform about available rewards."} delay={"900"} />,
        title: "Claiming Your Rewards",
        description: "After a survey closes, participants are alerted on the SurveyBull platform about available rewards. Claiming rewards is easy: interact with the smart contract via our user-friendly interface to begin. Trust that our transparent and deterministic distribution logic ensures you receive your fair share of tokens based on your contributions."
    }
];


const SharingThoughts = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className=" my-[4rem] xl:my-[4rem]">
            <h1 data-aos={"fade-up"} className="flex justify-center text-center text-2xl md:text-4xl font-patua tracking-wide  ">Earn tokens for sharing your thoughts</h1>
            <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-10 text-center max-w-[1000px] px-2 flex justify-center font-medium tracking-wide text-[#263238]">At SurveyBull, we value your opinions and insights. That's why we've created an opportunity for you to earn tokens simply by sharing your thoughts through surveys. Our platform offers a seamless experience where your contributions are not only appreciated but also rewarded. Here's how it works</div>
            </div>
            <div className=" xl:flex mt-10  xl:justify-between px-4 ">
                {dialogData.map((dialog, index) => (
                    <div className="flex justify-center">
                    <Dialogcard
                        key={index}
                        trigger={dialog.trigger}
                        title={dialog.title}
                        description={dialog.description}
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SharingThoughts

