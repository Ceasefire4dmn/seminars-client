import { useState } from "react";

const useEditSeminar = () => {
  const [selectedSeminar, setSelectedSeminar] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = (seminar) => {
    setSelectedSeminar(seminar);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedSeminar(null);
  };

  return {
    selectedSeminar,
    showEditModal,
    handleEditClick,
    handleCloseModal,
    setSelectedSeminar,
  };
};

export default useEditSeminar;
