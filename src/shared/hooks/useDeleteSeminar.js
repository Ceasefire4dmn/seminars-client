import { useState } from "react";
import { deleteSeminar } from "../../api/seminars"; // Импортируем функцию удаления

// seminars - список семинаров для последующего обновления
//  setSeminars - для обновления списка
export const useDeleteSeminar = (seminars, setSeminars) => {
  // Состояние открытия модального окна
  const [showModal, setShowModal] = useState(false);
  //  Семинар, которы надо удалить
  const [seminarToDelete, setSeminarToDelete] = useState(null);

  const handleDelete = async () => {
    // Если удалять нечего
    if (!seminarToDelete) return;

    try {
      // Получаем Id семинара после удаления, чтобы обновить список
      const deletedId = await deleteSeminar(seminarToDelete.id);
      // Убираем удалённый семинар из списка
      setSeminars(seminars.filter((seminar) => seminar.id !== deletedId));
      // Закрываем модальное окно после удаления
      setShowModal(false);
    } catch (error) {
      // Обрабатываем ошибку
      console.error("Ошибка при удалении семинара:", error);
    }
  };

  // Обработчик открытия модального окна
  const handleShowModal = (seminar) => {
    // Устанавливаем семинар для удаления
    setSeminarToDelete(seminar);
    // Выставляем состояние открытия модального окнв
    setShowModal(true);
  };

// Обработчик закрытия окна 
  const handleCloseModal = () => {
    // Выставляем состояние открытия модального окна на false
    setShowModal(false);
    // Сбрасываем семинар для удаления
    setSeminarToDelete(null);
  };

  return {
    showModal,
    handleShowModal,
    handleCloseModal,
    handleDelete,
    seminarToDelete,
  };
};

