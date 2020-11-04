import React, { useState } from 'react';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import * as XLSX from 'xlsx';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
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
import { useFetchRequests, useEditRequest, useDeleteRequest } from '../../hooks';
import Loader from '../../components/Loader';

const Request = () => {
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(false);
console.log("we are here")
  const { data, status } = useFetchRequests();
  const [deleteRequest] = useDeleteRequest()
  const [createRequest] = useEditRequest()
  const [initialData, setInitialData] = useState(undefined);

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
    
    let fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        console.log("resp>>", resp)
       // console.log("cols>>>", resp.cols);
        //  console.log("rows>>>", resp.rows);
        // this.setState({
        //   cols: resp.cols,
        //   rows: resp.rows
        // });
      }
    });               

    // var name = fileObj.name;
    // const reader = new FileReader();
    // reader.onload = (evt) => { // evt = on_file_select event
    //     /* Parse data */
    //     const bstr = evt.target.result;
    //     const wb = XLSX.read(bstr, {type:'binary'});
    //     /* Get first worksheet */
    //     const wsname = wb.SheetNames[1];
    //     const ws = wb.Sheets[wsname];
    //     console.log("WS>>>>>", ws);
    //     /* Convert array of arrays */
    //     const data = XLSX.utils.sheet_to_json(ws);
    //     /* Update state */
    //     console.log("Data>>>", JSON.stringify(data));
    // };
    // reader.readAsBinaryString(fileObj);


    readFile(fileObj)
      .then((readedData) => {
          console.log(readedData)

          
          setInitialData(readedData)
        })
      .catch((error) => console.error(error));

    //setFormData({ ...formData || '', image: URL.createObjectURL(e.target.files[0]) });
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
      createRequest({...formData, address: {
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
          <h1>Requests</h1>
        </CCol>
        <CCol className="d-flex justify-content-end mb-5">
          <CButton color="twitter" onClick={toggle} className="mr-1 text-white">
            Add a Request
          </CButton>
          <CModal show={modal} onClose={toggle}>
            <CModalHeader closeButton className="font-weight-bold">
              Create Request
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
      <ReactExcel
        initialData={initialData}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
    </>
  );
}

export default Request;
