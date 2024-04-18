import behind from "../assets/behind.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const content = [
    {
        title: "User-Friendly Interface",
        text: " Our intuitive interface allows you to create surveys with ease. Drag-and-drop functionality, customizable templates, and real-time previews ensure a smooth and hassle-free survey building process."
    },
    {
        title: "Flexible Question Types",
        text: "SurveyBull offers a wide range of question types to suit your needs, from multiple-choice and open-ended questions to Likert scales and matrix questions. Customize each question to gather the precise data you require."
    },
    {
        title: "Dynamic Logic and Branching",
        text: "Tailor your surveys to each respondent with dynamic logic and branching. Show or hide questions based on previous responses, creating a personalized experience for survey takers and gathering more relevant data."
    },
    {
        title: "Multi - Platform Compatibility",
        text: "Build surveys that work seamlessly across devices and platforms. Whether your audience is accessing surveys on desktop, mobile, or tablet devices, SurveyBull ensures a consistent and user-friendly experience."
    },
    {
        title: "Advanced Analytical Tools",
        text: "Gain valuable insights from your survey data with SurveyBull's advanced analytical tools. Visualize responses with charts and graphs, analyze trends over time, and export data for further analysis or reporting."
    },
    {
        title: "Automated Distribution",
        text: "Easily distribute your surveys to your target audience with SurveyBull's automated distribution tools. Share surveys via email, social media, or embed them on your website, reaching your audience wherever they are."
    },
]


const CardComponent = ({ item }) => {
    return (
        <div data-aos={"zoom-in-up"} className="mt-10 xl:mt-0 flex justify-center">
            <div className="max-w-[340px] pb-4 flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]   border rounded-3xl "  >
                <div className="relative w-full rounded-t-lg h-[150px] bg-white">
                    <img className="absolute  w-full rounded-t-xl " height={200} src={behind} alt={"cardimg"} />
                    <div class="relative w-full h-[130px] flex  items-center justify-center">
                        <h1 class="flex  items-center justify-center text-2xl text-white text-center font-medium">{item.title}</h1>
                    </div>
                </div>
                <div className="flex-1  flex  px-4 text-center justify-center  items-center text-xl font-light tracking-wide text-[#263238]">
                    {item.text}
                </div>
            </div>
        </div>
    )
}

const SurveyBuilding = () => {

    useEffect(() => {
        AOS.init({ duration:1000});
      }, [])

    return (
        <div className=" my-[4rem] xl:mb-[4rem]">
            <h1 data-aos={"fade-up"} className="flex justify-center text-2xl md:text-4xl text-center font-patua tracking-wide  ">Effortless Survey Building with SurveyBull</h1>
            <div className="flex justify-center">
                <div  data-aos={"fade-up"} className="mt-10 text-center max-w-[1000px] flex justify-center font-medium tracking-wide text-[#263238] px-4">SurveyBull simplifies the process of creating surveys, empowering users with intuitive tools and robust features. Whether you're a seasoned researcher or a novice user, our platform offers a seamless experience from start to finish. Here's how we make survey building effortless</div>
            </div>
            <div className="lg:grid lg:grid-cols-2  xl:grid xl:grid-cols-3 xl:gap-y-12 xl:justify-items-stretch xl:justify-between my-12 px-4">
                {
                    content.map((item) => {
                        return <CardComponent item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default SurveyBuilding