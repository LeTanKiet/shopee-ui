import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import images from "~/assets/images";
import routes from "~/configs/routes";
import Language from "./Laguage";
import Notification from "./Notification";

const Navigation = () => {
    return (
        <nav className="flex justify-between mx-[-8px]">
            <ul className="flex">
                <li className="nav__item">
                    <a href={routes.home} target="_blank" rel="noreferrer">
                        <span>Kênh người bán</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href={routes.home}>
                        <span>Trở thành người bán Shopee</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        href={routes.home}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative"
                    >
                        <span>Tải ứng dụng</span>
                        {/* Download App */}
                        <div
                            className="absolute left-0 top-full w-[180px] hidden group-hover:flex flex-col bg-white p-1 mt-3 rounded-sm shadow-sd animate-fade_out
                        before:content-[''] before:absolute before:h-3 before:w-full before:top-[-12px] before:left-0 before:bg-transparent"
                        >
                            <img
                                className=""
                                src={images.qr_code}
                                alt="QR Code"
                            />
                            <div className="px-3 py-1 grid grid-cols-2 gap-3">
                                <img src={images.app_store} alt="App Store" />
                                <img
                                    src={images.google_play}
                                    alt="Google Play"
                                />
                                <img
                                    src={images.app_gallery}
                                    alt="App Gallery"
                                />
                            </div>
                        </div>
                    </a>
                </li>
                <li className="nav__item">
                    <span href={routes.home}>
                        <span className="mr-1">Kết nối</span>
                        <FontAwesomeIcon
                            className="nav__icon"
                            icon={faFacebook}
                        />
                        <FontAwesomeIcon
                            className="nav__icon"
                            icon={faInstagram}
                        />
                    </span>
                </li>
            </ul>

            <ul className="flex">
                <li className="nav__item">
                    <Notification />
                </li>
                <li className="nav__item">
                    <a href={routes.home} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            className="nav__icon"
                            icon={faCircleQuestion}
                        />
                        <span>Hỗ trợ</span>
                    </a>
                </li>
                <li className="nav__item">
                    <Language />
                </li>
                <li className="nav__item">
                    <Link to={routes.login}>
                        <span>Đăng ký</span>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to={routes.login}>
                        <span>Đăng nhập</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
