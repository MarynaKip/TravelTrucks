import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
