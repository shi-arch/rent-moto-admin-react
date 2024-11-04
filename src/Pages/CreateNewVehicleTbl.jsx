import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleAsyncError } from "../utils/Helper/handleAsyncError.js";
import { InputComponent, SelectComponent3, SelectComponent2 } from "../components/CommonComponents/commonComponents.jsx";
import { setUpdateData } from "../Redux/AdsSlice/VehicleSlice.js";
import { postApi } from "../response/api.js";
import { setError } from "../Redux/ErrorSlice/ErrorSlice.js";
import { staticData } from "../constant.js";

const CreateNewVehicleTbl = () => {
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
  const createVehicle = async () => {
    const res = await postApi('/createVehicle', updateData)
    if (res && res.status == 200) {
      dispatch(setError({ type: "success", message: res.message }))
      navigate('/vehicleTbl')
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
        Create New Vehicle Table
      </h1>
      <div className="w-full lg:w-[95%] shadow-lg rounded-xl p-5 mx-auto bg-white">
        <div style={{ display: "flex", marginTop: "15px" }}>
          
        <SelectComponent3 />
          <InputComponent
            label="Free Kms"
            type="text"
            placeholder="Please Enter free Kms"
            name="freeKms"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
        <SelectComponent2 />
          <InputComponent
            type="text"
            label={"Station Id"}
            placeholder="Please Enter Vehicle station Id"
            name="stationId"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label="Vehicle Number"
            placeholder="Please Enter Vehicle vehicle number"
            name="vehicleNumber"
          />
          <InputComponent
            type="text"
            label={"Vehicle Model"}
            placeholder="Please Enter Vehicle vehicle model"
            name="vehicleModel"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label="Extra Kms Charges"
            placeholder="Please Enter Vehicle extra Kms Charges"
            name="extraKmsCharges"
          />
          <InputComponent
            type="text"
            label="Vehicle Color"
            placeholder="Please Enter Vehicle vehicle Color"
            name="vehicleColor"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label="Per Day Cost"
            placeholder="Please Enter Per Day Cost"
            name="extraKmsCharges"
          />
          <InputComponent
            type="text"
            label="Last Service Date"
            placeholder="Please Enter Last Service Date"
            name="lastServiceDate"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label="Kms Run"
            placeholder="Please Enter Kms Run"
            name="kmsRun"
          />
          <InputComponent
            type="text"
            label="Is Booked"
            placeholder="Please Enter is booked"
            name="isBooked"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label="Condition"
            placeholder="Please Enter Condition"
            name="extraKmsCharges"
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

export default CreateNewVehicleTbl;
