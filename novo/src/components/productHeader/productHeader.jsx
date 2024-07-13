import ProductHeaderPressables from "../productHeaderPressables/productHeaderPressables";
import ProductImage from "../productImage/productImage";

const ProductHeader = (params) => {
  return (
    <div className="flex flex-col gap-3 p-3 lg:content-center">
      <ProductImage id={params.id} imgUrl={params.imgUrl} />
      <ProductHeaderPressables id={params.id} imgUrl={params.imgUrl} />
    </div>
  );
};

export default ProductHeader;
