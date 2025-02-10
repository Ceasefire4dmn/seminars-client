import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    // Массив данных для ознакомительных карточек
    const seminars = [
        {
            id: 1,
            title: 'Твой менеджер семинаров',
            description: 'Будь в курсе прошедших и предстоящих мероприятий с нами. 😊',
        },
        {
            id: 2,
            title: 'Выбирай подходящие семинары',
            description: 'Выбирай такие семинары, какие интересны лишь тебе. 🤝',
        },
        {
            id: 3,
            title: 'Редактируй и изменяй',
            description: 'С нашим удобным интерфейсом редактирование семинаров стало проще некуда! 💖',
        },
        {
            id: 4,
            title: 'Удаляй в один клик',
            description: 'С легкостью избавляйся от устаревших данных. 🗑️',
        },
        {
            id: 5,
            title: 'Делись опытом',
            description: 'Ведь нашим интуитивно понятным приложением хочется поделиться! ✨',
        },
        {
            id: 6,
            title: 'О нас',
            description: 'Мы делаем сервис доступным и приятным для вас! 🔧',
        },
    ]

    return (
        <Container className='mb-5 home-container'>
            <Row className="text-center pb-5">
                <h1>Добро пожаловать в Менеджер Семинаров</h1>
                <p>
                    Это приложение предназначено для эффективного управления семинарами.
                    Мы обеспечиваем простой и интуитивно понятный интерфейс для добавления, редактирования и удаления семинаров.
                    Хотите быть в курсе всех актуальных мероприятий? Это приложение поможет вам!
                </p>
                <p>
                    Узнайте больше о моей квалификации и опыте, посетив <a style={{ 'color': '#ff9256' }} href="https://docs.google.com/document/d/1gM3FAh8T-FcvFQSiQIFF9Zh0oZMnuNGTZiEqqj3JaDw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> сайт с моим резюме</a>.
                </p>
            </Row>
            <Row className="justify-content-center">
                {
                    seminars.map((seminar, index) =>  (
                    <Col 
                        xs={12} 
                        md={4} 
                        lg={4} 
                        className="d-flex justify-content-center" 
                        key={seminar.id}
                    >
                        <Card className={`card-box py-4 ${index === 0 || index === 5 ? 'color-1' : index === 1 || index === 3 ? 'color-2' : 'color-3'}`}>
                            <Card.Body>
                                    <Card.Title>
                                        {seminar.title}
                                    </Card.Title>
                                <Card.Text>
                                    {seminar.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;
