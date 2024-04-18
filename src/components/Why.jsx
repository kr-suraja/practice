import blockchainW from "../assets/blockchainW.svg"
import verifiedW from "../assets/verifiedW.svg"
import compensationW from "../assets/compensationW.svg"
import regulationW from "../assets/regulationW.svg"
import integrationW from "../assets/integrationW.svg"
import approchW from "../assets/approchW.svg"
import collaborationW from "../assets/collaborationW.svg"
import gate from "../assets/gate.svg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../@/components/ui/carousel"
import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

const Why = () => {

  useEffect(() => {
    AOS.init({ duration:1000});
  }, [])

  const column1Item = [
    { src: blockchainW, alt: "blockchainW", title: "Blockchain Transparency", description: "We leverage decentralized blockchain technology to ensure transparency and accountability in data transactions." },
    { src: verifiedW, alt: "verifiedW", title: "Verified Human Contributors ", description: "Through the integration of the WorldCoin protocol, we authenticate each data contributor, eliminating the risk of fake or duplicate submissions and ensuring the integrity of the data." },
    { src: compensationW, alt: "compensationW", title: "Fair Compensation", description: "Our platform rewards data providers fairly and promptly with BULL Tokens, providing tangible incentives for their valuable contributions and promoting a sustainable data economy." },
    { src: integrationW, alt: "integrationW", title: "Seamless Integration", description: "Our SDK enables easy integration of decentralized surveys into any Web2 or Web3 product, ensuring a smooth transition." },
  ];
  const column2Item = [
    { src: gate, alt: "gate", title: "Token Gated Surveys", description: "Our platform employs a technique wherein only individuals possessing a specific token, along with the requisite amount, are permitted to participate in the survey." },
    { src: regulationW, alt: "regulationW", title: "Compliance with Regulations", description: "Our platform adheres to stringent data protection regulations like GDPR, safeguarding user rights and privacy." },
    { src: approchW, alt: "approchW", title: "Inclusive Approach", description: " From traditional platforms to emerging Web3 applications, we empower a diverse range of platforms to embrace transparent and decentralized survey mechanisms." },
    { src: collaborationW, alt: "collaborationW", title: "Industry Collaboration", description: "We facilitate collaboration with existing data brokers, incentivizing their adoption of our system and ensuring a sustainable decentralized survey ecosystem." },
  ];


  const mobileItem = [...column1Item, ...column2Item]

  const FlipCard = ({ imageSrc, title, description }) => {
    return (
      <div data-aos={"fade-up"} class="flex h-fit items-center justify-center bg-white">
        <div class="group h-[18.75rem] w-[16.875rem] [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0 ">
              <div className="flex flex-col items-center h-full justify-center">

                <img class="h-[150px] w-[150px] mx-auto " src={imageSrc} alt="" />
                <div className="mt-10 text-center font-semibold" >{title} </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-[#5831C8]/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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

  return (

    <div className=" my-[4rem] xl:my-[4rem]">
      <h1 data-aos={"fade-up"} className=" text-2xl xl:text-4xl flex justify-center font-medium  font-patua tracking-wider leading-8  text-[#484848]">WHY SURVEYBULL ?</h1>

      <div className="hidden  xl:visible xl:flex flex-col xl:flex-row  justify-between my-16">
        {column1Item.map((item, index) => (
          <FlipCard imageSrc={item.src} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="hidden  xl:visible xl:flex flex-col xl:flex-row  justify-between my-16">
        {column2Item.map((item, index) => (
          <FlipCard imageSrc={item.src} title={item.title} description={item.description} />
        ))}
      </div>
      <div>
        <div className="xl:hidden flex items-center justify-center p-4 xl:px-[2rem] ld:px-[2rem]">
          <Carousel
            opts={{
              align: "start"
            }}
            className="w-[100%] mt-3 p-2"
          >
            <CarouselContent>
              {mobileItem.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/3 xl:basis-1/4 py-1 px-2"
                >
                  <FlipCard imageSrc={item.src} title={item.title} description={item.description} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex rounded-lg bg-button-start hover:bg-button-end outline-none border-none text-text-gradient_btn hover:text-text-gradient_btn w-6 h-6 lg:left-[-1rem] xl:left-[-2rem] left-[1rem]" />
            <CarouselNext className="flex rounded-lg bg-button-start hover:bg-button-end outline-none border-none text-text-gradient_btn hover:text-text-gradient_btn w-6 h-6 lg:right-[-1rem] xl:right-[-2rem] right-[1rem]" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Why