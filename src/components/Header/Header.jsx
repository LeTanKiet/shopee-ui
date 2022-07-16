// import images from "~/assets/images";

import Navigation from "./components/Navigation";

const Header = () => {
    return (
        <div className="h-header bg-gradient-to-b from-[#f53d2d] to-[#ff6633]">
            <div className="max-w-max_width mx-auto text-white text-[13px]">
                {/* Navigation */}
                <Navigation />

                {/* Body */}
                {/* <img src={images.logo} alt="" /> */}
            </div>
        </div>
    );
};

export default Header;
