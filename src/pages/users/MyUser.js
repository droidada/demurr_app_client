import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import UserTableBody from '../../components/UserTableBody';
import userData from '../../utils/userData';

const Users = () => {
  const [users, setUsers] = useState(userData);

  return (
    <>
      <CRow className="d-flex justify-content-center">
        <CCol sm={8}>
          <CCard>
            <CCardHeader>Users</CCardHeader>
            <CCardBody>
              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <CIcon name="cil-people" />
                    </th>
                    <th>Email</th>
                    <th className="text-center">Phone Number</th>
                    <th className="text-center">User Type</th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <UserTableBody
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        phoneNumber={user.phoneNumber}
                        userType={user.userType}
                      />
                    );
                  })}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Users;
