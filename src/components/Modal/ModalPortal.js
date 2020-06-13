import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal-root');

const ModalPortal = ({ children }) => {
  const el = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(el);
  }, []);

  return createPortal(children, el);
};

export default ModalPortal;
