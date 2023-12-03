import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductCart from "@/components/products/ProductCart";
import { products } from "@/utils/products";
// import { truncateText } from "@/utils/truncateText";

const Home = () => {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
      </Container>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
       xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((item: any) => {
          return <ProductCart data={item} />
        })}
      </div>
    </div>
  );
};

export default Home;
//{truncateText(item.name)}