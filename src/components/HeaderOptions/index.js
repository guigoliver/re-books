import './style.css'

const optionsText = ['CATEGORIES', 'MY BOOKS', 'FAVORITES']

const HeaderOptions = () => {
    return (
        <ul className='options'>
          {optionsText.map((text, index) => <li className='option' key={index}>{text}</li>)}
        </ul>
    )
}

export default HeaderOptions