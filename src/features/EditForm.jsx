import { useEffect } from "react"; 
// Импорт UseForm из библиотеки для работы с формами
import { useForm } from "react-hook-form";
// react-bootstrap для удобной стилизации
import { Modal, Form } from "react-bootstrap";
// Стили
import './Modal.css';

// Форма для редактирования семинара
// show: boolean - переменная состояния открытия формы
// handleClose - функция обработки закрытия модального окна
// seminar - конкретный семинар для редактирования
// handleEdit - функция обработки запроса и отправки данных на сервер
const EditForm = ({ show, handleClose, seminar = {}, handleEdit }) => {
    //  Форматирование даты для корректного отображения в input-поле с типом дата
    const formatDateForInput = (dateString) => {
        if (!dateString) return "";
        const [day, month, year] = dateString.split(".");
        return `${year}-${month}-${day}`;
    };
    //  Форматирование даты для отправки на сервер
    const formatDateForServer = (dateString) => {
        if (!dateString) return "";
        const [year, month, day] = dateString.split("-");
        return `${day}.${month}.${year}`;
    };

    // Создание переменных и функций для работы с формой
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        // Задание дефолтных значений, чтобы форма открывалась с текущими значениями
        defaultValues: {
            ...seminar,
            title: seminar?.title || "",
            description: seminar?.description || "",
            date: seminar?.date ? formatDateForInput(seminar.date) : "2020-01-01",
            time: seminar?.time || "00:00",
        },
    });

    // Обновление значений формы при изменении seminar
    useEffect(() => {
        reset({
            ...seminar,
            title: seminar?.title || "",
            description: seminar?.description || "",
            date: seminar?.date ? formatDateForInput(seminar.date) : "2020-01-01",
            time: seminar?.time || "00:00",
        });
    }, [seminar, show, reset]);

    // Обработка сохранения введенных данных
    const onSubmit = (formData) => {
        // Создание объекта с форматированной датой
        const updatedData = {
            ...formData,
            date: formatDateForServer(formData.date),
        };
        // Передача функции для отправки PUT-запроса на сервер
        handleEdit(updatedData);
    };

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            centered 
            className="edit-modal"
        >
            <Modal.Header className="p-5">
                <Modal.Title>
                    Редактирование семинара
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="px-3"
                >
                    {/* Инпут поля */}
                    <Form.Group className="mb-3">
                        <Form.Label>
                            Название
                        </Form.Label>
                        <Form.Control 
                            {...register("title", {
                                required: "Это поле обязательно для заполнения",
                                minLength: {
                                    value: 5,
                                    message: "Введите минимум 5 символов"
                                }
                            })} 
                            type="text" 
                            placeholder="Введите название семинара" 
                        />
                        {errors.title && <span className="text-danger">{errors.title.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Описание
                        </Form.Label>
                        <Form.Control 
                            {...register("description", {
                                required: "Это поле обязательно для заполнения",
                                minLength: {
                                    value: 10,
                                    message: "Введите минимум 10 символов"
                                }
                            })} 
                            as="textarea" 
                            rows={3} 
                            placeholder="Введите описание семинара" 
                        />
                        {errors.description && <span className="text-danger">{errors.description.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Дата
                        </Form.Label>
                        <Form.Control 
                            {...register("date")} 
                            type="date" 
                        />
                    </Form.Group>

                    <Form.Group className="mb-5">
                        <Form.Label>
                            Время
                        </Form.Label>
                        <Form.Control 
                            {...register("time")} 
                            type="time" 
                        />
                    </Form.Group>
                    <hr />
                    <div className="p-3 text-center d-flex justify-content-center gap-3">
                        {/* Кнопки сохранения или отмены */}
                        <button 
                            type="submit" 
                            className="px-4 edit-btn custom-btn add-btn" 
                        >
                            Сохранить
                        </button>
                        <button
                            className="custom-btn"
                            onClick={handleClose}
                        >
                            Закрыть
                        </button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditForm;
