import React from "react";
import { Accordion, Card } from "react-bootstrap";

const SeminarItem = ({ seminar, onEdit, onDelete }) => {
    return (
        // Создаются элементы аккордиона, которые передаются в SeminarsList
        <Accordion.Item eventKey={seminar.id}>
            <Accordion.Header>{seminar.title} ({seminar.date})</Accordion.Header>
            <Accordion.Body>
                <Card className="d-flex flex-row">
                    <Card.Img
                        className="p-2"
                        variant="top"
                        src={seminar.photo}
                        alt={seminar.title}
                        style={{ height: "300px", width: "300px" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Text className="fs-4" style={{wordBreak: 'break-all'}}>
                            {seminar.description}
                        </Card.Text>
                        <p className="fs-6">
                            <strong>Дата:</strong> {seminar.date} &bull; <strong>Время:</strong> {seminar.time}
                        </p>
                        <span className="control-panel">
                            {/* Через передаваемые в каждый элемент props обрабатываются операции редактирования и удаления */}
                            <button
                                className="edit-btn custom-btn"
                                onClick={onEdit}
                            >
                                Редактировать семинар
                            </button>
                            <button
                                className="custom-btn"
                                onClick={onDelete}
                            >
                                Удалить семинар
                            </button>
                        </span>
                    </Card.Body>
                </Card>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default SeminarItem;
