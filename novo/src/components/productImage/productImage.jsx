import Image from "next/image";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const ProductImage = (params) => {
    return (
        <div className="flex flex-col">
            <div className='rounded-lg overflow-hidden'>
                <div className='w-[366px] h-[366px] relative'>
                    <Image src={params.imgUrl}
                        style={{ objectFit: "cover" }}
                        fill
                        alt="image"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center gap-1 p-2">
                <RadioButtonCheckedIcon fontSize="10" />
                <RadioButtonUncheckedIcon fontSize="10" />
                <RadioButtonUncheckedIcon fontSize="10" />
                <RadioButtonUncheckedIcon fontSize="10" />
            </div>
        </div>
    );
}

export default ProductImage;