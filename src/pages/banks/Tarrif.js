import React, { useState, useEffect } from 'react';
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

const EditTarrif = () => {
  const {id} = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image:'',
    line1: '',
    line2: '',
    zipCode: '',
    state: '',
    city: '',
    phoneNumber: '',
  });

  const {data: TarrifData, status: TarrifStatus} = useFetchTarrif()
  const editTarrif = useEditTarrif()

  const imageOnChangeHandler = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const { name, description, line1, line2, zipCode, state, city, phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const foundTarrif = TarrifStatus === 'success' && TarrifData.id === id;

  useEffect(() => {
    setFormData({
      name: foundTarrif.name ? foundTarrif.name : '',
      image: foundTarrif.image ? foundTarrif.image : '',
      description: foundTarrif.description ? foundTarrif.description : '',
      line1: foundTarrif.address ? foundTarrif.address.line1 : '',
      line2: foundTarrif.address ? foundTarrif.address.line2 : '',
      zipCode: foundTarrif.address ? foundTarrif.address.zipCode : '',
      city: foundTarrif.address ? foundTarrif.address.city : '',
      state: foundTarrif.address ? foundTarrif.address.state : '',
      phoneNumber: foundTarrif.address ? foundTarrif.address.phoneNumber : '',
    });
  }, [foundTarrif.name, foundTarrif.description, foundTarrif.image, foundTarrif.address]);

  const onSubmit = async () => {
    await editTarrif({
      id,
      ...formData,
       address: {
        line1,
        line2,
        zipCode,
        city,
        state,
        phoneNumber
      }
    })
  };

  return (
    <>
      <CRow className="d-flex justify-content-center">
        <CCol sm="4">
          <CCard style={{ backgroundColor: 'navyblue' }}>
            <CCardHeader className="font-weight-bold h4">
              Edit Tarrif
            </CCardHeader>
            <CCardBody>
              <CForm>

                <CFormGroup>
                  <CLabel htmlFor="name">Name</CLabel>
                  <CInput
                    type="text"
                    value={name}
                    onChange={handleChange}
                    id="name"
                    name="name"
                    placeholder="Name..."
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="description">Description</CLabel>
                  <CInput
                    type="text"
                    value={description}
                    onChange={handleChange}
                    id="description"
                    name="description"
                    placeholder="Description..."
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="address">Address</CLabel>
                  <CInput
                    type="text"
                    value={line1}
                    onChange={handleChange}
                    id="line1"
                    name="line1"
                    placeholder="Line1..."
                  />
                  <CInput
                    className="mt-1"
                    type="text"
                    value={line2}
                    onChange={handleChange}
                    id="line2"
                    name="line2"
                    placeholder="Line2..."
                  />
                  
                  <CInput
                    className="mt-1"
                    type="text"
                    value={zipCode}
                    onChange={handleChange}
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zip Code..."
                  />
                  <CInput
                    className="mt-1"
                    type="text"
                    value={city}
                    onChange={handleChange}
                    id="city"
                    name="city"
                    placeholder="City..."
                  />
                  <CInput
                    className="mt-1"
                    type="text"
                    value={state}
                    onChange={handleChange}
                    id="state"
                    name="state"
                    placeholder="State..."
                  />
                  <CInput
                    className="mt-1"
                    type="text"
                    value={phoneNumber}
                    onChange={handleChange}
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number..."
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="image">Image</CLabel>
                  <CInputFile onChange={imageOnChangeHandler} id="image" />
                </CFormGroup>
                <CButton onClick={onSubmit} color="info">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EditTarrif;
