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
const CatItemList = (param) => {
    console.log("catlist", param)

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
}

export default CatItemList;