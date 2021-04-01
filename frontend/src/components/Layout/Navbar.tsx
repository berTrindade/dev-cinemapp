
import { Link, useLocation } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg';
import styles from '../../styles/components/Layout/Navbar.module.css';

interface HeaderProps {
    title: string
}

const Navbar: React.FC<HeaderProps> = ({ title })  => {

    const { pathname } = useLocation()

    return (
        <header className={styles.navBar}>
            <div className={styles.navBarContainer}>
                {pathname !== "/" ? 
                <Link to="/">
                    <img src={backIcon} alt="Back"/>
                </Link> : <p>{title}</p>}

                {pathname !== "/" ? <p>{title}</p> : <Link to="/favorites">Favorites</Link>}
            </div>   
        </header>
    )
}

export default Navbar