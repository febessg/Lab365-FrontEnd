import './Button.css';

function Button({props}) {
    return (  
        <div className='main-button'>
            <button className='Button'>{props}</button>
        </div>
    );
}

export default Button;