import React from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.css';

// Модальное окно полтвердления удаления семинара
// show - состояние открытия модального окна
// onHide - функция при клике вне окна или отмене
// onDelete - функция для удаления и отправки из родительского компонента запроса на сервер
// seminarTitle - название семинара для подписи в модальном окне
const ModalConfirmDelete = ({ show, onHide, onDelete, seminarTitle }) => {
    return (
        <Modal 
            show={show} 
            onHide={onHide} 
            centered 
            className='edit-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Подтверждение удаления
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Вы уверены, что хотите удалить семинар "{seminarTitle}"?
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="px-4 custom-btn" 
                    onClick={onDelete}
                >
                    Удалить
                </button>
                <button
                    className="px-4 edit-btn custom-btn add-btn"
                    onClick={onHide}
                >
                    Закрыть
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalConfirmDelete;
