import Image from 'next/image'
import Link from 'next/link';

const catItemsList = [
    { cat: "Camping", imgUrl: "/img/tent.jpg" },
    { cat: "Film & Photography", imgUrl: "/img/photography.jpg" },
    { cat: "Drones", imgUrl: "/img/drone.jpg" },
    { cat: "Electronics", imgUrl: "/img/electronics.jpg" },
    { cat: "Scooter", imgUrl: "/img/scooter.jpg" },
    { cat: "Home Decoration", imgUrl: "/img/homeDecor.jpg" }
]

const CatList = (param) => {
    return (
        <div className='flex flex-row flex-wrap gap-4 justify-center'>
            <div className="self-center text-2xl font-semibold leading-7">
                Explore our categories
            </div>
            {
                catItemsList.map(item =>
                    <div key={item.cat}>
                        <Link href={"/product"}>
                            <div className='rounded-lg overflow-hidden'>
                                <div className='size-40 relative'>
                                    <Image src={item.imgUrl}
                                        style={{ layout: "fill", objectFit: "cover" }}
                                        fill
                                        alt="image"
                                    />

                                </div>
                            </div>
                            <p className='text-center text-secondary'>{item.cat}</p>
                        </Link>
                    </div>
                )
            }


        </div>
    );
}

export default CatList;