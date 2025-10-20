import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoodreads, faInstagram, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons';

import classes from './../css/Header.module.scss';
import Navigation from './Navigation';

export default function Header() {


  return (
    <div className={classes.container}>

      <div className={classes.title}>
        Nicole D. Hansen
      </div>

      <div className={classes.navigation}>
      <Navigation />

      </div>

      <div className={classes.icons}>
        <FontAwesomeIcon
          icon={faGoodreads}
          className={classes.icon}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className={classes.icon}
        />
        <FontAwesomeIcon
          icon={faTiktok}
          className={classes.icon}
        />
        <FontAwesomeIcon
          icon={faThreads}
          className={classes.icon}
        />
      </div>

    </div>
  );
}