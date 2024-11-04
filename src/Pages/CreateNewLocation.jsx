import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleAsyncError } from "../utils/Helper/handleAsyncError.js";
import { InputComponent, SelectComponent } from "../components/CommonComponents/commonComponents.jsx";
import { setUpdateData } from "../Redux/AdsSlice/VehicleSlice.js";
import { postApi } from "../response/api.js";
import { setError } from "../Redux/ErrorSlice/ErrorSlice.js";
import { staticData } from "../constant.js";

const CreateNewLocation = () => {
  const navigate = useNavigate();
  const { updateData } = useSelector(state => state.vehicles)
  const { vehicleId, freeKms, extraKmsCharges, locationId, stationId, vehicleNumber, vehicleModel, vehicleColor, vehiclePlan, perDayCost, lastServiceDate, kmsRun, isBooked, condition } = updateData
  useEffect(() => {
    if (Object.keys(updateData).length) {
      setImageUrl(updateData.locationImage);
    } else {
      dispatch(setUpdateData({ vehicleType: "gear" }))
    }
  }, [])
  const dispatch = useDispatch();
  const [imagesUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(1);

  const handleImageChange = async (file) => {
    setImage(file)
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }
  const createVehicle = async () => {
    const res = await postApi('/createLocation', updateData)
    if (res && res.status == 200) {
      dispatch(setError({ type: "success", message: res.message }))
      navigate('/locations')
    } else {
      dispatch(setError({ type: "error", message: res.message }))
    }
  }
  const updateRows = () => {
    if (window.innerWidth < 640) {
      setRows(2);
    } else {
      setRows(1);
    }
  };
  useEffect(() => {
    updateRows();
    window.addEventListener("resize", updateRows);
    return () => {
      window.removeEventListener("resize", updateRows);
    };
  }, []);

  return (
    <>
      <h1 className="text-2xl uppercase font-bold text-theme mb-5">
        Create New Location
      </h1>
      <div className="w-full lg:w-[95%] shadow-lg rounded-xl p-5 mx-auto bg-white">
        <p className="block text-gray-800 font-semibold text-sm mb-2">Image</p>
        <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-6 md:py-5 lg:py-4 text-center mb-5">
          <input
            type="file"
            className="hidden"
            id="ImageInput"
            accept="image/*"
            onChange={(e) => handleImageChange(e.target.files[0])}
          />
          {imagesUrl ? (
            //  image preview only shows when there user select any image
            <>
              <div className="lg:absolute block text-right right-8 z-50 mb-5">
                {/* remove image if user want to reupload another image  */}
                <button
                  className="inline-flex items-center gap-1 text-red-500 border border-red-500 p-1 rounded-md hover:bg-red-500 hover:text-gray-100 transition duration-300 ease-in-out group"
                  onClick={() => {
                    setImageUrl("")
                    dispatch(setUpdateData({ ...updateData, locationImage: "" }));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:stroke-gray-100 stroke-red-500 transition duration-300 ease-in-out group"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                  Remove
                </button>
            </div>
              <div className="w-full h-28 lg:h-40 mx-auto relative mx-auto">
                <img
                  src={imagesUrl}
                  className="w-full h-full object-contain hover:border rounded-xl transition duration-300 ease-in-out"
                  alt="UPLOAD_IMAGE"
                />
              </div>
            </>
          ) : (
            <label htmlFor="ImageInput" className="cursor-pointer">
              {/* if not showing image preview than show option to upload */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g transform="translate(2 3)">
                  <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" />
                  <circle cx="10" cy="10" r="4" />
                </g>
              </svg>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <label
                  htmlFor="ImageInput"
                  className="cursor-pointer text-theme hover:underline mr-1"
                >
                  Browse
                </label>
                to upload logo.
              </p>
            </label>
          )}
        </div>
        <button
          onClick={async () => {
            if (image) {
              const formData = new FormData();
              formData.append('profileImg', image);
              const response = await postApi('/image-upload', { formData })
              if (response && response.data) {
                dispatch(setError({ type: "success", message: response.message }))
                dispatch(setUpdateData({ ...updateData, locationImage: response.data }))
                setImageUrl(response.data)
              }
            } else {
              dispatch(setError({ type: "error", message: "Please upload image" }))
            }
          }}
          className="bg-theme hover:bg-theme-dark text-white font-bold px-5 py-3 rounded-md w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
          type="submit"
          disabled={loading}
        >
          {loading ?
            <div className="flex items-center justify-center">
              <span className="mr-2">uploading</span>
              <div className="w-5 h-5 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
            : "Publish"}
        </button>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label="Location Name"
            placeholder="Please Enter Location Name"
            name="locationName"
          />
          <InputComponent
            type="text"
            label="Image Url"
            placeholder="Please Enter Image url"
            name="locationImage"
          />
        </div>
        <button
          onClick={createVehicle}
          className="bg-theme hover:bg-theme-dark text-white font-bold px-5 py-3 rounded-md w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
        >
          {updateData._id ? "Update" : "Create"}
        </button>

      </div>
    </>
  );
};

export default CreateNewLocation;
