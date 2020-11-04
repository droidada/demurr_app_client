import React, { useContext } from 'react';
import { CCol, CCallout, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import AddressContext from '../context/AddressContext';

const colorArray = ['warning', 'info', 'danger', 'secondary'];

const calloutCollors = colorArray[Math.floor(Math.random() * 4)];

const AddressCallout = ({ color, name, address, id }) => {
  const { removeAddress } = useContext(AddressContext);

  return (
    <CCol col="12" sm="3">
      <CCallout
        color={color ? color : calloutCollors}
        className="bg-secondary"
        style={{
          height: '120px',
          padding: '5px',
        }}
      >
        <strong className="h4">{name}</strong>
        <br />
        <br />
        <small className="text-muted h6">{address}</small>
        <br />
        <br />
        <CButton
          onClick={() => removeAddress(id)}
          color="danger"
          className="float-right"
        >
          <CIcon name="cil-trash" />
        </CButton>
      </CCallout>
    </CCol>
  );
};

export default AddressCallout;
