import Image from "next/image";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const ProductImage = (params) => {
  return (
    <div className="flex flex-col lg:w-fit lg:self-center">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-[366px] w-[366px] lg:h-[640px] lg:w-[640px] lg:self-center">
          <Image
            src={params.imgUrl}
            style={{ objectFit: "cover" }}
            fill
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-1 p-2 lg:w-3/5 lg:self-center">
        <RadioButtonCheckedIcon fontSize="10" />
        <RadioButtonUncheckedIcon fontSize="10" />
        <RadioButtonUncheckedIcon fontSize="10" />
        <RadioButtonUncheckedIcon fontSize="10" />
      </div>
    </div>
  );
};

export default ProductImage;
