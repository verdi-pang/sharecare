import Link from "next/link";

const AboutHowitworks = () => {
    const content = [
        { title: "Discover", body: "Explore Novo's marketplace and find the perfect items for your projects, adventures, or events." },
        { title: "Request", body: "Select the items you want, submit a rental request, and connect with lenders for details." },
        { title: "Confirm and Pay", body: "Once terms are agreed upon, securely confirm the rental and make payments through Novo." },
    ]
    return (
        <div className="flex flex-col pt-8 pb-6 px-3 mt-14 gap-3 text-black bg-amber-400 bg-opacity-10">
            <div>
                <h2 className="text-2xl font-semibold text-secondary leading-9 text-center">How renting works</h2></div>
            <div className="flex flex-col gap-4 mt-4">
                {content.map((item, key) =>
                    <div className="flex flex-col p-4 gap-2 border-2 rounded-lg shadow-md bg-white" key={key}>
                        <div><h3 className="text-xl font-semibold text-primary leading-7 justify-center">{item.title}</h3></div>
                        <div className="mt-2.5 text-sm tracking-wide leading-5">
                            {item.body}
                        </div>
                    </div>)}
            </div>
            <Link href="/posting"><div className="justify-center px-6 py-3.5 mt-4 font-medium text-center text-neutral-500 border border-solid border-indigo-900 rounded-md shadow-primary shadow-indigo-900 bg-white">
                Post an item
            </div></Link>
        </div>
    );
}

export default AboutHowitworks;