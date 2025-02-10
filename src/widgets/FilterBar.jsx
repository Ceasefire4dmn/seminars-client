import React from 'react';
import { Button } from 'react-bootstrap';
import SearchBar from '../shared/ui/SearchBar';

// Универсальный Компонент для поиска и сортировки
const FilterBar = ({ search, setSearch, sortOrder, handleSortToggle }) => {
    return (
        <div className="controls-bar">
            {/* Поиск */}
            <SearchBar 
                search={search} 
                setSearch={setSearch} 
            />
            {/* Кнопка для сортировки */}
            <Button
                className="sort-btn d-block"
                variant="outlined-success"
                onClick={handleSortToggle}
            >
                Сортировать по дате
                {sortOrder === 'asc' ? ' ↑' : ' ↓'}
            </Button>
        </div>
    );
};

export default FilterBar;
