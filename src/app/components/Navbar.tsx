import Image from "next/image";

export default function Navbar(){
    return (
        <div className="h-[88px]">
            <div className="border-l-1 min-h-screen absolute left-[250px] text-[#DBDBDB] max-xl:hidden"></div>
            <div className="pl-[22px] pr-[48px] flex items-center">
                <div className="flex items-center pt-[32px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-[9px]">
                        <path opacity="0.6" d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z" fill="#5030E5"/>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#5030E5"/>
                        <path opacity="0.4" d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z" fill="#5030E5"/>
                    </svg>
                    <p className="text-[#0D062D] font-semibold text-lg mr-[46px] w-[98px] max-lg:hidden">Project M.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none" className="cursor-pointer mr-[74px] max-xl:hidden">
                        <path d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z" fill="#787486"/>
                        <path d="M12.5 17.225C12.3417 17.225 12.1834 17.1667 12.0584 17.0417L6.62502 11.6083C5.74169 10.725 5.74169 9.27499 6.62502 8.39165L12.0584 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1834 3.19999 13.1834 3.59999 12.9417 3.84165L7.50836 9.27499C7.10836 9.67499 7.10836 10.325 7.50836 10.725L12.9417 16.1583C13.1834 16.4 13.1834 16.8 12.9417 17.0417C12.8167 17.1583 12.6584 17.225 12.5 17.225Z" fill="#787486"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none" className="cursor-pointer mr-[74px] xl:hidden">
                        <g transform="translate(26, 0) scale(-1, 1)">
                            <path d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z" fill="#787486"/>
                            <path d="M12.5 17.225C12.3417 17.225 12.1834 17.1667 12.0584 17.0417L6.62502 11.6083C5.74169 10.725 5.74169 9.27499 6.62502 8.39165L12.0584 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1834 3.19999 13.1834 3.59999 12.9417 3.84165L7.50836 9.27499C7.10836 9.67499 7.10836 10.325 7.50836 10.725L12.9417 16.1583C13.1834 16.4 13.1834 16.8 12.9417 17.0417C12.8167 17.1583 12.6584 17.225 12.5 17.225Z" fill="#787486"/>
                        </g>
                    </svg>
                </div>
                <div className="flex xl:items-center xl:justify-between justify-end w-full">
                    <div className="flex relative pt-[22px] max-xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none" className="absolute top-8 left-[17px]">
                            <path d="M11.3417 19.25C16.1512 19.25 20.0501 15.3512 20.0501 10.5417C20.0501 5.7322 16.1512 1.83334 11.3417 1.83334C6.53225 1.83334 2.63339 5.7322 2.63339 10.5417C2.63339 15.3512 6.53225 19.25 11.3417 19.25Z" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.9667 20.1667L19.1334 18.3333" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input className="bg-[#F5F5F5] w-[417px] h-[44px] pl-[55px] text-sm rounded-md text-[#787486]" placeholder="Search for anything..."/>
                    </div>
                    <div className="flex items-center pt-[32px]">
                        <div className="flex gap-[24px] max-xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 2V5" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 2V5" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.5 9.09H20.5" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.9955 13.7H12.0045" stroke="#787486" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.29431 13.7H8.30329" stroke="#787486" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.29431 16.7H8.30329" stroke="#787486" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.9955 13.75H12.0045" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-[50px]">
                                <path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10"/>
                                <circle cx="18" cy="4" r="3" fill="#D8727D"/>
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <div className="text-right mr-[22px]">
                                <p className="text-base leading-none">Anima Agrawa</p>
                                <p className="text-sm text-[#787486]">U.P, India</p>
                            </div>
                            <Image src={'/pfp.png'} height={38} width={38} alt="pfp" className="mr-[10px]"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M9.00002 12.6C8.47502 12.6 7.95002 12.3975 7.55252 12L2.66251 7.11001C2.44501 6.89251 2.44501 6.53251 2.66251 6.31501C2.88001 6.09751 3.24001 6.09751 3.45751 6.31501L8.34752 11.205C8.70752 11.565 9.29252 11.565 9.65252 11.205L14.5425 6.31501C14.76 6.09751 15.12 6.09751 15.3375 6.31501C15.555 6.53251 15.555 6.89251 15.3375 7.11001L10.4475 12C10.05 12.3975 9.52502 12.6 9.00002 12.6Z" fill="#292D32"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}