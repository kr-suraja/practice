
import Logo from "../assets/logo.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import reddit from "../assets/Reddit.svg"
import linkedin from "../assets/linkedin.svg"
import youtube from "../assets/youtube.svg"

const sectionsData = [
    { title: "Offering", links: ['Earn crypto', 'Stacking Reward', 'Bull token', 'Survey creation'] },
    { title: "Fundamentals", links: ['Tokenomics', 'World ID', 'Smart contract', 'Surveys'] },
    { title: "Helpful Links", links: ['FAQs', 'About us', 'Privacy', 'Terms and Conditions'] }
];


const Section = ({ title, links }) => {
    return (
        <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-black">{title}</p>
            <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a className="text-black transition hover:text-black/75" href="/">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};


const Footer = () => {

    return (
        <footer class="bg-white text-black">
            <div class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 xl:px-8 xl:pt-24">
                <div class="grid grid-cols-1 gap-8 xl:grid-cols-3">
                    <div>
                        <div class="flex justify-center text-teal-300 ">
                            <img src={Logo} />
                        </div>
                        <div className="flex justify-center ">
                            <div class="grid grid-cols-3 mt-8 gap-2 max-w-[200px] w-full justify-center">

                                <a className="flex justify-center">
                                    <img src={facebook} />
                                </a>
                                <a className="flex justify-center">
                                    <img src={instagram} />
                                </a>
                                <a className="flex justify-center">
                                    <img src={reddit} />
                                </a>
                                <a className="flex justify-center">
                                    <img src={youtube} />
                                </a>
                                <a className="flex justify-center">
                                    <img src={linkedin} />
                                </a>
                                <a className="flex justify-center">
                                    <img src={twitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:grid-cols-4">
                        {sectionsData.map((section, index) => (
                            <Section key={index} title={section.title} links={section.links} />
                        ))}
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-black">Contact Us</p>
                            <ul class="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        class="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="/"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-black shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span class="text-black transition group-hover:text-black/75">
                                            info@surveybull.com
                                        </span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        class="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="/"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-black shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>

                                        <span class="text-black transition group-hover:text-black/75">
                                           XXXXX90088
                                        </span>
                                    </a>
                                </li>
                                <li
                                    class="flex items-start justify-center gap-1.5 sm:justify-start"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-black shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <address class="-mt-0.5 not-italic text-black">
                                        xxxx
                                    </address>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="pt-6 mt-12 border-t border-gray-800">
                    <div class="text-center sm:flex sm:justify-between sm:text-left">
                        <p class="text-sm text-gray-400">
                            <span class="block sm:inline">All rights reserved.</span>
                        </p>
                        <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2024 Survey Bull
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer