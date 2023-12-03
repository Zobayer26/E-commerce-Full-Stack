'use client'
import {Rating} from '@mui/material'
import { formatCurrency } from "@/utils/formatCurrency";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface ProductCartProps {
    data: any
}
const ProductCart: React.FC<ProductCartProps> = ({ data }) => {

const router =useRouter()

    return (
        <div onClick={()=>router.push(`/product/${data.id}`)}
        className="col-span-1 cursor-pointer border-[1.2px]
        border-slate-200 bg-slate-50 rounded-sm p-2 
        transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-full
            gap-1">

                <div className="aspect-square overflow-hidden relative w-full">
                    <Image src={data.images[0].image} alt={data.name} fill className="w-full h-full object-contain"/>
                </div>
                <div mt-4>
                    {truncateText(data.name)}
                </div>
                <div>
                   <Rating value={3.5} readOnly/>
                </div>
                <div>{data.reviews.length} reviews</div>
                <div className="font-semibold">{formatCurrency(data.price)}</div>
            </div>

        </div>
    );
};

export default ProductCart;