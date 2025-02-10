import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "/seminars";
console.log(baseUrl)

export const getAllSeminars = async () => await axios.get(baseUrl);

export const editSeminar = async (editedItem) => await axios.put(`${baseUrl}/${editedItem.id}`, editedItem);
export const deleteSeminar = async (id) => {
  try {
    console.log(id)
    await axios.delete(`${baseUrl}/${id}`);
    return id; // Возвращаем id удалённого семинара для дальнейшей обработки
  } catch (error) {
    console.error(error)
    throw new Error("Не удалось удалить семинар");
  }
};