import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import CartCount from "./CartCount";

const NavBar = () => {
    return (
        <div className="w-full sticky top-0 bg-slate-200  shadow-sm z-30">
            <div className="py-4 border-b[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/">
                            <Image src="/Z-shop-black.svg" alt="Z_Shop logo" width={60} height={20} />
                        </Link>
                        <div className="hidden md:block">Search</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div><CartCount/></div>
                            <div>UserMenu</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar; 