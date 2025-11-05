
import classes from './../css/AboutPage.module.scss';


export default function AboutPage() {


  return (
    <div className={classes.container}>

      <section>
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
      </section>

      <section>
        
      </section>
    </div>
  );
}