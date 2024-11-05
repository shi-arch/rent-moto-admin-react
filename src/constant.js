export const baseUrl = 'http://localhost:5000/'

export const staticData = [{ label: "Gear", value: "gear" }, { label: "Non-Gear", value: "non-gear" }]

export const vehicleColumns = [
    {
        accessorKey: 'vehicleName', //access nested data with dot notation
        header: 'Vehicle Name',
        size: 150,
    },
    {
        accessorKey: 'vehicleType',
        header: 'Vehicle Type',
        size: 150,
    },
    {
        accessorKey: 'vehicleBrand', //normal accessorKey
        header: 'Vehicle Brand',
        size: 150,
    },
]


export const stationColumns = [
    {
        accessorKey: 'stationId', //access nested data with dot notation
        header: 'Station Id',
        size: 150,
    },
    {
        accessorKey: 'stationName',
        header: 'Station Name',
        size: 150,
    }
]


export const planColumns = [
    {
        accessorKey: 'planName',
        header: 'Plan Name',
        size: 150,
    },
    {
        accessorKey: 'planPrice', //access nested data with dot notation
        header: 'Plan Price',
        size: 150,
    },
    {
        accessorKey: 'location',
        header: 'Location',
        size: 150,
    },
    {
        accessorKey: 'stationId',
        header: 'Station Id',
        size: 150,
    }    
]


export const locationColumns = [
    {
        accessorKey: 'locationName', //access nested data with dot notation
        header: 'Location Name',
        size: 150,
    }
]

export const vehicleTableColumns = [
    {
        accessorKey: 'vehicleName', //access nested data with dot notation
        header: 'vehicleName',
        size: 150,
    },
    {
        accessorKey: 'freeKms',
        header: 'Free Kms',
        size: 150,
    },
    {
        accessorKey: 'locationName', //normal accessorKey
        header: 'Location',
        size: 150,
    },
    {
        accessorKey: 'stationName', //normal accessorKey
        header: 'Station',
        size: 150,
    },
    {
        accessorKey: 'vehicleNumber', //normal accessorKey
        header: 'Vehicle Number',
        size: 150,
    },
    {
        accessorKey: 'vehicleModel', //normal accessorKey
        header: 'Vehicle Model',
        size: 150,
    },
    {
        accessorKey: 'extraKmsCharges', //normal accessorKey
        header: 'Extra Kms Charges',
        size: 150,
    },
    {
        accessorKey: 'vehicleColor', //normal accessorKey
        header: 'Vehicle Color',
        size: 150,
    },
    {
        accessorKey: 'perDayCost', //normal accessorKey
        header: 'Per Day Cost',
        size: 150,
    },
    {
        accessorKey: 'lastServiceDate', //normal accessorKey
        header: 'Last Service Date',
        size: 150,
    },
    {
        accessorKey: 'kmsRun', //normal accessorKey
        header: 'Kms Run',
        size: 150,
    },
    {
        accessorKey: 'isBooked', //normal accessorKey
        header: 'Is Booked',
        size: 150,
    },
    {
        accessorKey: 'condition', //normal accessorKey
        header: 'Condition',
        size: 150,
    }
]

export const userColumns = [
    {
        accessorKey: 'userType', //access nested data with dot notation
        header: 'User Type',
        size: 150,
    },
    {
        accessorKey: 'isEmailVerified',
        header: 'Email Verified',
        size: 150,
    },
    {
        accessorKey: 'isContactVerified', //normal accessorKey
        header: 'Contact Verified',
        size: 150,
    },
    {
        accessorKey: 'kycApproved', //normal accessorKey
        header: 'Kyc Approved',
        size: 150,
    },
    {
        accessorKey: 'userDocuments', //normal accessorKey
        header: 'Documents',
        size: 150,
    },
    {
        accessorKey: 'status', //normal accessorKey
        header: 'Status',
        size: 150,
    },
    {
        accessorKey: 'altContact', //normal accessorKey
        header: 'Alternate Contact',
        size: 150,
    },
    {
        accessorKey: 'firstName', //normal accessorKey
        header: 'First Name',
        size: 150,
    },
    {
        accessorKey: 'lastName', //normal accessorKey
        header: 'Last Name',
        size: 150,
    },
    {
        accessorKey: 'contact', //normal accessorKey
        header: 'Contact',
        size: 150,
    },
    {
        accessorKey: 'email', //normal accessorKey
        header: 'Email',
        size: 150,
    }
]