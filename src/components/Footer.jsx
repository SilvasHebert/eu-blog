import React from 'react';
import { Icon } from '@iconify/react';

import "./Footer.css"

export default props => {
    return(
        <footer className='Footer'>
            <ul>
                <li>
                    <Icon icon="akar-icons:github-fill" />
                </li>
                <li>
                    <Icon icon="akar-icons:linkedin-box-fill" />
                </li>
            </ul>
            <p>By Hebert Silva</p>
        </footer>
    )
}