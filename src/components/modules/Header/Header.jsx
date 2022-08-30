import s from './header.module.css'
import { NavLink } from 'react-router-dom'

import items from './items'

const Header = () => {
    const checkClass = ({ isActive }) => {
        const className = isActive ? `${s.link} ${s.active}` : `${s.link}`
        return className
    }

    const elements = items.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink className={checkClass} to={to}>{text}</NavLink>
        </li>
    ))

    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {elements}
            </ul>
        </div>
    )
}

export default Header