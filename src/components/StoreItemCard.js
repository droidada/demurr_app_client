import React from 'react';
import {
  CCard,
  CCol,
  CCardBody,
  CCardHeader,
  CCardImg,
} from '@coreui/react';
import { useParams } from 'react-router-dom';
import useFetchStoreItems from '../hooks/queries/useFetchStoreItems';

const StoreItemCard = () => {
  const { id } = useParams();

  const {data, status} = useFetchStoreItems(id)

  return (
    <>
      {status === 'success' && data.map((item, idx) => (
        <CCol sm="3" key={idx}>
              <CCard style={{ position: 'relative' }} key={idx}>
                <CCardHeader>{item.title}</CCardHeader>
                <CCardImg
                  src={item.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <CCardBody className="pb-4">
                  {item.description}
                  {/* <Link to="/">
                    <CButton
                      style={{ position: 'absolute', top: 0, right: 0 }}
                      color="info"
                      className="float-right"
                    >
                      <CIcon
                        name="cil-cart"
                        size="2xl"
                        style={{ position: 'relative' }}
                      />
                      <span
                        className="text-sm"
                        style={{ position: 'absolute', right: 20, top: 12 }}
                      >
                        {item.quantity}
                        
                      </span>
                    </CButton>
                  </Link> */}
                </CCardBody>
              </CCard>
            </CCol>
      ))}
    </>
  );
};

export default StoreItemCard;
