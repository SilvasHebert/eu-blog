import React from 'react';
import "./Menu.css"
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default props => {
    
    return (
        <aside className='Menu'>

            <nav className='Pages-List'>
                <ul>
                    <li>
                        <Link to="/" className="Site-Name">
                            <Icon icon="carbon:blog" />
                            <div>Eu Blog</div>
                        </Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/">
                            <Icon icon="ant-design:home-filled"/>
                            <div>Inicio</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Icon icon="akar-icons:settings-vertical" rotate={2}/>
                            <div>Configurações</div>
                        </Link>
                    </li>

                </ul>
            </nav>

            <div className='Account'>
                    <Link to="/">
                        <Icon icon="ic:round-account-circle" />
                        <div>Conta</div>
                    </Link>
            </div>

        </aside>
    )
}