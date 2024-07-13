import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
const listItems = [
  {
    name: "2 Person Dome Tent",
    url: "/product/2persondometent",
    imgUrl: "/img/tent.jpg",
    ownerName: "John D.",
    ownerLocation: "Surrey",
    price: 20,
    cat: "camping",
    subCat: "tent",
  },
  {
    name: "Photography Set",
    url: "/product/photographySet",
    imgUrl: "/img/photography.jpg",
    ownerName: "Johnny D.",
    ownerLocation: "Surrey",
    price: 30,
    cat: "photography",
    subCat: "camera",
  },
  {
    name: "Christmas Decor",
    url: "/product/christmasDecor",
    imgUrl: "/img/homeDecor.jpg",
    ownerName: "James D.",
    ownerLocation: "Surrey",
    price: 10,
    cat: "decorations",
    subCat: "tree decor",
  },
  {
    name: "Electric Scooter",
    url: "/product/electricScooter",
    imgUrl: "/img/scooter.jpg",
    ownerName: "Jane D.",
    ownerLocation: "Surrey",
    price: 30,
    cat: "electric scooter",
    subCat: "scooter",
  },
  {
    name: "Small Drone",
    url: "/product/smallDrone",
    imgUrl: "/img/drone.jpg",
    ownerName: "Jack D.",
    ownerLocation: "Surrey",
    price: 40,
    cat: "drones",
    subCat: "small drones",
  },
  {
    name: "Christmas Tree",
    url: "/product/christmasTree",
    imgUrl: "/img/christmasTree.jpg",
    ownerName: "Jackson D.",
    ownerLocation: "Surrey",
    price: 30,
    cat: "decorations",
    subCat: "christmas tree",
  },
  {
    name: "Macbook Pro",
    url: "/product/macbookpro",
    imgUrl: "/img/electronics.jpg",
    ownerName: "Jim D.",
    ownerLocation: "Surrey",
    price: 10,
    cat: "electronics",
    subCat: "laptop",
  },
  {
    name: "XM Scooter",
    url: "/product/xmscooter",
    imgUrl: "/img/scooter_1.jpg",
    ownerName: "Jonah D.",
    ownerLocation: "Surrey",
    price: 20,
    cat: "electric scooter",
    subCat: "xm scooter",
  },
];

