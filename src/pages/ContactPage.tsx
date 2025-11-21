
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './../css/MainPage.module.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {


  return (
    <div style={{display: "flex", flexDirection:"column", width: "90%", margin: "30px auto", justifyContent: "center", alignItems: "center"}}>

      <h3>Contact Me</h3>

      <div>
        <div>Email: <span>nicoledhansen.mail@gmail.com</span></div>
      </div>

      <div>Or you reach me here:

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