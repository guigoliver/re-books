import './style.css'
import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'


const icons = [profile, bag]

const HeaderIcons = () => {
    return (
        <ul className='icons'>
          {icons.map((icon, index) => <li className='icon' key={index}><img src={icon} alt="icon"/></li>)}
        </ul> 
    )
}

export default HeaderIcons