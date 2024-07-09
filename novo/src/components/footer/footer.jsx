import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
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
    { title: "Privacy Policy", link: "#" },
  ];
  return (
    <div className="flex w-auto flex-col items-center gap-4 self-stretch rounded-t-xl bg-indigo-900 px-5 pt-12 text-center text-base font-light text-white">
      <div className="flex flex-col">
        <div className="text-center text-xl font-semibold leading-6 text-amber-400">
          About Sharecare
        </div>
        {aboutLinks.map((item, index) => (
          <Link href={item.link}>
            <div
              className="mt-2 text-center text-sm leading-5 tracking-wide text-white"
              key={index}
            >
              {item.title}
            </div>
          </Link>
        ))}
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
      <div className="flex flex-col">
        <div className="text-center text-xl font-semibold leading-6 text-amber-400">
          Help & Support
        </div>
        {helpSupport.map((item, key) => (
          <Link href={item.link}>
            <div
              className="mt-2 text-center text-sm leading-5 tracking-wide text-white"
              key={key}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center text-xl font-semibold leading-6 text-amber-400">
        Connect with Us
      </div>
      <div className="mt-2 flex justify-center gap-4">
        <div className="align-center flex gap-4">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
      </div>
      <div className="mt-4 self-center text-center text-xs font-medium leading-4 tracking-wide text-white">
        2023 Sharecare. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
