'use client'


import Button from "@/components/Button";
import Heading from "@/components/products/Heading";
import { customHooks } from "@/hooks/customhooks";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import { formatCurrency } from "@/utils/formatCurrency";


const CartClient = () => {
    const { cartProducts, handleClearCart, cartTotalAmount } = customHooks()
    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">your cart is empty
                </div>
                <div>
                    <Link href={"/"}
                        className="text-slate-500 flex items-center  gap-1 mt-2">
                        <MdArrowBack size={20} />
                        <span>Start Shooping </span>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Heading title="Shoping Cart" center />
            <div className="grid grid-cols-5 text-sm gap-4 pb-2
                 mt-8 item-center">
                <div className="col-span-2 justify-self-start">
                    Product
                </div>
                <div className="justify-self-center">
                    Price
                </div>
                <div className="justify-self-center">
                    Quantity
                </div>
                <div className="justify-self-end">
                    Total
                </div>
            </div>
            <div>
                {
                    cartProducts && cartProducts.map((item) => (
                        <ItemContent key={item.id} item={item} />
                    ))
                }
            </div>
            <div className="border-t[1.5px] border-slate-200
           py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                    <Button
                        label="Clear Cart" onClick={() => {
                            handleClearCart()
                        }}
                        small outline />
                </div>
                <div className="text-sm flex flex-col items-start 
                          gap-1 ">
                    <div className="flex justify-between
                        w-full  text-base  font-semibold">
                        <span> SubTotal </span>
                        <span> {formatCurrency(cartTotalAmount)} </span>
                    </div>
                    <p className="text-slate-500">
                        Taxes and Shipping calculate at checkout
                    </p>
                    <Button label="Checkout" onClick={() => { }} />
                    <Link href="#"
                        className="text-slate-500 flex items-center gap-1" >
                        <MdArrowBack size={20} />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartClient;