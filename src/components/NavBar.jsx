import { useState } from "react"
import Logo from "../assets/logo.svg"

const tabs = [
    {
        name: "Why Surveybull",
        id: "why"
    },
    {
        name: "Survey Building",
        id: "SurveyBuilding"
    },
    {
        name: "Earn Token",
        id: "EarnToken"
    },
    {
        name: "Distribution",
        id: "Distribution"
    }
]

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const MobileMenu = () => {

        return (
            <div class="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition xl:hidden" id="headlessui-popover-panel-:r16:" tabindex="-1" data-headlessui-state="open">
                <div class=" divide-y-2 divide-slate-100 rounded-lg bg-slate-100 shadow-lg ">
                    <div class="px-5 pb-6 pt-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <img src={Logo} />
                            </div>
                            <div class="-mr-2">
                                <button onClick={() => { setOpenMenu(false) }} class="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:bg-slate-700 dark:text-slate-200" type="button" data-headlessui-state="open">
                                    <span class="sr-only">Close menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" aria-hidden="true">
                                        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 py-6">
                        <div class="flex flex-col space-y-5 text-center text-sm dark:text-slate-300">
                            <div class="space-y-4">
                                {tabs.map((x) => {
                                    return <a className="block text-lg text-slate-700" href={`#${x.id}`} onClick={() => { setOpenMenu(false) }}>{x.name}</a>
                                })}
                                <button class="items-center appearance-none px-6 py-3 font-medium rounded-2xl relative text-white bg-[#5831C8] hover:bg-brand focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 flex w-full justify-center text-lg">Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        
        <div className="mx-auto w-full " >
            <div className="  mx-auto flex items-center justify-between  py-6 " >
                <div className=" p-2 xl:p-0 flex items-center">
                    <img src={Logo} />
                </div>
                <div class="block xl:hidden p-3" >
                    <button onClick={() => { setOpenMenu(true) }} class="inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 xl:hidden dark:bg-slate-700 dark:text-slate-200" type="button" aria-expanded="true" id="headlessui-popover-button-:Rm5m:" aria-controls="headlessui-popover-panel-:r16:">
                        <span class="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true">
                            <line x1="4" x2="20" y1="12" y2="12">
                            </line>
                            <line x1="4" x2="20" y1="6" y2="6">
                            </line><line x1="4" x2="20" y1="18" y2="18">
                            </line>
                        </svg>
                    </button>
                    {openMenu &&
                        <MobileMenu />}
                </div>
                <div className="hidden xl:flex justify-around items-center">

                <div className="hidden w-auto justify-around xl:block" >
                    {tabs.map((x) => {
                        return <a className="px-4 font-poppins cursor-pointer text-sm font-medium text-black hover:text-slate-700 lg:px-6 xl:text-base xl:px-8  dark:hover:text-slate-300" href={`#${x.id}`}  >{x.name}</a>
                    })}
                </div>
                <button className={"items-center appearance-none font-poppins tracking-wide px-6 py-3 text-sm font-medium rounded-3xl relative text-white bg-[#5831C8] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900 transition ease-in-out delay-50 hover:scale-105 hidden whitespace-nowrap xl:px-6 xl:block"}>
                    {"Get Started"}
                </button>
                    </div>
            </div>
        </div>
    )
}

export default NavBar