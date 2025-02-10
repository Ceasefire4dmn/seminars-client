import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container className='mb-5'>
            <Row 
                className="text-start pb-5" 
                style={{ 'color': '#638035' }}
            >
                <h1 className="text-center">
                    Обо мне
                </h1>
                <p style={{ 'color': '#638035' }}>
                    Я начинающий разработчик, стремящийся к постоянному профессиональному росту и созданию качественных IT-решений.
                    Начала свой путь с изучения C#, успешно завершила курсы по программированию и разработала несколько проектов, включая оконные приложения и мини-игры.
                </p>
                <p style={{ 'color': '#638035' }}>
                    В дальнейшем перешла к веб-разработке, осваивая HTML, CSS, JavaScript, а также Fullstack-разработку с использованием React и C#.
                    Также изучаю машинное обучение и активно развиваюсь в области искусственного интеллекта.
                </p>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={4} lg={4}>
                    <Card 
                        className="p-3" 
                        style={{ minHeight: '350px', backgroundColor: '#d1c1ef' }}
                    >
                        <Card.Body style={{ textAlign: 'left', 'color': '#638035' }}>
                            <Card.Title>
                                Мои навыки
                            </Card.Title>
                            <Card.Text style={{ 'color': '#638035' }}>
                                ✔ C# (WinForms, RESTful API)<br />
                                ✔ Веб-разработка (HTML, CSS, JS, React)<br />
                                ✔ Fullstack-разработка (React, C#, SQL)<br />
                                ✔ Машинное обучение (Python, AI)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} lg={4}>
                    <Card 
                        className="p-3" 
                        style={{ minHeight: '350px', backgroundColor: '#ff9256' }}
                    >
                        <Card.Body style={{ textAlign: 'left', color: '#fff8ed' }}>
                            <Card.Title>
                                Личные качества
                            </Card.Title>
                            <Card.Text style={{ color: '#fff8ed' }}>
                                ✔ Инициативность, целеустремленность<br />
                                ✔ Опыт работы в команде и коммуникации<br />
                                ✔ Знание английского языка<br />
                                ✔ Активное участие в IT-сообществе
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} lg={4}>
                    <Card 
                        className="p-3" 
                        style={{ minHeight: '350px', backgroundColor: '#bfdf8c' }}
                    >
                        <Card.Body style={{ textAlign: 'left' }}>
                            <Card.Title style={{ 'color': '#638035' }}>
                                Ссылки на сертификаты
                            </Card.Title>
                            <Card.Text >
                                ✔ <a 
                                    style={{ 'color': '#638035' }} 
                                    href="https://stepik.org/cert/2494158" target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    PRO C#. Основы программирования
                                </a><br />
                                
                                ✔ <a 
                                    style={{ 'color': '#638035' }} 
                                    href="https://stepik.org/cert/2544408" target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    PRO C#. Для продвинутых
                                </a><br />
                                
                                ✔ <a 
                                    style={{ 'color': '#638035' }} 
                                    href="https://stepik.org/cert/2606847" target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    JavaScript для начинающих
                                </a><br />

                                ✔ <a 
                                    style={{ 'color': '#638035' }} 
                                    href="https://stepik.org/cert/2695076" target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Буткемп “Fullstack-разработка с нуля. C#, JS, Docker, SQL”
                                </a><br />

                                ✔ <a 
                                    style={{ 'color': '#638035' }} 
                                    href="https://programiz.pro/certificates/detail/BBF3F1713142" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Learn HTML (Programiz PRO)
                                </a>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>
    );
};

export default AboutPage;
