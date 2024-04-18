import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={
      " ml-3 h-8 w-8  "
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

const Invite = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div className='max-w-[1300px] mx-auto py-1'>
      <div className='xl:flex xl:justify-around py-8 items-center'>
        <div data-aos={"fade-up"} className='font-extrabold flex text-center text-3xl text-white'> Start Earning Rewards Or Get Insightful Data ?</div>
        <div className='flex justify-center  mt-5 xl:mt-0'>
          <button data-aos={"fade-up"} className={"items-center flex px-6 py-3 text-sm font-medium rounded-md relative text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 transition ease-in-out delay-50 hover:scale-105 whitespace-nowrap xl:px-6"}>
            <div className="flex items-center font-medium text-lg">Get Started</div> <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Invite