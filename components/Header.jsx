import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"

function Header(){
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* left */}
                    <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
                        <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
                    </div>
                    <div className="relative  w-10 lg:hidden  flex-shrink-0 cursor-pointer">
                        <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain"/>
                    </div>

                {/* middle */}
                <div className="max-w-xs"> 
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="pointer-events-none flex items-center absolute pl-3 inset-y-0">
                            <SearchIcon className="h-5 w-5 text-gray-500 "></SearchIcon>
                        </div>
                        <input type="text" className=" rounded-md bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black  focus:border-black" name="" placeholder="Search" id="" />
                    </div>
                </div>
                {/* right */}
                <div className="flex items-center space-x-4 justify-end">
                    <HomeIcon className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden"/>
                    <div className="navBtn relative">
                        <PaperAirplaneIcon className="navBtn rotate-45"/>    
                        <div className='absolute -top-1 -right-2 w-5 h-5 text-sm flex items-center justify-center text-white animate-pulse rounded-full bg-red-500 '>3 </div>
                    </div>
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I74ypVIb3XXmvwWLa8xd7Ox0l9KJxnxS06T5fM=s32-c-mo" className="h-10 rounded-full cursor-pointer" alt="" />

                </div>

            </div>

        </div>
    )
}
export default Header;