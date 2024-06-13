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
        <div className='flex flex-row flex-wrap gap-4 justify-center py-6'>
            <div className="self-center text-2xl font-semibold leading-7">
                <p>
                    Explore our <span className="text-amber-400">Categories</span>
                </p>
            </div>
            {
                catItemsList.map(item =>
                    <div key={item.cat} className='rounded-lg border odd:border-indigo-900 even:border-amber-400 shadow odd:shadow-primary even:shadow-yellow'>
                        <Link href={`/product?query=${item.url}`}>
                            <div className='rounded-t-lg overflow-hidden'>
                                <div className='size-40 relative'>
                                    <Image src={item.imgUrl}
                                        style={{ objectFit: "cover" }}
                                        fill
                                        alt="image"
                                    />

                                </div>
                            </div>
                            <p className='text-center text-secondary font-semibold py-2'>{item.cat}</p>
                        </Link>
                    </div>
                )
            }


        </div>
    );
}

export default CatList;