import React from "react";
import Inicio from "../telas/Inicio";
import Configuracoes from "../telas/Configuracoes";
import "./Content.css";

import { Route, Routes } from "react-router-dom";

export default (props) => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Configuracoes" element={<Configuracoes />} />
            </Routes>
        </main>
    );
};
