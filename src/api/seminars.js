import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}/seminars`;
export const getAllSeminars = async () => await axios.get(baseUrl);

export const editSeminar = async (editedItem) => await axios.put(`${baseUrl}/${editedItem.id}`, editedItem);
export const deleteSeminar = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`); 
    // Возвращаем id удалённого семинара
    return id;
  } catch (error) {
    console.error(error)
    throw new Error("Не удалось удалить семинар");
  }
};
