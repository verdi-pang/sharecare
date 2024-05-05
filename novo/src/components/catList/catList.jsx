import Image from 'next/image'
import Link from 'next/link';

const catItems = [
    { name: "Film & Photography", imgRef: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Camping Equipments", imgRef: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Drones", imgRef: "https://images.unsplash.com/photo-1613682988402-9e2ec510b4cb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Eletronics", imgRef: "https://images.unsplash.com/photo-1483203257148-66ee23170d09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Home Decorations", imgRef: "https://images.unsplash.com/photo-1511895654441-f6a0e1db5cbd?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Scooters", imgRef: "https://images.unsplash.com/photo-1591479073117-ba593a13822d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];
const catItemsList = [
    { cat: "Camping", imgUrl: "/img/tent.jpg" },
    { cat: "Film & Photography", imgUrl: "/img/photography.jpg" },
    { cat: "Drones", imgUrl: "/img/drone.jpg" },
    { cat: "Electronics", imgUrl: "/img/electronics.jpg" },
    { cat: "Scooter", imgUrl: "/img/scooter.jpg" },
    { cat: "Home Decoration", imgUrl: "/img/homeDecor.jpg" }
]

const CatList = () => {

    return (
        <div className='flex flex-row flex-wrap gap-4 justify-center'>
            <div className="self-center text-2xl leading-7">
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
                            <p className='text-center'>{item.cat}</p>
                        </Link>
                    </div>
                )
            }


        </div>
    );
}

export default CatList;