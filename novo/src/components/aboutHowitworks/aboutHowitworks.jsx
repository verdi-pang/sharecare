const AboutHowitworks = () => {
    return (
        <div className="flex flex-col py-4 pl-4 mt-14 w-full text-black">
            <div className="text-3xl leading-9 text-center">How renting works</div>
            <div className="flex flex-row overflow-x-auto gap-4 mt-12">
                <div className="flex flex-col flex-1">
                    <div className="text-xl leading-7">1. Discover</div>
                    <div className="mt-2.5 text-sm tracking-wide leading-5">
                        Explore Novo's marketplace and find the perfect items for your
                        projects, adventures, or events.
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="text-xl leading-7">2. Request</div>
                    <div className="mt-2.5 text-sm tracking-wide leading-5">
                        Select the items you want, submit a rental request, and connect with
                        lenders for details.
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="text-xl leading-7">3. Confirm and Pay</div>
                    <div className="mt-2.5 text-sm tracking-wide leading-5">
                        Once terms are agreed upon, securely confirm the rental and make
                        payments through Novo.
                    </div>
                </div>
            </div>
            <div className="justify-center self-center px-6 py-2.5 mt-12 text-sm font-medium tracking-normal leading-5 text-center text-white bg-slate-500 rounded-[100px]">
                Post an item
            </div>
        </div>
    );
}

export default AboutHowitworks;