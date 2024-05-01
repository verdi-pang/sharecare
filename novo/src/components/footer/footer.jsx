import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
    return (
        <div className="flex flex-col items-start p-4 mt-14 w-full bg-slate-500">
            <div className="text-lg leading-6 text-center text-white">About Sharecare</div>
            <div className="mt-2 text-sm tracking-wide leading-5 text-center text-white">
                About us
            </div>
            <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                Our Mission
            </div>
            <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                Meet the Team
            </div>
            <div className="mt-4 text-lg leading-6 text-center text-white">
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
            <div className="mt-4 text-lg leading-6 text-center text-white">
                Help & Support
            </div>
            <div className="mt-2 text-sm tracking-wide leading-5 text-center text-white">
                FAQs
            </div>
            <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                Contact Us
            </div>
            <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                Terms of Service
            </div>
            <div className="mt-1.5 text-sm tracking-wide leading-5 text-center text-white">
                Privacy Policy
            </div>
            <div className="mt-4 text-lg leading-6 text-center text-white">
                Connect with Us
            </div>
            <div className="flex gap-4 pr-7 mt-2">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
            </div>
            <div className="self-center mt-4 text-xs font-medium tracking-wide leading-4 text-center text-white">
                2023 Sharecare. All rights reserved
            </div>
        </div>
    );
}

export default Footer;