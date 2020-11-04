import React from 'react';
import {
  CCard,
  CCol,
  CCardBody,
  CCardHeader,
  CCardImg,
  CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Link } from 'react-router-dom';

const TaskEquipmentCard = ({ title, description, image, id }) => {
  return (
    <CCol sm="3">
      <CCard style={{ position: 'relative', height: '380px' }}>
        <CCardHeader>{title}</CCardHeader>
        <CCardImg src={image} style={{ height: '200px', objectFit: 'cover' }} />
        <CCardBody className="pb-4">
          {description}{' '}
          <CButton
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            color="danger"
            className="float-right"
          >
            <CIcon name="cil-trash" />
          </CButton>
          <Link to={`/tasks/equipments/edit/${id}`}>
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

export default TaskEquipmentCard;
