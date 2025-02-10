import React from 'react';
import { Form } from 'react-bootstrap';

// Универсальный поиск
const SearchBar = ({ search, setSearch }) => {
    return (
        <Form.Control
            type="text"
            placeholder="Поиск по названию..."
            className="mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default SearchBar;
