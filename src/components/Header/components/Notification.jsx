import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import { Button } from "~/components";
import routes from "~/configs/routes";

const Notification = () => {
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <span href="/" className="relative group">
            <FontAwesomeIcon className="nav__icon" icon={faBell} />
            <span>Thông báo</span>

            <div
                className="absolute top-full right-0 hidden flex-col group-hover:flex w-[400px] bg-white text-txt text-[14px] rounded-sm mt-2 shadow-sd origin-[85%_0%] animate-growth
    before:absolute before:top-[-30px] before:right-0 before:hidden before:group-hover:inline-block before:border-x-[30px] before:border-y-[20px] 
    before:border-solid before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-white"
            >
                {currentUser ? (
                    <div></div>
                ) : (
                    <div>
                        <div className="flex flex-col items-center justify-center h-[310px]">
                            <img
                                src={images.no_notify}
                                alt="No Notify"
                                className="w-[100px] h-[100px] object-cover"
                            />
                            <p className="mt-5 text-txt">
                                Đăng nhập để xem thông báo
                            </p>
                        </div>
                        <div className="h-[1px] bg-[#eee]"></div>
                        <div className="grid grid-cols-2 h-10">
                            <Button
                                primary
                                to={routes.login}
                                className="h-full bg-[#f5f5f5] hover:bg-[#e8e8e8]"
                            >
                                Đăng ký
                            </Button>
                            <Button
                                primary
                                to={routes.login}
                                className="h-full bg-[#f5f5f5] hover:bg-[#e8e8e8]"
                            >
                                Đăng nhập
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </span>
    );
};

export default Notification;
