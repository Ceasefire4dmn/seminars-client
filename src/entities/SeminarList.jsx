import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
// Импорт функций для взаимодействия с API
import { getAllSeminars, editSeminar } from '../api/seminars';
// Импорт хуков
import { useDeleteSeminar } from '../shared/hooks/useDeleteSeminar'; 
import { useSortByDate } from '../shared/hooks/useSortByDate';
// Импорт сущностей
import SeminarItem from './SeminarItem';
// Импорт модальных окон
import ModalConfirmDelete from '../features/ModalConfirmDelete'; 
import EditForm from '../features/EditForm';
// Импорт виджетов
import FilterBar from '../widgets/FilterBar';
// Импорт стилей 
import './SeminarsList.css';

const SeminarList = () => {
    // Переменная для хранения семинаров
    const [seminars, setSeminars] = useState([]);
   // Переменные для работы с семинаром выбранным для редактирования
    const [selectedSeminar, setSelectedSeminar] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    // Состояния и ошибки 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Переменные для фильтрации отображаемых данных 
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // Хук для удаления семинара
    const {
        showModal,
        handleShowModal,
        handleCloseModal,
        handleDelete,
        seminarToDelete,
    } = useDeleteSeminar(seminars, setSeminars);

    // Получение всех семинаров из API (в нашем случае Json-server)
    useEffect(() => {
        getAllSeminars()
            .then((response) => {
            // Обработка ответа
                setSeminars(response.data);
                setLoading(false);
            })
            // Обработка ошибок
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Хук сортировки по дате
    const sortedSeminars = useSortByDate(seminars, sortOrder);
    // Обработка переключения сортировки по дате
    const handleSortToggle = () => {
        setSortOrder(prevOrder => {
            const newOrder = prevOrder === 'asc' ? 'desc' : 'asc';
            return newOrder;
        });
    };
    // Фильтрация семинаров
    const filteredSeminars = sortedSeminars.filter((seminar) =>
        seminar.title.toLowerCase().includes(search.toLowerCase())
    );

    // Обработка открытия окна для редактирования
    const handleEditClick = (seminar) => {
        setSelectedSeminar(seminar);
        setShowEditModal(true);
    };
    //  Обработка отправки отредактированного семинара на сервер
    const handleEdit = (updatedSeminar) => {
        editSeminar(updatedSeminar)
            .then((response) => response.data)
            // Обновляем отображаемые семинары
            .then(() => {
                setSeminars((prev) =>
                    prev.map((seminar) =>
                        seminar.id === updatedSeminar.id ? updatedSeminar : seminar
                    )
                );
                setShowEditModal(false);
            })
            // Обрабатываем ошибки
            .catch((error) => {
                console.error('Error updating seminar:', error);
            });
    };

  
    // Отображение состояния приложения в случае, когда данные еще не отображены
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;


    return (
        <>
            {/* Панель фильтров: Поиска и сортировки по дате */}
            <FilterBar
                search={search}
                setSearch={setSearch}
                sortOrder={sortOrder}
                handleSortToggle={handleSortToggle}
            />
            <Accordion 
                defaultActiveKey="0" 
                className="mt-3"
            >
                {/* Если массив данных не пуст */}
                {filteredSeminars.length !== 0
                    // Отображаем все семинары
                    ? filteredSeminars.map((seminar) => (
                        <SeminarItem
                            key={seminar.id}
                            seminar={seminar}
                            onEdit={() => handleEditClick(seminar)}
                            onDelete={() => handleShowModal(seminar)} // Открываем модальное окно
                        />
                    ))
                    // Иначе Отображаем предупреждение
                    : 'Семинаров по вашему запросу не найдено'}
            </Accordion>

            {/* Модальное окно для подтверждения удаления */}
            <ModalConfirmDelete
                show={showModal}
                onHide={handleCloseModal}
                onDelete={handleDelete}
                seminarTitle={seminarToDelete?.title}
            />
            {/* Модальное окно для удаления */}
            <EditForm 
                show={showEditModal}
                seminar={selectedSeminar}
                handleEdit={handleEdit}
                handleClose={() => setShowEditModal(false)}
            />
        </>
    );
};

export default SeminarList;
