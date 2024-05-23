import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
const listItems = [
    { name: "2 Person Dome Tent", url: "/product/2persondometent", imgUrl: "/img/tent.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },
    { name: "Photography Set", url: "/product/photographySet", imgUrl: "/img/photography.jpg", ownerName: "Johnny D.", ownerLocation: "Surrey", price: 30 },
    { name: "Christmas Decor", url: "/product/christmasDecor", imgUrl: "/img/homeDecor.jpg", ownerName: "James D.", ownerLocation: "Surrey", price: 10 },
    { name: "Electric Scooter", url: "/product/electricScooter", imgUrl: "/img/scooter.jpg", ownerName: "Jane D.", ownerLocation: "Surrey", price: 30 },
    { name: "Small Drone", url: "/product/smallDrone", imgUrl: "/img/drone.jpg", ownerName: "Jack D.", ownerLocation: "Surrey", price: 40 },
    { name: "Christmas Tree", url: "/product/christmasTree", imgUrl: "/img/christmasTree.jpg", ownerName: "Jackson D.", ownerLocation: "Surrey", price: 30 },
    { name: "Macbook Pro", url: "/product/macbookpro", imgUrl: "/img/electronics.jpg", ownerName: "Jim D.", ownerLocation: "Surrey", price: 10 },
    { name: "XM Scooter", url: "/product/xmscooter", imgUrl: "/img/scooter_1.jpg", ownerName: "Jonah D.", ownerLocation: "Surrey", price: 20 }
]

const queriedList = {
    camping: [
        { name: "2 Person Dome Tent", url: "/product/2persondometent", imgUrl: "/img/productlist/camping/tent_1.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },

        { name: "1 Person Dome Tent", url: "/product/1persondometent", imgUrl: "/img/productlist/camping/tent_2.jpg", ownerName: "Jack D.", ownerLocation: "Burnaby", price: 20 },

        { name: "2 Person Cabin Tent", url: "/product/2persondometent", imgUrl: "/img/productlist/camping/tent_3.jpg", ownerName: "Jane D.", ownerLocation: "Toronto", price: 20 },

        { name: "Kelty Dome Tent", url: "/product/keltydometent", imgUrl: "/img/productlist/camping/tent_4.jpg", ownerName: "James D.", ownerLocation: "Kingston", price: 20 },

        { name: "North Face Dome Tent", url: "/product/northfacedometent", imgUrl: "/img/productlist/camping/tent_5.jpg", ownerName: "Jim D.", ownerLocation: "Richmond", price: 20 },

        { name: "Columbia Dome Tent", url: "/product/columbiadometent", imgUrl: "/img/productlist/camping/tent_6.jpg", ownerName: "Jimmy D.", ownerLocation: "Coquitlam", price: 20 },

        { name: "Vango Dome Tent", url: "/product/vangodometent", imgUrl: "/img/productlist/camping/campEquipment_1.jpg", ownerName: "Jose D.", ownerLocation: "Vancouver", price: 20 },

        { name: "Nemo Dome Tent", url: "/product/nemodometent", imgUrl: "/img/productlist/camping/campEquipment_2.jpg", ownerName: "Jonny D.", ownerLocation: "New West", price: 20 },
    ],

    filmPhotography: [
        { name: "DSLR Camera 1", url: "/product/dslrcamera1", imgUrl: "/img/productlist/filmphoto/camera_1.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },

        { name: "DSLR Camera 2", url: "/product/dslrcamera2", imgUrl: "/img/productlist/filmphoto/camera_2.jpg", ownerName: "Johnny D.", ownerLocation: "Surrey", price: 30 },

        { name: "DSLR Camera 3", url: "/product/dslrcamera3", imgUrl: "/img/productlist/filmphoto/camera_3.jpg", ownerName: "James D.", ownerLocation: "Surrey", price: 10 },

        { name: "DSLR Camera 4", url: "/product/dslrcamera4", imgUrl: "/img/productlist/filmphoto/camera_4.jpg", ownerName: "Jack D.", ownerLocation: "Surrey", price: 30 },

        { name: "Film Camera 1", url: "/product/filmcamera1", imgUrl: "/img/productlist/filmphoto/camera_5.jpg", ownerName: "Jim D.", ownerLocation: "Surrey", price: 30 },

        { name: "Film Camera 2", url: "/product/filmcamera2", imgUrl: "/img/productlist/filmphoto/camera_6.jpg", ownerName: "Jones D.", ownerLocation: "Surrey", price: 30 },
    ],

    electronics: [
        { name: "Laptop 1", url: "/product/laptop1", imgUrl: "/img/productlist/electronics/laptop_1.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },

        { name: "Laptop 2", url: "/product/laptop2", imgUrl: "/img/productlist/electronics/laptop_2.jpg", ownerName: "Johnny D.", ownerLocation: "Surrey", price: 30 },

        { name: "Laptop 3", url: "/product/laptop3", imgUrl: "/img/productlist/electronics/laptop_3.jpg", ownerName: "James D.", ownerLocation: "Surrey", price: 10 },

        { name: "Laptop 4", url: "/product/laptop4", imgUrl: "/img/productlist/electronics/laptop_4.jpg", ownerName: "Jack D.", ownerLocation: "Surrey", price: 30 },

        { name: "Laptop 5", url: "/product/laptop5", imgUrl: "/img/productlist/electronics/laptop_5.jpg", ownerName: "Jim D.", ownerLocation: "Surrey", price: 30 },

        { name: "Laptop 6", url: "/product/laptop6", imgUrl: "/img/productlist/electronics/laptop_6.jpg", ownerName: "Jones D.", ownerLocation: "Surrey", price: 30 },
    ],

    drones: [
        { name: "Drone 1", url: "/product/drone1", imgUrl: "/img/productlist/drone/drone_1.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },

        { name: "Drone 2", url: "/product/drone2", imgUrl: "/img/productlist/drone/drone_2.jpg", ownerName: "Johnny D.", ownerLocation: "Surrey", price: 30 },

        { name: "Drone 3", url: "/product/drone3", imgUrl: "/img/productlist/drone/drone_3.jpg", ownerName: "James D.", ownerLocation: "Surrey", price: 10 },

        { name: "Drone 4", url: "/product/drone4", imgUrl: "/img/productlist/drone/drone_4.jpg", ownerName: "Jack D.", ownerLocation: "Surrey", price: 30 },

        { name: "Drone 5", url: "/product/drone5", imgUrl: "/img/productlist/drone/drone_5.jpg", ownerName: "Jim D.", ownerLocation: "Surrey", price: 30 },

        { name: "Drone 6", url: "/product/drone6", imgUrl: "/img/productlist/drone/drone_6.jpg", ownerName: "Jones D.", ownerLocation: "Surrey", price: 30 },
    ],

    homeDecor: [
        { name: "Home Decoration 1", url: "/product/homeDecor1", imgUrl: "/img/productlist/homedecor/homeDecor_1.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },

        { name: "Home Decoration 2", url: "/product/homeDecor2", imgUrl: "/img/productlist/homedecor/homeDecor_2.jpg", ownerName: "Johnny D.", ownerLocation: "Surrey", price: 30 },

        { name: "Home Decoration 3", url: "/product/homeDecor3", imgUrl: "/img/productlist/homedecor/homeDecor_3.jpg", ownerName: "James D.", ownerLocation: "Surrey", price: 10 },

        { name: "Home Decoration 4", url: "/product/homeDecor4", imgUrl: "/img/productlist/homedecor/homeDecor_4.jpg", ownerName: "Jack D.", ownerLocation: "Surrey", price: 30 },

        { name: "Home Decoration 5", url: "/product/homeDecor5", imgUrl: "/img/productlist/homedecor/homeDecor_5.jpg", ownerName: "Jim D.", ownerLocation: "Surrey", price: 30 },

        { name: "Home Decoration 6", url: "/product/homeDecor6", imgUrl: "/img/productlist/homedecor/homeDecor_6.jpg", ownerName: "Jones D.", ownerLocation: "Surrey", price: 30 },
    ],

    scooter: [
        { name: "Scooter 1", url: "/product/scooter1", imgUrl: "/img/productlist/scooter/scooter_1.jpg", ownerName: "John D.", ownerLocation: "Surrey", price: 20 },

        { name: "Scooter 2", url: "/product/scooter2", imgUrl: "/img/productlist/scooter/scooter_2.jpg", ownerName: "Johnny D.", ownerLocation: "Surrey", price: 30 },

        { name: "Scooter 3", url: "/product/scooter3", imgUrl: "/img/productlist/scooter/scooter_3.jpg", ownerName: "James D.", ownerLocation: "Surrey", price: 10 },

        { name: "Scooter 4", url: "/product/scooter4", imgUrl: "/img/productlist/scooter/scooter_4.jpg", ownerName: "Jack D.", ownerLocation: "Surrey", price: 30 },

        { name: "Scooter 5", url: "/product/scooter5", imgUrl: "/img/productlist/scooter/scooter_5.jpg", ownerName: "Jim D.", ownerLocation: "Surrey", price: 30 },

        { name: "Scooter 6", url: "/product/scooter6", imgUrl: "/img/productlist/scooter/scooter_6.jpg", ownerName: "Jones D.", ownerLocation: "Surrey", price: 30 },
    ]

}
const CatItemList = (param) => {

    const query = param.query
    // console.log(Object.keys(queriedList))
    const matchedKey = (obj) => {
        if (obj in queriedList) {
            return
        } else {
            return query === null
        }
    }
    console.log(matchedKey(query))
    // const cats = Object.values(queriedList)
    // const filtered = Object.filter(queriedList, query)
    if (query === null || typeof query === "undefined" || matchedKey(query) === false) {
        return (
            <div className="flex flex-row flex-wrap gap-4 justify-center py-4">
                {listItems.map(item =>
                    <div key={item.name} className="sm:w-[160px]">
                        <div className='rounded-lg overflow-hidden'>
                            <Link href={{ pathname: item.url, query: { id: item.name, imgUrl: item.imgUrl, ownerName: item.ownerName, ownerLocation: item.ownerLocation } }}>
                                <div className='size-40 relative'>
                                    <Image src={item.imgUrl}
                                        style={{ layout: "fill", objectFit: "cover" }}
                                        fill
                                        alt={item.name}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href={item.url}>
                                <div>
                                    <p className="mt-2 text-base leading-6 text-wrap text-black">{item.name}</p>
                                </div>
                            </Link>
                            <div className="flex gap-0.5 mt-1 tracking-wide items-center">
                                <div className="text-sm text-black">{item.ownerName}</div>
                                <StarIcon fontSize="10" />
                                <div className="text-sm text-gray-600">(23)</div>
                            </div>
                            <div className="tracking-wide text-black">{item.ownerLocation}</div>
                            <div className="text-2xl leading-7 text-black">${item.price}/Day</div>
                        </div>
                    </div>

                )}

                <div className="justify-center self-center px-6 py-2.5 mt-6 font-medium tracking-normal text-center text-white bg-slate-300 rounded-[300px]">
                    Load More
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-row flex-wrap gap-4 justify-center py-4">

                {queriedList[query].map(item =>
                    <div key={item.name} className="sm:w-[160px]">
                        <div className='rounded-lg overflow-hidden'>
                            <Link href={{ pathname: item.url, query: { id: item.name, imgUrl: item.imgUrl, ownerName: item.ownerName, ownerLocation: item.ownerLocation } }}>
                                <div className='size-40 relative'>
                                    <Image src={item.imgUrl}
                                        style={{ layout: "fill", objectFit: "cover" }}
                                        fill
                                        alt={item.name}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href={item.url}>
                                <div>
                                    <p className="mt-2 text-base leading-6 text-wrap text-black">{item.name}</p>
                                </div>
                            </Link>
                            <div className="flex gap-0.5 mt-1 tracking-wide items-center">
                                <div className="text-sm text-black">{item.ownerName}</div>
                                <StarIcon fontSize="10" />
                                <div className="text-sm text-gray-600">(23)</div>
                            </div>
                            <div className="tracking-wide text-black">{item.ownerLocation}</div>
                            <div className="text-2xl leading-7 text-black">${item.price}/Day</div>
                        </div>
                    </div>

                )}
                <div className="justify-center self-center px-6 py-2.5 mt-6 font-medium tracking-normal text-center text-white bg-slate-300 rounded-[300px]">
                    Load More
                </div>
            </div>
        )
    }
}

export default CatItemList;