import React from 'react';
import './Header.css';

function Header() {
    return (  
        <div className="Header">
            <div className="Header-ul">
                <ul>
                    <li><a href="https://mail.google.com/">Gmail</a></li>
                    <li><a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl">Imagens</a></li>
                </ul>
            </div>
            <div className='Header-icons'>
                <div className="menu-icon">
                    <a href="#"><svg class="gb_h" width="24px" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg></a>
                </div>
                <div className="perfil-img">
                    <a href="#"><img src='https://lh3.googleusercontent.com/ogw/AOLn63FLt5l7uW7qgiyF3jXJEUs6wmWMW6mtWu25qP9e=s32-c-mo' alt="Foto"/></a>
                </div>  
            </div>
        </div>
    );
}

export default Header
;