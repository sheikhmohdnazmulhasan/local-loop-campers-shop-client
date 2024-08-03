import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/features/products/product.api";

const PrdctDetails = () => {
    const { id } = useParams();
    const { data: item, isError, isLoading } = useGetProductsQuery({ id });

    if (isLoading) return <div className="">Loading..</div>
    if (isError) return <div className="">Something Wrong</div>

    return (
        <div>
        </div>
    );
};

export default PrdctDetails;