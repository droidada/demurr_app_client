import React, { useState } from 'react';
import {
  CBadge,
  CButton,
  CCardBody,
  CCol,
  CCollapse,
  CDataTable,
  CRow,
} from '@coreui/react';
import transactionData from '../../utils/transactionData';

const Transactions = () => {
  const [details, setDetails] = useState([]);
  const [transactions, setTransactions] = useState(transactionData);

  const deleteTransaction = (id) =>
    setTransactions(transactions.filter((trans) => trans.id !== id));

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
    'number',
    'transactionType',
    'description',
    'amount',
    'status',
    'total',
    'user',
    'ruber',
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'success';
      case 'Started':
        return 'info';
      case 'Pending':
        return 'warning';
      case 'Canceled':
        return 'secondary';
      case 'Rejected':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <>
      <CRow>
        <CCol className=" mb-5">
          <h1>Transactions</h1>
        </CCol>
      </CRow>
      <CDataTable
        items={transactions}
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
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
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
          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <CButton size="sm" color="info">
                    Edit
                  </CButton>
                  <CButton
                    onClick={() => deleteTransaction(item.id)}
                    size="sm"
                    color="danger"
                    className="ml-1"
                  >
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />
    </>
  );
};

export default Transactions;
