import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleAsyncError } from "../utils/Helper/handleAsyncError.js";
import { InputComponent, SelectComponent, SelectComponent2 } from "../components/CommonComponents/commonComponents.jsx";
import { setUpdateData } from "../Redux/AdsSlice/VehicleSlice.js";
import { postApi } from "../response/api.js";
import { setError } from "../Redux/ErrorSlice/ErrorSlice.js";
import { staticData } from "../constant.js";

const CreateNewStation = () => {
  const navigate = useNavigate();
  const { updateData } = useSelector(state => state.vehicles)
  const { vehicleId, freeKms, extraKmsCharges, locationId, stationId, vehicleNumber, vehicleModel, vehicleColor, vehiclePlan, perDayCost, lastServiceDate, kmsRun, isBooked, condition } = updateData
  useEffect(() => {
    if (Object.keys(updateData).length) {
      setImageUrl(updateData.vehicleImage);
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
  const create = async () => {
    const res = await postApi('/createStation', updateData)
    if (res && res.status == 200) {
      dispatch(setError({ type: "success", message: res.message }))
      navigate('/stations')
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
        Create New Station
      </h1>
      <div className="w-full lg:w-[95%] shadow-lg rounded-xl p-5 mx-auto bg-white">
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            label="Station Id"
            type="text"
            placeholder="Please Enter Station Id"
            name="stationId"
          />
          <SelectComponent2 />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          
          <InputComponent
            type="text"
            label="Station Name"
            placeholder="Please Enter Station Name"
            name="stationName"
          />
        </div>
        <button
          onClick={create}
          className="bg-theme hover:bg-theme-dark text-white font-bold px-5 py-3 rounded-md w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
        >
          {updateData._id ? "Update" : "Create"}
        </button>

      </div>
    </>
  );
};

export default CreateNewStation;
