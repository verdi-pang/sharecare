import { Person, Star } from "@mui/icons-material";

const ProductUserDesc = () => {
  return (
    <div className="mt-5 flex flex-col bg-amber-400 bg-opacity-10 px-3 py-8 text-sm">
      <div className="lg:w-1/3 lg:self-center">
        <div className="self-center text-2xl font-semibold leading-7 text-tert">
          More about John D.
        </div>
        <div className="mt-4 flex flex-col gap-2.5 py-3 tracking-wide">
          <div className="flex flex-row gap-2">
            <Person className="self-start" />
            <div className="flex flex-col gap-2 px-3">
              <div className="flex flex-row justify-between">
                <p className="self-center text-lg font-medium text-primary">
                  Johan D.
                </p>
                <div className="flex gap-2.5 whitespace-nowrap leading-[143%] text-gray-600">
                  <Star className="self-center" color="tert" />
                  <div className="self-center">(23)</div>
                </div>
              </div>

              <div className="flex flex-col self-center">
                <p className="mt-2.5 leading-5 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  elit urna, sollicitudin in pretium in, efficitur fermentum
                  leo. Vivamus urna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="justify-center items-center px-6 py-4 mt-4 text-lg font-medium tracking-normal leading-5 text-center text-primary bg-white border border-primary rounded-lg shadow shadow-primary">
                Message John
            </div> */}
        <div className="mt-4 items-center justify-center rounded-lg border border-primary bg-white px-6 py-4 text-center text-lg font-medium leading-5 tracking-normal text-primary shadow shadow-primary">
          See John’s profile
        </div>
      </div>
    </div>
  );
};

export default ProductUserDesc;
