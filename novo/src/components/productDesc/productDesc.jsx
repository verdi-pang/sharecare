import { Circle } from "@mui/icons-material";
import Check from "@mui/icons-material/Check";

const ProductDesc = ({ id, cat, subCat }) => {
  return (
    <section className="mx-3 flex w-fit flex-col rounded-xl border border-solid border-amber-400 bg-amber-400 bg-opacity-10 px-5 py-8 font-light leading-7 lg:w-3/5 lg:self-center">
      <div className="text-2xl font-bold leading-7 text-primary">{id}</div>
      <div className="text-sm font-medium leading-6 tracking-normal text-secondary">
        {cat} &gt; {subCat}
      </div>
      <div className="mt-3 flex flex-col gap-2 text-sm leading-5">
        <div className="flex gap-2">
          <Check fontSize="1" className="mt-2" />
          <p className="text-md text-neutral-500 self-stretch leading-7">
            This lightweight 2-person dome tent with a large dual layer
            ventilated door has enough space for you and a friend Water
            resistant
          </p>
        </div>
        <div className="flex gap-2">
          {" "}
          <Check fontSize="1" className="mt-2" />{" "}
          <p className="text-md text-neutral-500 self-stretch leading-7">
            This lightweight 2-person dome tent with a large dual layer
            ventilated door has enough space for you and a friend Water
            resistant
          </p>
        </div>
        <div className="flex gap-2">
          <Check fontSize="1" className="mt-2" />{" "}
          <p className="text-md text-neutral-500 self-stretch leading-7">
            The 190T polyester with polyurethane on the tent body and the
            detachable rain fly help to ensure water does not get inside your
            tent Convenient features
          </p>
        </div>
        <div className="flex gap-2">
          <Check fontSize="1" className="mt-2" />{" "}
          <p className="text-md text-neutral-500 self-stretch leading-7">
            This 2-Man tent also features fiberglass poles Easy set up- with
            just 2 Fiberglass poles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
