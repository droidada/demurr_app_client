import React, { useState } from 'react';
import {
  CButton,
  CCardBody,
  CCol,
  CCollapse,
  CDataTable,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Link } from 'react-router-dom';
import { useFetchBanks, useEditBank, useDeleteBank } from '../../hooks';
import Loader from '../../components/Loader';

const Bank = () => {
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(false);
console.log("we are here")
  const { data, status } = useFetchBanks();
  const [deleteBank] = useDeleteBank()
  const [createBank] = useEditBank()


  const [formData, setFormData] = useState({
    name: '',
    title:'',
    description: '',
    image:'',
    line1: '',
    line2: '',
    zipCode: '',
    state: '',
    city: '',
    phoneNumber: '',
  });

  console.log("we have form data here ", formData)
  const imageOnChangeHandler = (e) => {
    setFormData({ ...formData || '', image: URL.createObjectURL(e.target.files[0]) });
  };

  const { name, title, description, image, line1, line2, zipCode, state, city, phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData || '', [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (!name || !title || !description || !image || !line1 || !zipCode || !state || !city || !phoneNumber) {
      setModal(true);
      return;
    } else {
      createBank({...formData, address: {
        line1,
        line2,
        zipCode,
        city,
        state,
        phoneNumber
      }})
      setModal(false);
    }
  };

  const toggle = () => {
    setModal(!modal);
  };

  if (status === 'loading') {
    return <Loader />;
  }

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    {
      key: 'name',
      _style: { width: '8%' },
    },
    'description',
    { key: 'street' },
    {
      key: 'city',
      _style: { width: '10%' },
    },
    {
      key: 'state',
      _style: { width: '10%' },
    },
    {
      key: 'zipCode',
      _style: { width: '10%' },
    },
    {
      key: 'phoneNumber',
      _style: { width: '15%' },
    },
    {
      key: 'show_view_icon',
      label: '',
      _style: { width: '4%' },
      sorter: false,
      filter: false,
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <>
      <CRow>
        <CCol className=" mb-5">
          <h1>Banks</h1>
        </CCol>
        <CCol className="d-flex justify-content-end mb-5">
          <CButton color="twitter" onClick={toggle} className="mr-1 text-white">
            Add a Bank
          </CButton>
          <CModal show={modal} onClose={toggle}>
            <CModalHeader closeButton className="font-weight-bold">
              Create Bank
            </CModalHeader>
            <CModalBody>
              <CForm>
                <CFormGroup>
                  <CLabel htmlFor="title">Title</CLabel>
                  <CInput
                    type="text"
                    value={title}
                    onChange={handleChange}
                    id="title"
                    name="title"
                    placeholder="Title..."
                  />
                </CFormGroup>
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
                    className="mt-1"
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
              </CForm>
            </CModalBody>
            <CModalFooter>
              <CButton color="primary" onClick={handleSubmit}>
                Submit
              </CButton>{' '}
              <CButton color="secondary" onClick={toggle}>
                Cancel
              </CButton>
            </CModalFooter>
          </CModal>
        </CCol>
      </CRow>
      <CDataTable
        items={data}
        fields={fields}
        columnFilter
        tableFilter
        footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          street: (item) => (
            <td>
              <div>{item.address.line1}</div>
            </td>
          ),
          city: (item) => (
            <td>
              <div>{item.address.city}</div>
            </td>
          ),
          state: (item) => (
            <td>
              <div>{item.address.state}</div>
            </td>
          ),
          zipCode: (item) => (
            <td>
              <div>{item.address.zipCode}</div>
            </td>
          ),
          phoneNumber: (item) => (
            <td>
              <div>{item.address.phoneNumber}</div>
            </td>
          ),
          show_view_icon: (item) => {
            return (
              <td className="py-2">
                <Link to={`/banks/${item.id}/items`}>
                  <CIcon
                    size={'xl'}
                    className="text-info"
                    title="view Bank Items"
                    content={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`}
                  />
                </Link>
              </td>
            );
          },
          show_details: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(index);
                  }}
                >
                  {details.includes(index) ? 'Hide' : 'Delete/Edit'}
                </CButton>
              </td>
            );
          },
          details: (item, index) => <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <Link
                  to={`/banks/${item.id}/edit`}
                  className="btn btn-sm text-white bg-info"
                >
                  Edit
                </Link>
                  <CButton onClick={() => deleteBank(item.id)} size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>,
        }}
      />
    </>
  );
};

export default Bank;
