import { useGetProductsQuery } from "../../redux/features/products/product.api";

const AllProducts = () => {

    const { data, isError, isLoading } = useGetProductsQuery(undefined);

    console.log({ data, isError, isLoading });

    return (
        <div>
            hello
        </div>
    );
};

export default AllProducts;