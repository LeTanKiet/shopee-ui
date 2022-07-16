import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LANGUAGE_LIST = ["Tiếng Việt", "English"];

const Language = () => {
    const [currentLanguage, setCurrentLanguage] = useState("Tiếng Việt");

    const handleChangeLanguage = (e) => {
        setCurrentLanguage(e.target.innerText);
    };

    return (
        <span className="relative group">
            <FontAwesomeIcon className="nav__icon" icon={faGlobe} />
            <span>{currentLanguage}</span>

            <div
                className="absolute top-full right-0 hidden flex-col group-hover:flex w-[200px] bg-white text-txt text-[15px] rounded-sm mt-2 shadow-sd origin-[85%_0%] animate-growth
    before:absolute before:top-[-30px] before:right-0 before:hidden before:group-hover:inline-block before:border-x-[30px] before:border-y-[20px] 
    before:border-solid before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-white"
            >
                {LANGUAGE_LIST.map((language, index) => {
                    return (
                        <div key={index}>
                            <span
                                className="block px-4 py-[9px] hover:text-primary hover:bg-slate-50 transition-colors"
                                onClick={handleChangeLanguage}
                            >
                                {language}
                            </span>

                            <span className="block h-[1px] bg-[#eee]"></span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

export default Language;
