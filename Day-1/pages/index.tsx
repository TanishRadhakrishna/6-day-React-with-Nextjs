import Product from "@/components/product";
export default function Home() {
    return(
        <div>
            <Product name="Laptop" price={999.99} />
            <Product name="Smartphone" price={699.99} />
        </div>
    );
};