import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col gap-5 border-t-2 border-gray-300 py-5">
                <img src="/Towhid.png" className="w-20 h-20 rounded-full" />
                <p>Mohammad Towhidur Rahman Khan</p>
                <p>Product Manager</p>
                <div className="flex gap-5 py-5">
                    <FaLinkedin />
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                </div>
                <p>Copyright - 2025 - ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
};

export default Footer;