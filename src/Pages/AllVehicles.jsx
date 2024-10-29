// import noDataImg from "../assets/logo/No-data.svg";
import { Link } from "react-router-dom";
import EditLimitModal from "../components/Modal/EditLimitModal";
import NotFound from "../components/Error/NotFound";
import CustomTable from "../components/Table/Table";

const AllVehicles = () => {
  return (
    <>
      {/* edit limit modal  */}
      <EditLimitModal />
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl uppercase font-bold text-theme">
          Manage Vehicle
        </h1>
        <Link
          className="bg-theme font-semibold text-gray-100 px-4 lg:px-6 py-2.5 rounded-md shadow-lg hover:bg-theme-light hover:shadow-md inline-flex items-center gap-1"
          to={"/create-new-vehicle"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-gray-100"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add new
        </Link>
      </div>
      <div className="mt-5">
        <CustomTable />
      </div>
    </>
  );
};

export default AllVehicles;