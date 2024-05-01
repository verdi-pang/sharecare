import ProductHeaderPressables from "../productHeaderPressables/productHeaderPressables";
import ProductImage from "../productImage/productImage";

const ProductHeader = () => {
    return (
        <div className="flex flex-col gap-3">
            <ProductImage />
            <ProductHeaderPressables />
        </div>
    );
}

export default ProductHeader;