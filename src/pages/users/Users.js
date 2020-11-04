import React, { useState } from 'react';
import { CButton, CCardBody, CCollapse, CDataTable } from '@coreui/react';
import { Link } from 'react-router-dom';
import { useFetchUsers } from '../../hooks';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Users = () => {
  const [details, setDetails] = useState([]);

  const { data, status } = useFetchUsers();

  if (status === 'loading') {
    return loading;
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
    { key: 'photo', _style: { width: '10%' } },
    { key: 'firstName' },
    { key: 'lastName' },
    { key: 'username' },
    { key: 'phoneNumber' },
    { key: 'email' },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];


  /**
   * Note: this is temporary
   */

  const randomID = Math.floor(Math.random() * 6);

  return (
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
        photo: (item) => (
          <td>
            <div className="c-avatar">
              <img
                src={`avatars/${randomID}.jpg`}
                className="c-avatar-img text-center"
                alt="avatar.com"
              />
              <span className="c-avatar-status bg-success"></span>
            </div>
          </td>
        ),
        username: item => 
           (
          <td>
            <div>
              {!item.username || item.username=== null ? item.email.split('@')[0] : item.username}
            </div>
          </td>
        )
        ,
        firstName: item => (
          <td>
            <div>
              {!item.firstName || item.firstName === null ? item.email.split('@')[0] : item.firstName}
            </div>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="danger"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? 'Hide' : 'Edit'}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <Link
                  to={`/users/profile/edit/${item.id}`}
                  className="btn btn-sm text-white bg-info"
                >
                  Edit
                </Link>
                {/* <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton> */}
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};

export default Users;
