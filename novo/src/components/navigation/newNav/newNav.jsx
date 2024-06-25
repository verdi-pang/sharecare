'use client';
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ShareCareWordMark from "@/components/logos/wordmark";


const NewNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pages = [{ name: 'Products', url: "/product" }, { name: 'About Us', url: "/about" }, { name: 'FAQ', url: "/faq" }];
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link href="/">
                        <ShareCareWordMark />
                    </Link>
                    {/* <p className="font-bold text-inherit">ShareCare</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <ShareCareWordMark />
                    {/* <p className="font-bold text-inherit">ShareCare</p> */}
                </NavbarBrand>
                <NavbarItem>
                    <Link href="/product">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" aria-current="page">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/faq">
                        FAQ
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/auth/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="/auth/login" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {pages.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color="primary"
                            href={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NewNav;