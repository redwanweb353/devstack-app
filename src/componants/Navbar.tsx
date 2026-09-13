import { IoMenu } from 'react-icons/io5'
import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <nav className=" max-w-7xl mx-auto flex justify-between items-center py-5 mt-3 px-3 md:px-0">
                <span className='md:hidden flex '><IoMenu className='h-10 w-10' /> </span>
                <img className='md:flex hidden' src={Logo} alt="Logo" />

                <ul className=" gap-5 cursor-pointer hidden md:flex">
                    <li className="font-semibold cursor-pointer text-[#DB2777] "><a >Home</a></li>
                    <li className="font-semibold cursor-pointer "><a >Technologies</a></li>
                    <li className="font-semibold cursor-pointer "><a >Services</a></li>
                    <li className="font-semibold cursor-pointer "><a >About</a></li>
                    <li className="font-semibold cursor-pointer "><a >Contact</a></li>
                </ul>
                <img className='md:hidden flex w-28' src={Logo} alt="Logo" />
                <div className='flex  gap-5'>
                    <button className="  rounded-full ">Sign In</button>
                    <button className="btn bg-[#D91B7E] px-5 text-white rounded-full hover:text-[#f7d6e7] ">Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar