// src/components/SeminarList/SeminarList.jsx
import React, { useState, useEffect } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import './SeminarsPage.css';
import { getAllSeminars } from '../../api/seminars';
import SeminarItem from './SeminarItem';
import ModalConfirmDelete from '../../features/ModalConfirmDelete';  // Импортируем компонент модального окна
import EditSeminarModal from '../../features/EditSeminarModal';
import useDeleteSeminar from '../../shared/hooks/useDeleteSeminar';  // Импортируем хук
import { editSeminar } from '../../api/seminars';  // Импортируем хук

const SeminarList = () => {
    const [seminars, setSeminars] = useState([]);
    const [selectedSeminar, setSelectedSeminar] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // Используем хук для удаления
    const {
        showModal,
        handleShowModal,
        handleCloseModal,
        handleDelete,
        seminarToDelete,
    } = useDeleteSeminar(seminars, setSeminars);

    useEffect(() => {
        getAllSeminars()
            .then((response) => {
                setSeminars(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filteredSeminars = seminars
        .filter((seminar) =>
            seminar.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            return sortOrder === 'asc'
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
        });

    const handleEditClick = (seminar) => {
        setSelectedSeminar(seminar);
        setShowEditModal(true);
    };

    const handleEdit = (updatedSeminar) => {
        editSeminar(updatedSeminar).then((response) =>{ console.log(response); return response.data})
    .then(() => {
        setSeminars((prev) =>
            prev.map((seminar) =>
                seminar.id === updatedSeminar.id ? updatedSeminar : seminar
            )
        );
        setShowEditModal(false);
    })
    .catch((error) => {
        console.error('Error updating seminar:', error);
    });
  };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <>
            <Form.Control
                type="text"
                placeholder="Поиск по названию..."
                className="mb-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                className="sort-btn d-block"
                variant="outlined-success"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
                Сортировать по дате
                {sortOrder === 'asc' ? ' ↑' : ' ↓'}
            </Button>
            <Accordion defaultActiveKey="0" className="mt-3">
                {filteredSeminars.length !== 0
                    ? filteredSeminars.map((seminar) => (
                        <SeminarItem
                            key={seminar.id}
                            seminar={seminar}
                            onEdit={() => handleEditClick(seminar)}
                            onDelete={() => handleShowModal(seminar)} // Открываем модальное окно
                        />
                    ))
                    : 'Семинаров по вашему запросу не найдено'}
            </Accordion>

            {/* Модальное окно для подтверждения удаления */}
            <ModalConfirmDelete
                show={showModal}
                onHide={handleCloseModal}
                onDelete={handleDelete}
                seminarTitle={seminarToDelete?.title}
            />
            <EditSeminarModal
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                seminar={selectedSeminar}
                handleEdit={handleEdit}
            />
        </>
    );
};

export default SeminarList;
