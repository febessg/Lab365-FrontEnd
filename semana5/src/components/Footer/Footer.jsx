import './Footer.css';

function Footer() {
    return (  
        <div className='Footer'>
            <div className='local'>
                <span>Brasil</span>
            </div>
            <div className='footer-nav'>
                <div className='footer-data'>
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Publicidade</a></li>
                        <li><a href="#">Negócios</a></li>
                        <li><a href="#">Como funciona a Pesquisa</a></li>
                    </ul>
                </div>
                <div className='footer-data'>
                <ul>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Termos</a></li>
                        <li><a href="#">Configurações</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;