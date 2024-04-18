
import tokonomics from "../assets/tokonomics.svg"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const cardData = [
    {
        title: "Title 1",
        text: "Text 1",
        color: "#880808"
    },
    {
        title: "Title 2",
        text: "Text 2",
        color: "#880808"
    },
    {
        title: "Title 3",
        text: "Text 3",
        color: "#880808"
    },
    {
        title: "Title 4",
        text: "Text 4",
        color: "#880808"
    },
    {
        title: "Title 5",
        text: "Text 5",
        color: "#880808"
    },
    {
        title: "Title 6",
        text: "Text 6",
        color: "#880808"
    },
    {
        title: "Title 7",
        text: "Text 7",
        color: "#880808"
    },
    {
        title: "Title 8",
        text: "Text 8",
        color: "#880808"
    },

]

const Card = ({ data }) => {
    return (
        <div data-aos={"fade-up"} className={`w-full mt-4 border border-l-4 shadow-xl rounded-xl `} style={{ borderLeftColor: data.color }}>
            <div className="px-4 py-2">
                {data.title}
            </div>
            <div className="px-4 py-2">{data.text}</div>
        </div>
    )
}

const Tokonomics = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div className=" my-[6rem]">
            <h1 data-aos={"fade-up"} className="text-2xl md:text-4xl flex justify-center text-center font-patua tracking-wide  text-[#484848] ">Tokenomics</h1>
            <div className="md:flex mt-20 px-2  ">
                <div data-aos={"fade-up"} className="w-full flex items-center">
                    <img src={tokonomics} />
                </div>
                <div className=" max-w-[500px] px-3 md:pl-6 w-full">
                    {cardData.map((item) => {
                        return (
                            <Card data={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tokonomics