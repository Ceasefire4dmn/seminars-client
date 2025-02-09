import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import './SeminarsPage.css';
import { getAllSeminars } from '../api/seminars'


const SeminarsPage = () => {
    const [seminars, setSeminars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        getAllSeminars()
            .then(response => {
                setSeminars(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filteredSeminars = seminars
        .filter((seminar) =>
            seminar.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            return sortOrder === "asc"
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
        });

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    
    return (
        <div className="container seminars-container mt-4">
            <h2 className="mb-3">Список семинаров</h2>
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
                    onClick={
                                () => setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                            }
                >
                    Сортировать по дате  
                    {sortOrder === "asc" ? " ↑" : " ↓"} 
                </Button>
            <Accordion 
                defaultActiveKey="0" 
                className="mt-3"
            >
                {
                    filteredSeminars.length !== 0 
                        ? filteredSeminars.map((seminar, index) => (
                            <Accordion.Item 
                                eventKey={index.toString()} 
                                key={seminar.id}
                            >
                                <Accordion.Header>
                                    {seminar.title} ({seminar.date})
                                </Accordion.Header>
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
                                            <Card.Text className="fs-4">
                                                {seminar.description}
                                            </Card.Text>
                                            <p className="fs-6">
                                                <strong>Дата:</strong> {seminar.date} &bull; <strong>Время:</strong> {seminar.time}
                                            </p>
                                            <span className="control-panel">
                                                <button 
                                                    className="edit-btn custom-btn" 
                                                    onClick={() => alert('add')}
                                                >
                                                    Редактировать семинар
                                                </button>
                                                <button 
                                                    className="custom-btn" 
                                                    onClick={() => alert('add')}
                                                >
                                                    Удалить семинар
                                                </button>
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                        : 'Семинаров по вашему запросу не найдено'}
            </Accordion>
        </div>
    );
};

export default SeminarsPage;
