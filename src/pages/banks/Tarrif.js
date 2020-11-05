import React, { useState, useCallback } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CInputFile,
  CButton,
} from '@coreui/react';
import { useParams } from 'react-router-dom'
import { useFetchTarrif, useEditTarrif } from '../../hooks';
import tarrifFormGroupOptions from '../../utils/tarrifData';
import TarrifGroup from '../../components/TarrifGroup';

const EditTarrif = () => {  
  const [tabIndex, setTab] = useState(1);

  const handleSwitch = (e, tab) => {
    setTab(tab.id);
  };

  const tarrifFormGroups = () => {
    return (
      <CFormGroup className="row col-md-8 mb-2">
        {tarrifFormGroupOptions.map(_i => (
          <React.Fragment key={_i.id}>
            <label htmlFor={_i.value}>{_i.label}</label>
            <input
              type="radio"
              name={_i.value}
              value={_i.value}
              className="mx-2 mt-1"
              checked={_i.id === tabIndex}
              onChange={e => handleSwitch(e, _i)}
            />
          </React.Fragment>
        ))}
      </CFormGroup>
    );
  };

  return (
    <>
      <CRow className="d-flex justify-content-center">
        <CCol md="10">
          <CCard style={{ backgroundColor: 'navyblue' }}>
            <CCardHeader className="font-weight-bold h4">
              Edit Tarrif
            </CCardHeader>
            <CCardBody>
              <CForm>
                {tarrifFormGroups()}                
                <TarrifGroup tab={tabIndex} />
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EditTarrif;
