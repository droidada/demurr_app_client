import React, { useState, useEffect } from 'react';
import {
  CFormGroup,
  CLabel,
  CInput,
  CButton,
} from '@coreui/react';
import { tarriffDummyData } from '../utils/tarrifData';

const TarrifGroup = ({ tab }) => {
  const fields = {
    upperLimit: '',
    lowerLimit: '',
    upperFeet: '',
    lowerFeet: '',
  };
  const [createMode, setMode] = useState(false);
  const [formData, setFormData] = useState(fields);
  
  const { upperLimit, lowerLimit, upperFeet, lowerFeet } = formData;

  useEffect(() => {
    setFormData(fields);
    setMode(false);
  }, [tab]);

  const handleChange = (val, attr) => {
    setFormData(_form => ({
      ..._form,
      [attr]: val
    }));
  };

  const onSubmit = async () => {
    console.log('submitted', { formData });
  };

  const toggleMode = () => setMode(!createMode);

  const isDisabled = () => {
    if (createMode && (!upperLimit || !lowerLimit || !upperFeet || !lowerFeet)) {
      return false;
    }
    return true;
  };

    
  return (
      <>
        {createMode ? (
          <>
            <div className="row">
                <div className="col-md-6">
                <CFormGroup>
                    <CLabel>Demurrage Days(Lower Limit)</CLabel>
                    <CInput
                    type="number"
                    value={lowerLimit}
                    onChange={e => handleChange(e.target.value, 'lowerLimit')}
                    id="lowerLimit"
                    name="lowerLimit"
                    placeholder="Enter lower limit"
                    />
                </CFormGroup>
                </div>
                <div className="col-md-6">
                <CFormGroup>
                    <CLabel>Demurrage Days(Upper Limit)</CLabel>
                    <CInput
                    type="number"
                    value={upperLimit}
                    onChange={e => handleChange(e.target.value, 'upperLimit')}
                    id="upperLimit"
                    name="upperLimit"
                    placeholder="Enter upper limit"
                    />
                </CFormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <CFormGroup>
                    <CLabel>Daily Rate(20 Feet)</CLabel>
                    <CInput
                    type="number"
                    value={lowerFeet}
                    onChange={e => handleChange(e.target.value, 'lowerFeet')}
                    id="lowerFeet"
                    name="lowerFeet"
                    placeholder="Enter daily rate"
                    />
                </CFormGroup>
                </div>
                <div className="col-md-6">
                <CFormGroup>
                    <CLabel>Daily Rate(40 Feet)</CLabel>
                    <CInput
                    type="number"
                    value={upperFeet}
                    onChange={e => handleChange(e.target.value, 'upperFeet')}
                    id="upperFeet"
                    name="upperFeet"
                    placeholder="Enter daily rate"
                    />
                </CFormGroup>
                </div>
            </div>
          </>
        ) : (
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Lower Limit</th>
                    <th className="text-center">Upper Limit</th>
                    <th className="text-center">20 FEET</th>
                    <th className="text-center">40 FEET</th>
                  </tr>
                </thead>
                <tbody>
                  {tarriffDummyData.map(_data => (
                    <tr key={_data.id}>
                      <td className="text-center">{_data.lowerLimit}</td>
                      <td className="text-center">{_data.upperLimit}</td>
                      <td className="text-center">{_data.lowerFeet}</td>
                      <td className="text-center">{_data.upperFeet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
        )}
        <CButton
          onClick={!createMode ? toggleMode : onSubmit}
          color="info"
          className="mt-5"
          disabled={!isDisabled()}
        >
          {createMode ? `Submit` : `Create a Tarrif +`}
        </CButton>
      </>
  );
};

export default TarrifGroup;
