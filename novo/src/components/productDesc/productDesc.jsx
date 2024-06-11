import { Circle } from "@mui/icons-material";
import Check from "@mui/icons-material/Check";

const ProductDesc = ({ id, cat, subCat }) => {
    return (
        <section className="flex flex-col px-5 py-8 mx-3 w-fit font-light leading-7 rounded-xl border border-amber-400 border-solid bg-amber-400 bg-opacity-10">
            <div className="text-2xl leading-7 font-bold text-primary">{id}</div>
            <div className="text-sm font-medium tracking-normal leading-6 text-secondary">
                {cat} &gt; {subCat}
            </div>
            <div className="flex flex-col gap-2 mt-3 text-sm leading-5">
                <div className="flex gap-2"><Check fontSize="1" className="mt-2" /><p className="self-stretch text-md leading-7 text-neutral-500">This lightweight 2-person dome tent with a large dual layer ventilated door has enough space for you and a friend Water resistant</p></div>
                <div className="flex gap-2"> <Check fontSize="1" className="mt-2" /> <p className="self-stretch text-md leading-7 text-neutral-500">This lightweight 2-person dome tent with a large dual layer ventilated door has enough space for you and a friend Water resistant</p></div>
                <div className="flex gap-2"><Check fontSize="1" className="mt-2" /> <p className="self-stretch text-md leading-7 text-neutral-500">The 190T polyester with polyurethane on the tent body and the detachable rain fly help to ensure water does not get inside your tent Convenient features</p></div>
                <div className="flex gap-2"><Check fontSize="1" className="mt-2" /> <p className="self-stretch text-md leading-7 text-neutral-500">This 2-Man tent also features fiberglass poles Easy set up- with just 2 Fiberglass poles</p></div>
            </div>
        </section>
    );
}

export default ProductDesc;