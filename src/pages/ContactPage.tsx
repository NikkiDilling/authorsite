
import classes from './../css/MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoodreads, faInstagram, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {


  return (
    <div className={classes.container}>

      <h1>Contact Me</h1>
      <div>I'm currently working on setting up a seperate email, until then you can reach me here:

        <span>
          <a href='https://www.instagram.com/ndhansen_' target='_blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.icon}
            />
          </a>
        </span>
      </div>
    </div>
  );
}