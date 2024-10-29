import Login from "./components/Auth/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CreateNewVehicle,
  Profile,
  AllVehicles,
  Dashboard,
} from "./Pages/index";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Login />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="manage-vehicles" exact element={<AllVehicles />} />
          <Route path="profile" exact element={<Profile />} />
          <Route
            path="create-new-vehicle"
            exact
            element={<CreateNewVehicle />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
