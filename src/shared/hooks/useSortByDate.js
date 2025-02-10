// Хук. сортирующий по дате
// seminars - список для сортировки
// sortOrder - порядок сортировки
export const useSortByDate = (seminars, sortOrder) => {
  const sortedSeminars = seminars.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split(".").map(Number);
    const [dayB, monthB, yearB] = b.date.split(".").map(Number);
    // Передаем параметры в необходимом порядке для преобразования в тип Date
    // Месяцы начинаются с 0
    const dateA = new Date(yearA, monthA - 1, dayA); 
    const dateB = new Date(yearB, monthB - 1, dayB);
    // Возрастает
    if (sortOrder === "asc") {
      return dateA - dateB; 
    } else {
      // Убывает
      return dateB - dateA; 
    }
  });
  return sortedSeminars;
};
