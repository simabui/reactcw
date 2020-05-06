/* eslint-disable */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './User.module.css';
import Button from '../../Button/Button';
import Modal from '../Modal/Modal';

const User = ({ user, location, match }) => {
  const [isShownInfo, toggleShown] = useState(false);
  const [isShownModal, toggleModal] = useState(false);

  const handleShown = () => {
    toggleShown(isShown => !isShown);
  };

  const handleModal = () => {
    toggleModal(isShownModal => !isShownModal);
  };

  return (
    <>
      <li className={style.user}>
        <div className={style.block}>
          <img
            src="https://i1.foxtrot.com.ua/product/MediumImages/5645489_0.jpg"
            alt="cat"
            className={style.image}
          />
          <div className={style.info}>
            <h2 className={style.name}>{user.name}</h2>
            <p className={style.mail}>{user.email}</p>
            <p className={style.phone}>{user.phone}</p>
            <div className={style.button}>
              <Button
                variant="contained"
                type="button"
                onClick={() => handleShown()}
              >
                <Link
                  to={{
                    pathname: `${match.url}/${user.id}`,
                    // custom state
                    state: { from: location },
                  }}
                >
                  Show more
                </Link>
              </Button>
              <Button
                variant="contained"
                type="button"
                onClick={() => handleModal()}
              >
                Load more
              </Button>
            </div>
          </div>
        </div>
        {/* {isShownInfo && <UserAddInfo company={user.company} />} */}
        {isShownModal && <Modal phone={user.phone} onClose={handleModal} />}
      </li>
    </>
  );
};

export default withRouter(User);
