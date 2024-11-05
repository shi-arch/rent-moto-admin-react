import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  MRT_EditActionButtons,
  useMaterialReactTable,
} from 'material-react-table';
import { Create, DeleteForever } from "@mui/icons-material";

import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setColumnData, setUpdateData } from '../../Redux/AdsSlice/VehicleSlice';
import { userColumns, vehicleColumns, vehicleTableColumns, locationColumns, planColumns, stationColumns } from '../../constant';
import DeleteModal from '../Modal/DeleteModal';
import { toggleDeleteModal, toggleModal } from '../../Redux/SideBarSlice/SideBarSlice';
const CustomTable = () => {
  const { tableData, columnData } = useSelector(state => state.vehicles)
  const [locateUrl, setLocateUrl] = useState(window.location.pathname)
  const [columns, setColumns] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  let actionC1 = {
    accessorKey: '_id',
    header: 'Actions',
    enableEditing: false,
    size: 80,
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <DialogActions>
          <span onClick={() => {
            dispatch(setUpdateData(row.original))
            navigate(`/manage-${window.location.pathname.substr(1, window.location.pathname.length)}`)
          }} style={{ marginRight: "10px", cursor: "pointer" }}><Create /></span>
          <span onClick={() => {
            let data = JSON.parse(JSON.stringify(row.original))
            //data._id = JSON.stringify(row.original._id)
            debugger
            dispatch(setUpdateData(row.original))
            dispatch(toggleDeleteModal())
          }} style={{ cursor: "pointer", color: "#e23844" }}><DeleteForever /></span>
        </DialogActions>
      </Box>
    )
  }
  let imgC2 = {
    accessorFn: (row) => `${row.vehicleImage}`, //accessorFn used to join multiple data into a single cell
    id: 'vehicleImage', //id is still required when using accessorFn instead of accessorKey
    header: 'Vehicle Image',
    size: 250,
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <img
          alt="avatar"
          width={"60%"}
          height={30}
          src={renderedCellValue}
          loading="lazy"
          style={{ borderRadius: '40%' }}
        />
      </Box>
    ),
  }

  let imgC3 = {
    accessorFn: (row) => `${row.locationImage}`, //accessorFn used to join multiple data into a single cell
    id: 'locationImage', //id is still required when using accessorFn instead of accessorKey
    header: 'Location Image',
    size: 250,
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <img
          alt="avatar"
          width={"60%"}
          height={30}
          src={renderedCellValue}
          loading="lazy"
          style={{ borderRadius: '40%' }}
        />
      </Box>
    ),
  }
  useEffect(() => {
    if(locateUrl){
      if(locateUrl.includes("vehicleTbl")){
        setColumns([actionC1 ].concat(vehicleTableColumns))
      } else if(locateUrl.includes("user")){
        setColumns([actionC1 ].concat(userColumns))
      } else if(locateUrl.includes("vehicle")){
        setColumns([actionC1, imgC2 ].concat(vehicleColumns))
      } else if(locateUrl.includes("location")){
        setColumns([actionC1, imgC3 ].concat(locationColumns))
      } else if(locateUrl.includes("plan")){
        setColumns([actionC1 ].concat(planColumns))
      } else if(locateUrl.includes("station")){
        setColumns([actionC1 ].concat(stationColumns))
      }
    }
  }, [locateUrl])

  const table = useMaterialReactTable({
    columns,
    data: tableData
  });

  return <MaterialReactTable table={table} />
};

export default CustomTable;
