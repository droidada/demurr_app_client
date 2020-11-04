import React, { useContext } from 'react';
import {
  CCard,
  CCol,
  CCardBody,
  // CCardFooter,
  CCardHeader,
  CCardImg,
  CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Link } from 'react-router-dom';
// import StoreContext from '../context/StoreContext';
import { useParams } from 'react-router-dom';
import RestaurantItemContext from '../context/RestaurantItemContext';

const RestaurantItemCard = () => {
  const { state } = useContext(RestaurantItemContext);

  const { id } = useParams();

  const foundRestaurantItem = state.restaurantItems.find(
    (restaurantItem) => restaurantItem && restaurantItem.restaurantId === +id
  );

  if (!foundRestaurantItem) {
    return <div>This store has no items</div>;
  }

  return (
    <>
      {state.restaurantItems.map(
        (item, idx) =>
          item.restaurantId === +id && (
            <CCol sm="3" key={idx}>
              <CCard style={{ position: 'relative' }} key={idx}>
                <CCardHeader>{item.category}</CCardHeader>
                <CCardImg
                  src={item.imageUrl}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <CCardBody className="pb-4">
                  {item.description}
                  <Link to="/">
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
                  </Link>
                </CCardBody>
              </CCard>
            </CCol>
          )
      )}
    </>
  );
};

export default RestaurantItemCard;
