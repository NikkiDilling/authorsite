
import classes from './../css/AboutPage.module.scss';
import about from "../assets/about image.webp";
import aries from "../assets/aries.webp";
import divider from "../assets/divider.webp";
import student from "../assets/student.webp";

export default function AboutPage() {


  return (
    <div className={classes.container}>

      <div className={classes.section}>
        <img src={about} alt="" width={500} />
        <div>
          <h1>Hi, I'm Nicole!</h1>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "20px 0 20px 0" }}>
            <div>Star Sign:</div>
            <img src={aries} alt="star sign" width={100} />
          </div>
          <div>

            <div className={classes.text}>
              For as long as I can remember I've always loved writing and drawing. Somewhere around middle-school I started writing silly little novellas and short stories.
            </div>

            <div className={classes.text}>
              My biggest publishing achievement was perhaps when I interviewd a war veteran for a school project, which was published as part of an anthology.
            </div>
            <div className={classes.text}>
              Rereading it now...
            </div>
            <div className={classes.text}>
              I've got no idea who allowed to publish something with so many typos. But I was in 7th grade. So I can forgive myself that transgretion.
            </div>

          </div>
        </div>
      </div>
      <img src={divider} className={classes.divider} />
      <div className={classes.section} style={{ alignItems: "start", justifyContent: "space-between" }}>

        <div>
          <div className={classes.text}>
            A little about myself... I was pragmatic with the choice of my major.
          </div>
          <div className={classes.text}>
            I studied computer science and informatics in university in hopes of always having a stable income and in turn the freedom to be able to do whatever I want later. This later has come and I decided to pursue my dream of being a published author.
          </div>
          <div className={classes.text} >
            My degree has come in handy in many ways, not least of which is the ability to build and maintain this website all by myself, which has cut me some costs. The only thing I can't do is design. As you can see this website is rather minimalistic. But hey, it works!
          </div>
        </div>


        <img
          src={student}
          style={{ width: "350px", height: "auto", objectFit: "contain", margin: "0 0 0 20px" }}
        />
      </div>

      <img src={divider} className={classes.divider} />

      <div >
        <div>My favourite tropes:</div>
        <ul>
          <li>Love triangle</li>
          <li>Slooow Burn</li>
          <li>Forbidden love</li>
          <li>Misunderstood villain/ Villain redemption</li>
        </ul>
      </div>
      <img src={divider} className={classes.divider} />

{/*       <div>
        <div>My favourite books:</div>
        <ul>
          <li>Hunger Games</li>
          <li>Six of Crows</li>
          <li>Twilight... (it's a fun read, okay?)</li>
        </ul>
      </div>
      <img src={divider} className={classes.divider} /> */}
    </div>
  );
}