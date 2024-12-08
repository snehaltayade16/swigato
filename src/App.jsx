import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./images/logo.png";
import Image from "./images/subHeaderImg.jpg";
import { FaSearch} from "react-icons/fa";



const Header = () => {
    const headerOptionsArray = [
        {
            title: "Categories",
            // "image":,
            // "path":,
        },
        {
            title: "Cart",
            // "image":,
            // "path":,
        },
        {
            title: "Profile",
            // "image":,
            // "path":,
        },
    ];
    return (
        <header className=''>
            <div className="flex items-center justify-center bg-[#ff5050] py-3 px-2.5">
                <p className="text-[#FFFFFF] font-medium text-base">
                    Get delicious food delivered to your hostel!
                </p>
            </div>
            <div className="">
                <div className="flex items-center justify-between py-4 px-72 border-[#e6e6e6] border-b">
                    {/* <p>sgagdh</p> */}
                    <img src={Logo} className="h-12" />
                    <div className='w-[432px] max-w-96 flex items-center '>
                        
                        <FaSearch  className='absolute text-zinc-300 text-3xl p-2'/>
                        <form className='w-full'>
                            <input type="text" placeholder="Search for products..." className='bg-[#f2f2f2] py-2 pr-3 pl-10 w-full rounded-md bg-[#f2f2f2] text-base'></input>
                        </form>
                    </div>
                    <div>
                        <ul className='flex '>
                            {
                            headerOptionsArray.map((item) => {
                                return(
                                    <>
                                        <li className='text-[#4d4d4d] font-medium font-serif ml-2 px-2 py-1'>{item.title}</li>
                                    </>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-4 px-72 h-40  border-[#e6e6e6] border-b-2'>
                <div className='flex w-full h-full overflow-auto'>
                    <div className='bg-red-200 h-full w-[calc(100%/3)] mr-4 rounded-md'>
                        <img src={Image} className='w-full h-full rounded-md overflow-hidden'></img>
                    </div>
                    <div className='bg-red-200 h-full w-[calc(100%/3)] mr-4 rounded-md'>
                        <img src={Image} className='w-full h-full rounded-md overflow-hidden'></img>
                    </div>
                    <div className='bg-red-200 h-full w-[calc(100%/3)]  rounded-md'>
                        <img src={Image} className='w-full h-full rounded-md overflow-hidden'></img>
                    </div>
                    {/* <div className='h-full w-20 bg-fuchsia-200 mr-4'>img1</div>
                    <div className='h-full w-20 bg-red-400 mr-4'>img2</div>
                    <div className='h-full w-20 bg-orange-300 mr-4'>img3</div>   */}
                </div>
            </div>
        </header>
    );
};

const MainSection =() =>
{
    return(
    <main className='px-72 h-full w-full flex'>
        <div className='w-1/4 border-r h-full'>menu</div>
        <div className='w-2/4 border-r h-full'>items</div>
        <div className='w-1/4 border-r h-full'>cart</div>
    </main>
    )
    
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <MainSection />
        </div>
    );
};

export default AppLayout;
