import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { categotiesdata, CustomerServicesData } from "./FooterData";
import { MdFacebook } from 'react-icons/md';
import { FaGithub,FaLinkedin,FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200
        text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row 
                           justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        {categotiesdata.map((item) => (
                            <Link key={item.id} href={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Services</h3>
                        {CustomerServicesData.map((item) => (
                            <Link key={item.id} href={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </FooterList>
                    <div className=" w-full md:w-1/3 mb-6 md:mb-0 md:mr-4">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2 text-justify max-w-[400px] ">
                            Al our electronics store we are dedicated to providing the latest
                            and greatest devices and accessories to our customers with a
                            wide selection of phones Tvs laptops,watches and accessories
                        </p>
                        <p>
                            © {new Date().getFullYear()} Z-Shop all rights reserved
                        </p>
                    </div>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                            <Link href="#"><MdFacebook size={24} /></Link>
                            <Link href="#"><FaGithub size={24} /></Link>
                            <Link href="#"><FaLinkedin size={24} /></Link>
                            <Link href="#"><FaYoutube size={24} /></Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;