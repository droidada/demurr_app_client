import React from 'react';
import { CCard, CCol, CCardBody, CCardHeader, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Link } from 'react-router-dom';

const TaskQualificationCard = ({ title, description, id }) => {
  return (
    <CCol sm="3">
      <CCard style={{ position: 'relative', height: '220px' }}>
        <CCardHeader>{title}</CCardHeader>
        <CCardBody className="pb-4">
          {description}{' '}
          <CButton
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            color="danger"
            className="float-right"
          >
            <CIcon name="cil-trash" />
          </CButton>
          <Link to={`/tasks/qualifications/edit/${id}`}>
            <CButton
              style={{ position: 'absolute', top: 0, right: 0 }}
              color="info"
              className="float-right"
            >
              <CIcon name="cil-pencil" />
            </CButton>
          </Link>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default TaskQualificationCard;
