import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditSeminarModal = ({ show, handleClose, seminar, handleEdit }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        photo: "",
    });

    // Заполняем форму, когда открывается модальное окно
    useEffect(() => {
        if (seminar) {
            setFormData({
                title: seminar.title || "",
                description: seminar.description || "",
                date: seminar.date ? formatDateForInput(seminar.date) : "2020-01-01",  // Преобразуем
                time: seminar.time || "",
                photo: seminar.photo || "",
            });
        }
    }, [seminar]);

    // Функция преобразования "15.02.2025" → "2025-02-15"
    const formatDateForInput = (dateString) => {
        const [day, month, year ] = dateString.split(".");
        return `${year}-${month}-${day}`;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        const updatedSeminar = {
            ...seminar,
            ...formData,
            date: formatDateForServer(formData.date),  // Обратно в нужный формат
        };

        handleEdit(updatedSeminar);
    };

    // Функция преобразования "2025-02-15" → "15.02.2025"
    const formatDateForServer = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}.${month}.${year}`;
    };

    const handleCloseAndClear = () => {
        setFormData({
            title: seminar.title || "",
            description: seminar.description || "",
            date: seminar.date ? formatDateForInput(seminar.date) : "2020-01-01",
            time: seminar.time || "",
            photo: seminar.photo || "",
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleCloseAndClear} centered>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование семинара</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Дата</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Время</Form.Label>
                        <Form.Control
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAndClear}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Сохранить изменения
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditSeminarModal;
