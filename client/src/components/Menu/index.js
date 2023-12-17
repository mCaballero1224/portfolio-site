import { NavLink } from 'react-router-dom';
function Menu() {
    return(
        <div className="">
            <nav className="">
                <ul>
                    <li><NavLink>About Me</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
