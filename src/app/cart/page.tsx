import Container from "@/components/Container";
import CartClient from "./CartClient";
import SetQuantity from "@/components/products/SetQuantity";


const CartPage = () => {
    return (
        <div className="pt-8">
            <Container>
               <CartClient/> 
            </Container>
        </div>
    );
};

export default CartPage;