import Container from "@/components/Container";
import ProductDetails from "@/components/products/ProductDetails";
// import { singleProduct } from "@/utils/singleProduct";
import ReviewList from "./ReviewList";
import { products } from "@/utils/products";


type productIdProps = {
    productId?: string
}

const SingleProductPage = ({ params }: { params: productIdProps }) => {
    // console.log(params.productId)
    const singleProduct= products.find((item)=>item.id ===params.productId)
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={singleProduct} />
                <div>add rating</div>
                <ReviewList product={singleProduct}/>
            </Container>
        </div>
    );
};

export default SingleProductPage;