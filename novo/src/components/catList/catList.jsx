import Image from "next/image";
import Link from "next/link";

const catItemsList = [
  { cat: "Camping", imgUrl: "/img/tent.jpg", url: "camping" },
  {
    cat: "Film & Photography",
    imgUrl: "/img/photography.jpg",
    url: "filmPhotography",
  },
  { cat: "Drones", imgUrl: "/img/drone.jpg", url: "drones" },
  { cat: "Electronics", imgUrl: "/img/electronics.jpg", url: "electronics" },
  { cat: "Scooter", imgUrl: "/img/scooter.jpg", url: "scooter" },
  { cat: "Home Decoration", imgUrl: "/img/homeDecor.jpg", url: "homeDecor" },
];

const CatList = (param) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 py-6 lg:flex-col">
      <div className="self-center text-2xl font-semibold leading-7">
        <p>
          Explore our <span className="text-amber-400">Categories</span>
        </p>
      </div>
      <div className="lg:px-30 flex flex-wrap items-center justify-center gap-6">
        {catItemsList.map((item, key) => (
          <div
            key={key}
            className="max-w-fit basis-1/2 rounded-lg border shadow odd:border-indigo-900 odd:shadow-primary even:border-amber-400 even:shadow-yellow"
          >
            <Link href={`/product?query=${item.url}`}>
              <div className="overflow-hidden rounded-t-lg">
                <div className="relative size-40">
                  <Image
                    src={item.imgUrl}
                    style={{ objectFit: "cover" }}
                    fill
                    alt={item.cat}
                  />
                </div>
              </div>
              <p className="py-2 text-center font-semibold text-secondary">
                {item.cat}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatList;
