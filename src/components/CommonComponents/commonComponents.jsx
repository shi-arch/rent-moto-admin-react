import { useDispatch, useSelector } from "react-redux";
import { setUpdateData } from "../../Redux/AdsSlice/VehicleSlice";
import { useEffect, useState } from "react";
import { getApi } from "../../response/api";
import { setError } from "../../Redux/ErrorSlice/ErrorSlice";

export const InputComponent = ({ type, placeholder, name, label }) => {
    const { updateData } = useSelector((state) => state.vehicles);
    const dispatch = useDispatch();
    return (
        <div style={{ display: "block", width: "100%", marginRight: "15px" }}>
            <span>{label}</span>
            <input
                style={{ marginRight: "10px", display: "block" }}
                type={type}
                className="w-full pl-[3.4rem] pr-4 py-3.5 appearance-none bg-transparent outline-none border border-gray-100 lg:border-gray-300 focus:border-text-gray-200 lg:focus:border-theme lg:focus:text-gray-800 text-gray-100 lg:text-gray-800 outline-none rounded-lg placeholder-gray-100 lg:placeholder-gray-400"
                placeholder={placeholder}
                value={updateData[name]}
                onChange={(e) => dispatch(setUpdateData({ ...updateData, [name]: e.target.value }))}
                name={name}
            />
        </div>

    );
};

export const SelectComponent2 = () => {
    const { updateData } = useSelector(state => state.vehicles)
    const [locationData, setLocationData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            if (updateData && locationData.length == 0) {
                const res = await getApi('/getLocationData', updateData)
                if (res && res.status == 200) {
                    dispatch(setError({ type: "success", message: res.message }))
                    setLocationData(res.data)
                } else {
                    dispatch(setError({ type: "error", message: res.message }))
                }
            }

        })()
    }, [updateData])
    return (
        <div style={{ display: "block", width: "100%", marginRight: "15px" }}>
            <label htmlFor="cars">Location</label>
            <select style={{ height: "57px" }}
                className="w-full pl-[3.4rem] pr-4 py-3.5 appearance-none bg-transparent outline-none border border-gray-100 lg:border-gray-300 focus:border-text-gray-200 lg:focus:border-theme lg:focus:text-gray-800 text-gray-100 lg:text-gray-800 outline-none rounded-lg placeholder-gray-100 lg:placeholder-gray-400"
                onChange={async (e) => {
                    const filter = { ...updateData, locationId: e.target.value }
                    dispatch(setUpdateData(filter))
                }} name="cars" id="cars">
                {
                    locationData.length ? locationData.map((o) => (
                        <option selected={o._id == updateData.locationId ? true : false} key={o.locationName} value={o._id}>{o.locationName}</option>
                    )) : ""
                }
            </select>
        </div>

    );
};

export const Spinner = ({ message }) => {
    return (
        <div className="flex items-center justify-center">
            <span className="mr-2">{message}</span>
            <div className="w-5 h-5 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        </div>
    );
};

export const SelectComponent3 = () => {
    const { updateData } = useSelector(state => state.vehicles)
    const [locationData, setLocationData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            if (updateData && locationData.length == 0) {
                const res = await getApi('/getVehicleMasterData', updateData)
                if (res && res.status == 200) {
                    dispatch(setError({ type: "success", message: res.message }))
                    setLocationData(res.data)
                } else {
                    dispatch(setError({ type: "error", message: res.message }))
                }
            }

        })()
    }, [updateData])
    return (
        <div style={{ display: "block", width: "100%", marginRight: "15px" }}>
            <label htmlFor="cars">Location</label>
            <select style={{ height: "57px" }}
                className="w-full pl-[3.4rem] pr-4 py-3.5 appearance-none bg-transparent outline-none border border-gray-100 lg:border-gray-300 focus:border-text-gray-200 lg:focus:border-theme lg:focus:text-gray-800 text-gray-100 lg:text-gray-800 outline-none rounded-lg placeholder-gray-100 lg:placeholder-gray-400"
                onChange={async (e) => {
                    const filter = { ...updateData, vehicleId: e.target.value }
                    dispatch(setUpdateData(filter))
                }} name="cars" id="cars">
                {
                    locationData.length ? locationData.map((o) => (
                        <option selected={o._id == updateData.vehicleId ? true : false} key={o.vehicleName} value={o._id}>{o.vehicleName}</option>
                    )) : ""
                }
            </select>
        </div>

    );
};

export const SelectComponent = ({ data, label }) => {
    const { updateData } = useSelector(state => state.vehicles)
    const dispatch = useDispatch()
    return (
        <div style={{ display: "block", width: "100%", marginRight: "15px" }}>
            <label htmlFor="cars">{label}</label>
            <select style={{ height: "57px" }}
                className="w-full pl-[3.4rem] pr-4 py-3.5 appearance-none bg-transparent outline-none border border-gray-100 lg:border-gray-300 focus:border-text-gray-200 lg:focus:border-theme lg:focus:text-gray-800 text-gray-100 lg:text-gray-800 outline-none rounded-lg placeholder-gray-100 lg:placeholder-gray-400"
                onChange={async (e) => {
                    const filter = { ...updateData, vehicleType: e.target.value }
                    dispatch(setUpdateData(filter))
                }} name="cars" id="cars">
                {
                    data && data.length ? data.map((o) => (
                        <option selected={o.value == updateData.vehicleType ? true : false} key={o.value} value={o.value}>{o.label}</option>
                    )) : ""
                }
            </select>
        </div>

    );
};