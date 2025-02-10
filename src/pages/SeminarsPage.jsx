import React from "react";
import SeminarList from "../entities/ui/SeminarList";


const SeminarsPage = () => {
    return (
        <div className="container seminars-container mt-4">
            <h2 className="mb-3">Список семинаров</h2>
            <SeminarList />
        </div>
    );
};

export default SeminarsPage;