const queriedList = {
  camping: [
    {
      name: "2 Person Dome Tent",
      url: "/product/2persondometent",
      imgUrl: "/img/productlist/camping/tent_1.jpg",
      ownerName: "John D.",
      ownerLocation: "Surrey",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "1 Person Dome Tent",
      url: "/product/1persondometent",
      imgUrl: "/img/productlist/camping/tent_2.jpg",
      ownerName: "Jack D.",
      ownerLocation: "Burnaby",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "2 Person Cabin Tent",
      url: "/product/2persondometent",
      imgUrl: "/img/productlist/camping/tent_3.jpg",
      ownerName: "Jane D.",
      ownerLocation: "Toronto",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "Kelty Dome Tent",
      url: "/product/keltydometent",
      imgUrl: "/img/productlist/camping/tent_4.jpg",
      ownerName: "James D.",
      ownerLocation: "Kingston",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "North Face Dome Tent",
      url: "/product/northfacedometent",
      imgUrl: "/img/productlist/camping/tent_5.jpg",
      ownerName: "Jim D.",
      ownerLocation: "Richmond",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "Columbia Dome Tent",
      url: "/product/columbiadometent",
      imgUrl: "/img/productlist/camping/tent_6.jpg",
      ownerName: "Jimmy D.",
      ownerLocation: "Coquitlam",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "Vango Dome Tent",
      url: "/product/vangodometent",
      imgUrl: "/img/productlist/camping/campEquipment_1.jpg",
      ownerName: "Jose D.",
      ownerLocation: "Vancouver",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },

    {
      name: "Nemo Dome Tent",
      url: "/product/nemodometent",
      imgUrl: "/img/productlist/camping/campEquipment_2.jpg",
      ownerName: "Jonny D.",
      ownerLocation: "New West",
      price: 20,
      cat: "camping",
      subCat: "tent",
    },
  ],

  filmPhotography: [
    {
      name: "DSLR Camera 1",
      url: "/product/dslrcamera1",
      imgUrl: "/img/productlist/filmphoto/camera_1.jpg",
      ownerName: "John D.",
      ownerLocation: "Surrey",
      price: 20,
      cat: "photography",
      subCat: "camera",
    },

    {
      name: "DSLR Camera 2",
      url: "/product/dslrcamera2",
      imgUrl: "/img/productlist/filmphoto/camera_2.jpg",
      ownerName: "Johnny D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "photography",
      subCat: "camera",
    },

    {
      name: "DSLR Camera 3",
      url: "/product/dslrcamera3",
      imgUrl: "/img/productlist/filmphoto/camera_3.jpg",
      ownerName: "James D.",
      ownerLocation: "Surrey",
      price: 10,
      cat: "photography",
      subCat: "camera",
    },

    {
      name: "DSLR Camera 4",
      url: "/product/dslrcamera4",
      imgUrl: "/img/productlist/filmphoto/camera_4.jpg",
      ownerName: "Jack D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "photography",
      subCat: "camera",
    },

    {
      name: "Film Camera 1",
      url: "/product/filmcamera1",
      imgUrl: "/img/productlist/filmphoto/camera_5.jpg",
      ownerName: "Jim D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "photography",
      subCat: "film camera",
    },

    {
      name: "Film Camera 2",
      url: "/product/filmcamera2",
      imgUrl: "/img/productlist/filmphoto/camera_6.jpg",
      ownerName: "Jones D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "photography",
      subCat: "film camera",
    },
  ],

  electronics: [
    {
      name: "Laptop 1",
      url: "/product/laptop1",
      imgUrl: "/img/productlist/electronics/laptop_1.jpg",
      ownerName: "John D.",
      ownerLocation: "Surrey",
      price: 20,
      cat: "electronics",
      subCat: "laptop",
    },

    {
      name: "Laptop 2",
      url: "/product/laptop2",
      imgUrl: "/img/productlist/electronics/laptop_2.jpg",
      ownerName: "Johnny D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electronics",
      subCat: "laptop",
    },

    {
      name: "Laptop 3",
      url: "/product/laptop3",
      imgUrl: "/img/productlist/electronics/laptop_3.jpg",
      ownerName: "James D.",
      ownerLocation: "Surrey",
      price: 10,
      cat: "electronics",
      subCat: "laptop",
    },

    {
      name: "Laptop 4",
      url: "/product/laptop4",
      imgUrl: "/img/productlist/electronics/laptop_4.jpg",
      ownerName: "Jack D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electronics",
      subCat: "laptop",
    },

    {
      name: "Laptop 5",
      url: "/product/laptop5",
      imgUrl: "/img/productlist/electronics/laptop_5.jpg",
      ownerName: "Jim D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electronics",
      subCat: "laptop",
    },

    {
      name: "Laptop 6",
      url: "/product/laptop6",
      imgUrl: "/img/productlist/electronics/laptop_6.jpg",
      ownerName: "Jones D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electronics",
      subCat: "laptop",
    },
  ],

  drones: [
    {
      name: "Drone 1",
      url: "/product/drone1",
      imgUrl: "/img/productlist/drone/drone_1.jpg",
      ownerName: "John D.",
      ownerLocation: "Surrey",
      price: 20,
      cat: "drones",
      subCat: "small drones",
    },

    {
      name: "Drone 2",
      url: "/product/drone2",
      imgUrl: "/img/productlist/drone/drone_2.jpg",
      ownerName: "Johnny D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "drones",
      subCat: "small drones",
    },

    {
      name: "Drone 3",
      url: "/product/drone3",
      imgUrl: "/img/productlist/drone/drone_3.jpg",
      ownerName: "James D.",
      ownerLocation: "Surrey",
      price: 10,
      cat: "drones",
      subCat: "small drones",
    },

    {
      name: "Drone 4",
      url: "/product/drone4",
      imgUrl: "/img/productlist/drone/drone_4.jpg",
      ownerName: "Jack D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "drones",
      subCat: "small drones",
    },

    {
      name: "Drone 5",
      url: "/product/drone5",
      imgUrl: "/img/productlist/drone/drone_5.jpg",
      ownerName: "Jim D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "drones",
      subCat: "small drones",
    },

    {
      name: "Drone 6",
      url: "/product/drone6",
      imgUrl: "/img/productlist/drone/drone_6.jpg",
      ownerName: "Jones D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "drones",
      subCat: "small drones",
    },
  ],

  homeDecor: [
    {
      name: "Home Decoration 1",
      url: "/product/homeDecor1",
      imgUrl: "/img/productlist/homedecor/homeDecor_1.jpg",
      ownerName: "John D.",
      ownerLocation: "Surrey",
      price: 20,
      cat: "decorations",
      subCat: "tree decor",
    },

    {
      name: "Home Decoration 2",
      url: "/product/homeDecor2",
      imgUrl: "/img/productlist/homedecor/homeDecor_2.jpg",
      ownerName: "Johnny D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "decorations",
      subCat: "tree decor",
    },

    {
      name: "Home Decoration 3",
      url: "/product/homeDecor3",
      imgUrl: "/img/productlist/homedecor/homeDecor_3.jpg",
      ownerName: "James D.",
      ownerLocation: "Surrey",
      price: 10,
      cat: "decorations",
      subCat: "tree decor",
    },

    {
      name: "Home Decoration 4",
      url: "/product/homeDecor4",
      imgUrl: "/img/productlist/homedecor/homeDecor_4.jpg",
      ownerName: "Jack D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "decorations",
      subCat: "tree decor",
    },

    {
      name: "Home Decoration 5",
      url: "/product/homeDecor5",
      imgUrl: "/img/productlist/homedecor/homeDecor_5.jpg",
      ownerName: "Jim D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "decorations",
      subCat: "tree decor",
    },

    {
      name: "Home Decoration 6",
      url: "/product/homeDecor6",
      imgUrl: "/img/productlist/homedecor/homeDecor_6.jpg",
      ownerName: "Jones D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "decorations",
      subCat: "tree decor",
    },
  ],

  scooter: [
    {
      name: "Scooter 1",
      url: "/product/scooter1",
      imgUrl: "/img/productlist/scooter/scooter_1.jpg",
      ownerName: "John D.",
      ownerLocation: "Surrey",
      price: 20,
      cat: "electric scooter",
      subCat: "scooter",
    },

    {
      name: "Scooter 2",
      url: "/product/scooter2",
      imgUrl: "/img/productlist/scooter/scooter_2.jpg",
      ownerName: "Johnny D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electric scooter",
      subCat: "scooter",
    },

    {
      name: "Scooter 3",
      url: "/product/scooter3",
      imgUrl: "/img/productlist/scooter/scooter_3.jpg",
      ownerName: "James D.",
      ownerLocation: "Surrey",
      price: 10,
      cat: "electric scooter",
      subCat: "scooter",
    },

    {
      name: "Scooter 4",
      url: "/product/scooter4",
      imgUrl: "/img/productlist/scooter/scooter_4.jpg",
      ownerName: "Jack D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electric scooter",
      subCat: "scooter",
    },

    {
      name: "Scooter 5",
      url: "/product/scooter5",
      imgUrl: "/img/productlist/scooter/scooter_5.jpg",
      ownerName: "Jim D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electric scooter",
      subCat: "scooter",
    },

    {
      name: "Scooter 6",
      url: "/product/scooter6",
      imgUrl: "/img/productlist/scooter/scooter_6.jpg",
      ownerName: "Jones D.",
      ownerLocation: "Surrey",
      price: 30,
      cat: "electric scooter",
      subCat: "scooter",
    },
  ],
};
const CatItemList = (param) => {
  const query = param.query;
  // console.log(Object.keys(queriedList))
  const matchedKey = (obj) => {
    if (obj in queriedList) {
      return;
    } else {
      return query === null;
    }
  };
  console.log(matchedKey(query));
  // const cats = Object.values(queriedList)
  // const filtered = Object.filter(queriedList, query)
  if (
    query === null ||
    typeof query === "undefined" ||
    matchedKey(query) === false
  ) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-4 px-3 py-4 lg:w-3/5 lg:self-center xl:w-2/5">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="flex w-[165px] flex-col overflow-hidden rounded-xl border border-solid border-indigo-900 bg-white pb-4 sm:min-w-[165px]"
          >
            <Link
              href={{
                pathname: item.url,
                query: {
                  id: item.name,
                  imgUrl: item.imgUrl,
                  ownerName: item.ownerName,
                  ownerLocation: item.ownerLocation,
                  cat: item.cat,
                  subCat: item.subCat,
                },
              }}
            >
              <div className="relative flex aspect-[1.25] w-[163px] flex-col items-end self-center overflow-hidden px-16 pb-20 pt-2.5">
                <Image
                  src={item.imgUrl}
                  style={{ layout: "fill", objectFit: "cover" }}
                  fill
                  objectFit="cover"
                  alt={item.name}
                />
              </div>
            </Link>
            <Link
              href={{
                pathname: item.url,
                query: {
                  id: item.name,
                  imgUrl: item.imgUrl,
                  ownerName: item.ownerName,
                  ownerLocation: item.ownerLocation,
                  cat: item.cat,
                  subCat: item.subCat,
                },
              }}
            >
              <div className="mt-3 flex min-h-[110px] w-[160px] flex-col justify-around px-3.5">
                <p className="text-base font-semibold leading-4 text-indigo-900">
                  {item.name}
                </p>
                <div className="mt-1 flex gap-3 whitespace-nowrap">
                  <div className="text-neutral-500 grow self-center text-sm leading-3">
                    {item.ownerLocation}
                  </div>
                  <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                    ${item.price}/Day
                  </div>
                </div>
                <div className="mt-1 h-px shrink-0 border border-solid border-black bg-black" />
                <div className="text-neutral-500 mt-1 flex justify-between gap-5 text-sm leading-4">
                  <div className="flex gap-1.5">
                    <div className="self-center tracking-wide text-black">
                      {item.ownerName}
                    </div>
                  </div>
                  <div className="my-auto flex items-center gap-1.5 whitespace-nowrap">
                    <StarIcon
                      fontSize="10"
                      className="self-center text-amber-400"
                    />
                    <div className="text-sm text-gray-600">(23)</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div className="mt-4 justify-center rounded-md border border-solid border-indigo-900 bg-slate-300 px-6 py-3.5 text-center font-medium text-indigo-900 shadow-primary shadow-indigo-900">
          Load More
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-4 px-3 py-4 lg:w-3/5 lg:self-center xl:w-2/5">
        {queriedList[query].map((item, index) => (
          <div
            key={index}
            className="flex w-[165px] flex-col overflow-hidden rounded-xl border border-solid border-indigo-900 bg-white pb-4 sm:min-w-[165px]"
          >
            <Link
              href={{
                pathname: item.url,
                query: {
                  id: item.name,
                  imgUrl: item.imgUrl,
                  ownerName: item.ownerName,
                  ownerLocation: item.ownerLocation,
                  cat: item.cat,
                  subCat: item.subCat,
                },
              }}
            >
              <div className="relative flex aspect-[1.25] w-[163px] flex-col items-end self-center overflow-hidden px-16 pb-20 pt-2.5">
                <Image
                  src={item.imgUrl}
                  style={{ layout: "fill", objectFit: "cover" }}
                  fill
                  objectFit="cover"
                  alt={item.name}
                />
              </div>
            </Link>
            <Link
              href={{
                pathname: item.url,
                query: {
                  id: item.name,
                  imgUrl: item.imgUrl,
                  ownerName: item.ownerName,
                  ownerLocation: item.ownerLocation,
                  cat: item.cat,
                  subCat: item.subCat,
                },
              }}
            >
              <div className="mt-3 flex min-h-[110px] w-[160px] flex-col justify-around px-3.5">
                <p className="text-base font-semibold leading-4 text-indigo-900">
                  {item.name}
                </p>

                <div className="mt-1 flex gap-3 whitespace-nowrap">
                  <div className="text-neutral-500 grow self-center text-sm leading-3">
                    {item.ownerLocation}
                  </div>
                  <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                    ${item.price}/Day
                  </div>
                </div>
                <div className="mt-1 h-px shrink-0 border border-solid border-black bg-black" />
                <div className="text-neutral-500 mt-1 flex justify-between gap-5 text-sm leading-4">
                  <div className="flex gap-1.5">
                    <div className="tracking-wide text-black">
                      {item.ownerName}
                    </div>
                  </div>
                  <div className="my-auto flex items-center gap-1.5 whitespace-nowrap">
                    <StarIcon
                      fontSize="10"
                      className="self-center text-amber-400"
                    />
                    <div className="self-center text-sm text-gray-600">
                      (23)
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="mt-4 justify-center rounded-md border border-solid border-indigo-900 bg-slate-300 px-6 py-3.5 text-center font-medium text-indigo-900 shadow-primary shadow-indigo-900">
          Load More
        </div>
      </div>
    );
  }
};

export default CatItemList;

{
  /* <div className="flex flex-col pt-1 pb-4 w-full bg-white rounded-xl border border-indigo-900 border-solid">
            <div className="flex overflow-hidden relative flex-col items-end self-center px-16 pt-2.5 pb-20 shadow-xl aspect-[1.25] w-[188px]">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9131d82f732e1a7957c372c3d1f857ed747b163ee9610e8e0408ecd219b74ef3?apiKey=fc5a05627a354b75a7bb231268befd18&"
                    alt="Product Image"
                    layout="fill"
                    objectFit="cover"
                />
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99effed67d769849e945e712044bd6535b7af1b103f953216dfc59f44c1e6f47?apiKey=fc5a05627a354b75a7bb231268befd18&"
                    alt="Badge Image"
                    width={22}
                    height={22}
                />
            </div>
            <div className="flex flex-col px-3.5 mt-6">
                <div className="text-base leading-4 text-indigo-900">
                    2 Person Dome tent
                </div>
                <div className="flex gap-3 mt-3.5 whitespace-nowrap">
                    <div className="grow text-sm leading-3 text-neutral-500">
                        Surrey
                    </div>
                    <div className="flex-auto text-base font-semibold leading-4 text-indigo-900">
                        $20/day
                    </div>
                </div>
                <div className="shrink-0 mt-3.5 h-px bg-black border border-black border-solid" />
            </div>
            <div className="flex gap-5 justify-between mt-4 text-sm leading-4 text-neutral-500">
                <div className="flex gap-1.5">
                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc36a6da69e85653d9b6d775c6086350f13e27d358c4c258552a3395dc2605ed?apiKey=fc5a05627a354b75a7bb231268befd18&"
                        alt="Profile Image"
                        className="shrink-0 rounded-full aspect-square"
                        width={17}
                        height={17}
                    />
                    <div className="my-auto">John D.</div>
                </div>
                <div className="flex gap-1.5 my-auto whitespace-nowrap">
                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1ee99f328f90d9fe3759f646002cac3a6cd7acaa4934387d42bcc1c82b0e0ec?apiKey=fc5a05627a354b75a7bb231268befd18&"
                        alt="Star Rating"
                        className="shrink-0 self-start aspect-[1.09] fill-amber-400"
                        width={13}
                        height={13}
                    />
                    <div>(23)</div>
                </div>
            </div>
        </div> */
}
