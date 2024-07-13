import { Star, VerifiedUser } from "@mui/icons-material";

const ProductUserReview = () => {
  return (
    <div className="mt-3 flex w-fit flex-col p-4 lg:self-center">
      <div className="mb-3 self-center text-2xl font-semibold leading-7 text-primary">
        John’s reviews
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col rounded-lg border border-solid border-primary px-3 py-4 shadow shadow-primary lg:w-3/5 lg:self-center">
          <div className="text-md font-md p-3 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
            urna, sollicitudin in pretium in.
          </div>
          <div className="flex flex-row justify-between px-2">
            <VerifiedUser className="self-center" />
            <div className="flex flex-col">
              <p className="text-based font-semibold text-primary">
                Darlene Robertson
              </p>
              <p className="text-sm font-light text-secondary">MasterCard</p>
            </div>
            <div className="self-center text-tert">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg border border-solid border-primary px-3 py-4 shadow shadow-primary lg:w-3/5 lg:self-center">
          <div className="text-md font-md p-3 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
            urna, sollicitudin in pretium in.
          </div>
          <div className="flex flex-row justify-between px-2">
            <VerifiedUser className="self-center" />
            <div className="flex flex-col">
              <p className="text-based font-semibold text-primary">
                Darlene Robertson
              </p>
              <p className="text-sm font-light text-secondary">MasterCard</p>
            </div>
            <div className="self-center text-tert">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 items-center justify-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-medium leading-5 tracking-normal text-primary shadow shadow-primary lg:w-fit lg:self-center">
        See all reviews
      </div>
    </div>
  );
};

export default ProductUserReview;
