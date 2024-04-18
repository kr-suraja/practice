import blockchainW from "../assets/blockchainW.svg"
import verifiedProfile from "../assets/verifiedProfile.svg"
import eyeVerification from "../assets/eyeVerification.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const imgContainerClass = "xl:max-w-[300px] mt-10 mb-5";
const textClass = "text-l text-center mt-12 font-bold px-5 xl:px-0";
const descriptionClass = "text-l text-center mt-8 px-5 xl:px-0";

const Card = ({ src, alt, text, description, delay }) => (
    <div data-aos={"fade-up"} data-aos-delay={delay} className={imgContainerClass}>
        <div className="flex justify-center">
            <img width={140} height={140} src={src} alt={alt} />
        </div>
        <div className={textClass}>{text}</div>
        <div className={descriptionClass}>{description}</div>
    </div>
);

const cardData = [
    {
        src: eyeVerification,
        alt: "eyeVerification",
        text: "Authenticity Guaranteed",
        description: "Say farewell to the headache of fake reviews. SurveyBull's implementation of the WorldID protocol guarantees that every review collected is from a genuine individual, providing surveyors with authentic insights they can rely on.",
        delay:'400'
    },
    {
        src: verifiedProfile,
        alt: "verifiedProfile",
        text: "Uniquely Human Responses",
        description: "SurveyBull ensures that only unique human responses are included in your survey data, eliminating the noise of duplicate or automated submissions and delivering high-quality, actionable insights.",
        delay:'600'
    },
    {
        src: blockchainW,
        alt: "blockchainW",
        text: "On-Chain Verification",
        description: "With SurveyBull, surveyors can verify the authenticity of every response directly on the blockchain, providing an immutable record of the survey data and enhancing transparency and trust in the process.",
        delay:'800'
    }
];

const Surveyor = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=" my-[4rem] xl:my-[4rem]">
            <h1 data-aos={"fade-up"} className="flex justify-center text-center text-2xl md:text-4xl font-patua tracking-wide mt-5  ">Revolutionize Surveying: Say Goodbye to Fake Reviews with On-Chain Verifiable Proof of Personhood</h1>
            <div className="flex justify-center">
                <div data-aos={"fade-up"} className="mt-24 text-center max-w-[1000px] px-2 flex justify-center font-medium tracking-wide text-[#263238]">At SurveyBull, we're dedicated to equipping surveyors with the tools they need to gather authentic data and drive informed decisions. With pioneering WorldID protocol, we're eradicating fake reviews and unreliable responses, ensuring that surveyors receive only unique, human-generated feedback that is verifiable on the blockchain.</div>
            </div>
            <div className=" xl:flex mt-24 justify-between px-4 ">
                {
                    cardData.map((x) => {
                        return (
                            <Card src={x.src} alt={x.alt} text={x.text} description={x.description} delay={x.delay} />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Surveyor

