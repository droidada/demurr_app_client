import React from 'react';
import { CCol, CCallout, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';

const StoreItemCategoryCallout = ({
  color,
  description,
  title,
  deleteCategory,
}) => {
  return (
    <CCol col="12" sm="3">
      <CCallout
        color={color}
        className={'bg-secondary'}
        style={{
          height: '120px',
          padding: '5px',
        }}
      >
        <strong className="h4">{title}</strong>
        <br />
        <br />
        <small className="text-muted">{description}</small>
        <br />
        <br />
        <CButton
          color="danger"
          onClick={deleteCategory}
          className="float-right"
        >
          <CIcon name="cil-trash" />
        </CButton>
      </CCallout>
    </CCol>
  );
};

export default StoreItemCategoryCallout;
