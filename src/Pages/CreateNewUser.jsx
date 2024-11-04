import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleAsyncError } from "../utils/Helper/handleAsyncError.js";
import { InputComponent, SelectComponent } from "../components/CommonComponents/commonComponents.jsx";
import { setUpdateData } from "../Redux/AdsSlice/VehicleSlice.js";
import { postApi } from "../response/api.js";
import { setError } from "../Redux/ErrorSlice/ErrorSlice.js";
import { staticData } from "../constant.js";

const CreateNewUser = () => {
  const navigate = useNavigate();
  const { updateData } = useSelector(state => state.vehicles)
  const { userType, isEmailVerified, isContactVerified, kycApproved, userDocuments, status, altContact, firstName, lastName, contact, email } = updateData
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [aplicationUrl, setApplicationUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(1);
  const valid = () => {
    if (!userType) {
      dispatch(setError({ type: "error", message: "Please enter userType" }))
      return false
    } else if (!status) {
      dispatch(setError({ type: "error", message: "Please enter status" }))
      return false
    } else if (!firstName) {
      dispatch(setError({ type: "error", message: "Please select firstName" }))
      return false
    } else if (!lastName) {
      dispatch(setError({ type: "error", message: "Please enter lastName" }))
      return false
    } else if (!contact) {
      dispatch(setError({ type: "error", message: "Please enter contact" }))
      return false
    } else if (!email) {
      dispatch(setError({ type: "error", message: "Please enter email" }))
      return false
    }
    return true
  }
  const create = async () => {
    if (valid()) {
      const res = await postApi('/signup', updateData)
      if (res && res.status == 200) {
        dispatch(setError({ type: "success", message: res.message }))
        navigate('/users')
      } else {
        dispatch(setError({ type: "error", message: res.message }))
      }
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
        Create New User
      </h1>
      <div className="w-full lg:w-[95%] shadow-lg rounded-xl p-5 mx-auto bg-white">
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            label={"User Type"}
            type="text"
            placeholder="Please Enter User Type"
            name="userType"
          />
          <InputComponent
            label={"First Name"}
            type="text"
            placeholder="Please Enter firstName"
            name="firstName"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            label={"Last Name"}
            type="text"
            placeholder="Please Enter lastName"
            name="lastName"
          />
          <InputComponent
          label={"Email"}
            type="text"
            placeholder="Please Enter email"
            name="email"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
            type="text"
            label={"Contact"}
            placeholder="Please Enter contact"
            name="contact"
          />
          <InputComponent
          label={"Alternate Contact"}
            type="text"
            placeholder="Please Enter altContact"
            name="altContact"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
          label={"Status"}
            type="text"
            placeholder="Please Enter status"
            name="status"
          />
          <InputComponent
          label={"Password"}
            type="password"
            placeholder="Please Enter password"
            name="password"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
          label={"Email Verified"}
            type="text"
            placeholder="Please Enter isEmailVerified"
            name="isEmailVerified"
          />
          <InputComponent
          label={"Contact Verified"}
            type="text"
            placeholder="Please Enter isContactVerified"
            name="isContactVerified"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <InputComponent
          label={"KYC Approved"}
            type="text"
            placeholder="Please Enter kycApproved"
            name="kycApproved"
          />
          <InputComponent
          label={"User Documents"}
            type="text"
            placeholder="Please Enter userDocuments"
            name="userDocuments"
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

export default CreateNewUser;
