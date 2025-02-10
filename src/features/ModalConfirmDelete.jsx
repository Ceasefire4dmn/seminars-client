import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirmDelete = ({ show, onHide, onDelete, seminarTitle }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Подтверждение удаления</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Вы уверены, что хотите удалить семинар "{seminarTitle}"?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отмена
                </Button>
                <Button variant="danger" onClick={onDelete}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalConfirmDelete;
