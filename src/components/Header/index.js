import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions'
import HeaderIcons from '../HeaderIcons'
import './style.css'

const Header = () => {
    return (
        <header className='App-header'>        
         <Logo />
         <HeaderOptions />
         <HeaderIcons />                 
      </header>
    )
}

export default Header