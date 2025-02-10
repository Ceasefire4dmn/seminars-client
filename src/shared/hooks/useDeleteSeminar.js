import { useState } from "react";
import { deleteSeminar } from "../../api/seminars"; // Импортируем функцию удаления

const useDeleteSeminar = (seminars, setSeminars) => {
  const [showModal, setShowModal] = useState(false);
  const [seminarToDelete, setSeminarToDelete] = useState(null);

  const handleDelete = async () => {
    if (!seminarToDelete) return;

    try {
      const deletedId = await deleteSeminar(seminarToDelete.id);
      setSeminars(seminars.filter((seminar) => seminar.id !== deletedId)); // Убираем удалённый семинар из списка
      setShowModal(false); // Закрываем модальное окно после удаления
    } catch (error) {
      console.error("Ошибка при удалении семинара:", error);
    }
  };

  const handleShowModal = (seminar) => {
    setSeminarToDelete(seminar); // Запоминаем семинар, который будет удален
    setShowModal(true); // Открываем модальное окно
  };

  const handleCloseModal = () => {
    setShowModal(false); // Закрываем модальное окно
    setSeminarToDelete(null); // Сбрасываем выбранный семинар
  };

  return {
    showModal,
    handleShowModal,
    handleCloseModal,
    handleDelete,
    seminarToDelete,
  };
};

export default useDeleteSeminar;
