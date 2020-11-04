import React, { lazy } from 'react';
import { CRow, CCol } from '@coreui/react';
import { useFetchAuthUser } from '../../hooks';
const WidgetsDropdown = lazy(() =>
  import('../../views/widgets/WidgetsDropdown')
);

const Dashboard = () => {
  const { data } = useFetchAuthUser();

  return (
    <div>
      <CRow className="mb-4">
        <CCol className="d-flex justify-content-between">
          <h2>Dashboard</h2>
          <span className="d-flex align-items-baseline">
            <p>Welcome</p>
            <h6 className="font-weight-bold ml-1">{data?.email}</h6>
          </span>
        </CCol>
      </CRow>
      <WidgetsDropdown />
    </div>
  );
};

export default Dashboard;
