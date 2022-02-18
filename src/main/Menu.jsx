import React from 'react';
import "./Menu.css"
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default props => {
    
    return (
        <header className='Menu'>
            <div className='Logo'>
                <Icon icon="icon-park:paper-ship" />
            </div>

            <input className='Search' type="text"/> 

            <div className='botoes-entrar'>
                <button className='Entrar'>Entrar</button>
                <button className='Cadastrar'>Cadastrar-se</button>
            </div>
        </header>
    )
}