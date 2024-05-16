import Image from 'next/image'
import Link from 'next/link';

const catItemsList = [
    { cat: "Camping", imgUrl: "/img/tent.jpg", url: "camping" },
    { cat: "Film & Photography", imgUrl: "/img/photography.jpg", url: "filmPhotography" },
    { cat: "Drones", imgUrl: "/img/drone.jpg", url: "drones" },
    { cat: "Electronics", imgUrl: "/img/electronics.jpg", url: "electronics" },
    { cat: "Scooter", imgUrl: "/img/scooter.jpg", url: "scooter" },
    { cat: "Home Decoration", imgUrl: "/img/homeDecor.jpg", url: "homeDecor" }
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
                        <Link href={`/product?category=${item.url}`}>
                            <div className='rounded-lg overflow-hidden'>
                                <div className='size-40 relative'>
                                    <Image src={item.imgUrl}
                                        style={{ objectFit: "cover" }}
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