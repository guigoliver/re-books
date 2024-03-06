import './style.css'
import logo from '../../images/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" className='logo-img' />
            <span>ReBooks</span>
        </div>
    )
}

export default Logo