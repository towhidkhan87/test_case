import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div>
            <div className="w-full bg-white z-50 shadow-xl border-gray-300 ">
                <div className="flex justify-between items-center w-11/12 mx-auto py-5">
                    <img className='w-20 h-20 rounded-full' src="/Towhid.png" />
                    <div className="flex justify-between items-center gap-5 lg:gap-20 py-5">
                        <nav className="hidden lg:flex gap-20">
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/'}>Home</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/about'}>About Me</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/portfolio'}>Portfolio</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/contact'}>Contact</Link></p>
                        </nav>
                        <button
                            className="rounded-lg bg-gray-100 px-8 py-4 text-red-500 shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-500 hover:text-white hover:font-semibold"><Link to={'/contact'}>Hire
                            Me</Link></button>
                        <FaBarsStaggered className='text-2xl lg:hidden' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;