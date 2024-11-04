import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModal,
  toggleSideBar,
} from "../../Redux/SideBarSlice/SideBarSlice";
import { useIsMobile } from "../../utils";
import { useEffect, useState } from "react";
import { ImageSkeleton } from "../Skeleton";

// icons import
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const { is_open } = useSelector((state) => state.sideBar);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (isMobile) {
      if (!is_open) {
        dispatch(toggleSideBar());
      }
    }
  }, [window.location.href]);

  const menuList = [
    {
      menuImg: <DashboardRoundedIcon />,
      menuTitle: "Dashboard",
      menuLink: "/dashboard",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Vehicle",
      menuLink: "/vehicles",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Users",
      menuLink: "/users",
    },
    {
      menuImg: <LocationOnRoundedIcon />,
      menuTitle: "Plans",
      menuLink: "/plans",
    },
    {
      menuImg: <LocationOnRoundedIcon />,
      menuTitle: "Stations",
      menuLink: "/stations",
    },
    {
      menuImg: <LocationOnRoundedIcon />,
      menuTitle: "Locations",
      menuLink: "/locations",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Vehicle Table",
      menuLink: "/vehicleTbl",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Manage Vehicles",
      menuLink: "/manage-vehicles",
      nestedLink: {},
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Manage VehicleTbl",
      menuLink: "/manage-vehicleTbl",
      nestedLink: {},
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Manage Users",
      menuLink: "/manage-users",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Manage Locations",
      menuLink: "/manage-locations",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Manage Stations",
      menuLink: "/manage-stations",
    },
    {
      menuImg: <DirectionsCarRoundedIcon />,
      menuTitle: "Manage Plans",
      menuLink: "/manage-plans",
    },
    {
      menuImg: <PaymentRoundedIcon />,
      menuTitle: "Payments",
      menuLink: "/payments",
    },
  ];

  return (
    <div className="shadow-lg min-h-screen dark:shadow-gray-500 bg-theme-black border-r-2 border-gray-700">
      {/* <div className="shadow-lg min-h-screen dark:shadow-gray-500 bg-theme-seconday-dark"> */}
      {/* close button  */}
      <div className="lg:hidden float-right px-5 py-4">
        <button
          className="border border-gray-300 rounded-lg p-2 dark:border-gray-100"
          title="close"
          onClick={() => dispatch(toggleSideBar())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-black dark:stroke-white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="py-[1.5rem]">
        {/* <div className="w-40 lg:w-[12.5rem] h-auto lg:h-20 mx-auto">
          show this until image load fully 
          {imageLoading && <ImageSkeleton />}
          <img
            src={theme !== "dark" ? webLogo : webLogoWhite}
            className="w-full h-full object-contain"
            loading="lazy"
            alt="sure success"
            onLoad={() => setImageLoading(false)}
          />
        </div> */}
        <h2 className="uppercase font-black text-4xl text-theme text-center">
          Rento
        </h2>
      </div>
      <div
        className="px-4 py-6 overflow-y-scroll no-scrollbar"
        style={{ height: "calc(100vh - 88px)" }}
      >
        <ul className="leading-10 text-gray-100">
          {menuList.map((item, index) => (
            <Link to={`${item?.menuLink}`} key={index}>
              <li
                className={`px-4 py-2 group capitalize ${
                  location.pathname == `${item?.menuLink}` ||
                  location.pathname == `${item?.moreLink}`
                    ? "bg-theme text-gray-100"
                    : ""
                } hover:bg-theme transition duration-300 ease-in-out rounded-lg flex items-center gap-2 mb-2 dark:text-gray-100`}
              >
                <div
                  className={`w-7 h-7 group-hover:text-gray-100 text-lg ${
                    location.pathname == `${item?.menuLink}`
                      ? "text-gray-100"
                      : ""
                  }`}
                >
                  {/* menuItem icon  */}
                  {item?.menuImg}
                </div>
                <span className="group-hover:text-gray-100">
                  {item?.menuTitle}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
