import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoodreads, faInstagram, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons';

import classes from './../css/Header.module.scss';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default function Header() {


  return (
    <div className={classes.container}>

      <div className={classes.title}>
        <Link to="/">Nicole D. Hansen</Link >

      </div>

{/* Replace with burger menu on mobile! */}
      <div className={classes.navigation}>
        <Navigation />

      </div>

      <div className={classes.icons}>
        <a href='https://www.goodreads.com/user/show/176510995-nicole' target='_blank'>
          <FontAwesomeIcon
            icon={faGoodreads}
            className={classes.icon}
          />
        </a>

        <a href='https://www.instagram.com/ndhansen_' target='_blank'>
          <FontAwesomeIcon
            icon={faInstagram}
            className={classes.icon}
          />
        </a>

        <a href='https://www.tiktok.com/@nicole.writes5' target='_blank'>
          <FontAwesomeIcon
            icon={faTiktok}
            className={classes.icon}
          />
        </a>

        <a href='https://www.threads.net/@ndhansen_' target='_blank'>
          <FontAwesomeIcon
            icon={faThreads}
            className={classes.icon}
          />
        </a>

      </div>

    </div>
  );
}