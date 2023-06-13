import './Main.css';
import logo from '../../images/google-logo-1.png';
import Button from '../Button/Button';

function Main() {

    return ( 
        <div className="Main">
            <div className='google-logo'>
                <img src={logo} alt="Google Logo" />
            </div>
            <div className='main-itens'>
                <div className="textarea"><input type="text" placeholder='Pesquise no Google ou digite um URL' /></div>
                <div className='main-buttons'>
                    <Button props="Pesquisa Google"/>
                    <Button props="Estou com sorte"/>
                </div>
            </div>
        </div>
    );
}

export default Main;