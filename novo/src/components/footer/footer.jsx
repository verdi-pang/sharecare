import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Link from 'next/link';
const Footer = () => {
    const aboutLinks = [
        { title: "About us", link: "/about" },
        { title: "Our Mission", link: "/about" },
        { title: "Meet the Team", link: "/about" },
    ];
    const helpSupport = [
        { title: "FAQs", link: "#" },
        { title: "Contact Us", link: "#" },
        { title: "Terms of Service", link: "#" },
        { title: "Privacy Policy", link: "#" }
    ]
    return (
        <div className="flex flex-col gap-4 items-center self-stretch px-5 pt-12 w-auto text-base font-light text-center text-white bg-indigo-900 rounded-t-xl">
            <div className='flex flex-col'>
                <div className="text-xl font-semibold leading-6 text-center text-amber-400">About Sharecare</div>
                {aboutLinks.map((item, key) =>
                    <Link href={item.link}>
                        <div className="mt-2 text-sm tracking-wide leading-5 text-center text-white" key={key}>
                            {item.title}
                        </div>
                    </Link>
                )}

            </div>
            {/* <div className='flex flex-col'>
                <div className="text-xl font-semibold leading-6 text-center text-amber-400">
                    Categories
                </div>
                <div className="mt-2 text-sm tracking-wide leading-5 text-center text-white">
                    Electronics
                </div>
                <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                    Tools
                </div>
                <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                    Sports Equipment
                </div>
            </div> */}
            <div className='flex flex-col'>
                <div className="text-xl font-semibold leading-6 text-center text-amber-400">
                    Help & Support
                </div>
                {helpSupport.map((item, key) =>
                    <Link href={item.link}>
                        <div className="mt-2 text-sm tracking-wide leading-5 text-center text-white" key={key}>
                            {item.title}
                        </div>
                    </Link>
                )}
            </div>
            <div className="text-xl font-semibold leading-6 text-center text-amber-400">
                Connect with Us
            </div>
            <div className="flex gap-4 mt-2 justify-center">
                <div className='flex gap-4 align-center'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <XIcon />
                </div>
            </div>
            <div className="self-center mt-4 text-xs font-medium tracking-wide leading-4 text-center text-white">
                2023 Sharecare. All rights reserved
            </div>
        </div>
    );
}

export default Footer;