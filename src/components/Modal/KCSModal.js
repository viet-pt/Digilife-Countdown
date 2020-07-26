import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.scss';
import PropTypes from 'prop-types';
import InputText from 'components/InputText/InputText';

const KCSModal = ({ isOpenModal, closeButton, closeModal, confirmButton }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [CMND, setCMND] = useState('');

  const handleConfirmAction = () => {
    // call API
    closeModal();
  }

  const goToNewPage = () => {
    window.open('http://digilife.net.vn/', '_blank');
  }

  return (
    <Modal show={isOpenModal} onHide={closeModal} className="modal-wrapper">
      <Modal.Header>
        <Modal.Title>NHẬP THÔNG TIN ĐĂNG KÝ</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputText
          placeholder="Họ và tên"
          value={name}
          handleOnChange={value => setName(value)}
          isFirst
        />
        <InputText
          placeholder="Số điện thoại"
          value={phoneNumber}
          handleOnChange={value => setPhoneNumber(value)}
          onlyNumber
        />
        <InputText
          placeholder="Địa chỉ"
          value={address}
          handleOnChange={value => setAddress(value)}
        />
        <InputText
          placeholder="Email"
          value={email}
          handleOnChange={value => setEmail(value)}
        />
        <InputText
          placeholder="Số CMND hoặc thẻ Căn cước"
          value={CMND}
          handleOnChange={value => setCMND(value)}
          onlyNumber
        />

        <Button onClick={handleConfirmAction} className="confirm-btn">
          {confirmButton || 'OK'}
        </Button>
        <br />
        <div className="close-btn" onClick={closeModal}>
          {closeButton || 'Hủy'}
        </div>
      </Modal.Body>

      <Modal.Footer>
        Điền thông tin đăng ký tham dự và nhận kết quả tại Fanpage <span onClick={goToNewPage}>Facebook/DigiLife</span> lúc 21h ngày 4/8/2020
      </Modal.Footer>
    </Modal>
  );
};

KCSModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  closeButton: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  confirmButton: PropTypes.string,
  confirmAction: PropTypes.func,
};

KCSModal.defaultProps = {
  isOpenModal: false,
  closeModal: () => {},
};

export default KCSModal;
