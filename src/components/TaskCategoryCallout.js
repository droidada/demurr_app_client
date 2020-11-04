import React from 'react';
import { CCol, CCallout, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Link } from 'react-router-dom';

const colorArray = ['warning', 'info', 'danger', 'secondary'];

const calloutCollors = colorArray[Math.floor(Math.random() * 4)];

const TaskCategoryCallout = ({ description, title }) => {
  return (
    <CCol col="12" sm="3">
      <CCallout
        color={calloutCollors}
        className={'bg-secondary'}
        style={{
          height: '150px',
          width: '300px',
          padding: '10px',
          position: 'relative',
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
          className="float-right"
          style={{ position: 'absolute', bottom: 0, right: 0 }}
        >
          <CIcon size="sm" name="cil-trash" />
        </CButton>
        <Link to={`/tasks/category/edit/1`}>
          <CButton
            style={{ position: 'absolute', top: 0, right: 0 }}
            color="info"
            className="float-right"
          >
            <CIcon name="cil-pencil" />
          </CButton>
        </Link>
      </CCallout>
    </CCol>
  );
};

export default TaskCategoryCallout;
