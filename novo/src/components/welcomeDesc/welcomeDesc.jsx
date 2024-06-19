import Image from "next/image";

const WelcomeDesc = () => {
    return (
        <div className="flex flex-col self-stretch px-6 pt-16 pb-8 mt-16 w-full text-lg font-light leading-7 text-center bg-amber-400 text-neutral-500 bg-opacity-10">
            <header className="self-center text-3xl font-semibold leading-10 text-slate-950">
                Welcome to Novo: <span className="text-amber-400">Share What You Have, Find What You Need</span>
            </header>
            <section className="mt-12">
                <p>Are you tired of your valuable possessions sitting idle? Novo is here to help you maximize the potential of your belongings.</p>
            </section>
            <section className="mt-8">
                <p>Our platform connects individuals who have items they're willing to rent out with those in need, creating a win-win solution for everyone involved.</p>
            </section>
            <figure><Image src='/img/welcomeDescBottom.svg' width={344} height={344} className="mt-4 w-full aspect-[1.08] max-w-[344px]" alt="illustration" /></figure>
        </div>
    );
}

export default WelcomeDesc;