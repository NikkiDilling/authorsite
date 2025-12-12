
import classes from './../css/AboutPage.module.scss';


export default function AboutPage() {


  return (
    <div className={classes.container}>

      <div className={classes.section}>
        <img src="/assets/about image.png" alt="" width={500} />
        <div>
          <h1>Hi!</h1>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0 0 20px 0" }}>
            <div>Star Sign:</div>
            <img src="/assets/aries.png" alt="star sign" width={100} />
          </div>
          <div className={classes.content}>
            <div>
              For as long as I can remember I've always loved writing and drawing. Somewhere around middle-school I started writing silly little novellas and short stories.
              My biggest publishing achievement was perhaps when I interviewd a war veteran for a school project, which was published as part of an anthology. Rereading it now... I've got no idea who allowed to publish something with so many typos. But I was in 7th grade. So I can forgive myself that transgretion. </div>
          </div>
        </div>
      </div>

      <img src="/assets/\divider.png" className={classes.divider} />

{/*       <div className={classes.section}>
        <div>My favourite tropes</div>
        <ul>
          <li>Love triangle</li>
          <li>Best of the best</li>
          <li>Misunderstood villain</li>
        </ul>
      </div>
      <img src="/assets/\divider.png" className={classes.divider} />

      <div className={classes.section}>
        <div>My favourite books</div>
        <ul>
          <li>Hunger Games</li>
          <li>Six of Crows</li>
          <li>Twilight... (it's a fun read, okay?)</li>
        </ul>
      </div>
      <img src="/assets/\divider.png" className={classes.divider} /> */}
    </div>
  );
}