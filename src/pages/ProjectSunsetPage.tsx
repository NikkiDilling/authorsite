import classes from './../css/ProjectSunset.module.scss';
import banner from "../assets/banner.png";

export default function ProjectSunsetPage() {

  return (
    <div className={classes.container} id='Intro'>
      <div className={classes.banner}>
        <img src={banner} alt="Elven Wastelands banner" />
      </div>
      <main>
        <div>

          <div className={classes.quotes}>
            <div>"Even demons don't like the dark."</div>
          </div>

          <img src="/assets/\divider.png" className={classes.divider} />
          <div className={classes.textContainer}>
            <div>Enter a world of elves, elemental spirits and intrigue!</div>
            <br />
            <div>Project Sunset is the codename the first book of the Elven Wastelands series.</div>
          </div>
          <img src="/assets/\divider.png" className={classes.divider} />
          <div>
            <img className={classes.map} src="/assets/world map.png" alt="World Map" />
            <div style={{ textAlign: "center" }} >Map</div>
          </div>

          <img src="/assets/\divider.png" className={classes.divider} />

          <div className={classes.textContainer}>
            <h2> Elven Wastelands series</h2>
            <div>Currently </div>
          </div>

          <img src="/assets/\divider.png" className={classes.divider} />

          <div className={classes.textContainer}>
            <div> some text </div>
          </div>

          <img src="/assets/\divider.png" className={classes.divider} />

          <div className={classes.textContainer}>
            <div> some text </div>
          </div>
        </div>

      </main>



    </div>
  );
}