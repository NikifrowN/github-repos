import styles from './styles.module.scss';
import Logo from './img/logo.png';
import { SearchBar } from '../SearchBar/component';
import { NavLink } from 'react-router-dom';

export const Header = () => (
   <header className={styles.root}>
      <div className={styles.container}>
         <div className={styles.logo}>
            <NavLink to={'/github-repos/'}>
               <img src={Logo} alt="logo"/>
            </NavLink>
            <p>GitHub repositories search</p>
         </div>
         <SearchBar />
      </div>
   </header>
)