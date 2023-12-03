'use client'

import { customHooks } from "@/hooks/customhooks";
import { useRouter } from "next/navigation";
import { TiShoppingCart } from "react-icons/ti";

const CartCount = () => {
    const { cartTotalQty } = customHooks()
    const router = useRouter()
    return (
        <div className=" relative cursor-pointer"
            onClick={() => router.push('/cart')}>

            <div className="text-3xl">
                <TiShoppingCart />
            </div>
            <span className=" absolute  top-[-10px] right-[-10px]
            bg-red-300 text-white h-6 w-6 rounded-full flex items-center
            justify-center text-sm hover:bg-red-500 transition">
                {cartTotalQty}
            </span>
        </div>
    );
};

export default CartCount;