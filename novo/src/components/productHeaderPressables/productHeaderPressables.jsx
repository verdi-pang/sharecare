import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const ProductHeaderPressables = (params) => {
  const queryPath = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(queryPath);
      params.set(name, value);

      return params.toString();
    },
    [queryPath],
  );

  const [planSelected, setPlanSelected] = useState(1);
  return (
    <div className="text-primary lg:w-3/5 lg:self-center">
      <div className="text-2xl font-semibold">{params.id}</div>
      <div className="mt-4 flex gap-2.5 whitespace-nowrap pb-2.5 text-center">
        <div
          className={`+ flex flex-1 flex-col rounded-lg border border-solid border-primary p-4 ${planSelected === 1 ? "shadow shadow-primary" : " "}`}
          onClick={() => setPlanSelected(1)}
        >
          <div className="self-center text-lg leading-6">Daily</div>
          <div className="mt-3 text-2xl font-semibold leading-7">
            $20.00/day
          </div>
        </div>
        <div
          className={`+ flex flex-1 flex-col rounded-lg border border-solid border-primary p-4 ${planSelected === 2 ? "shadow shadow-primary" : " "}`}
          onClick={() => setPlanSelected(2)}
        >
          <div className="self-center text-lg leading-6">Weekly</div>
          <div className="mt-3 text-2xl font-semibold leading-7">
            $10.00/day
          </div>
        </div>
      </div>
      <div className="mt-4 items-center justify-center rounded-lg border border-primary bg-slate-300 px-6 py-4 text-center text-lg font-semibold leading-5 tracking-normal text-primary shadow shadow-primary">
        <Link
          href={pathname + "?" + createQueryString("avaliabilityModal", true)}
        >
          Check availability
        </Link>
      </div>
    </div>
  );
};

export default ProductHeaderPressables;
