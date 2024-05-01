import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="sticky top-0 flex flex-col min-w-max z-30 bg-gradient-to-b from-white to-transparent">
            <header className="p-4 flex justify-between">
                <button onClick={() => setNavOpen(!navOpen)}><MenuIcon /></button>
                <button><h1 className="text-xl">Sharecare</h1></button>

            </header>
            <div className={`${navOpen ? "min-w-max h-128 px-4" : "hidden"}`}>Menu</div>
        </div>
    );
}

export default Navbar;