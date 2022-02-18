import React from 'react';
import { Icon } from '@iconify/react';

import "./Footer.css"

export default props => {
    return(
        <footer className='Footer'>
            <ul>
                <li>
                    <a href="https://github.com/SilvasHebert/" target="_blank">
                        <Icon icon="akar-icons:github-fill"></Icon>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/silvashebert/" target="_blank">
                        <Icon icon="akar-icons:linkedin-box-fill" />
                    </a>
                </li>
            </ul>
            <p>By Hebert Silva</p>
        </footer>
    )
}