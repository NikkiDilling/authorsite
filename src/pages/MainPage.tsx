import classes from './../css/MainPage.module.scss';

export default function MainPage() {


  return (
    <div className={classes.container}>

      <div>
        <h1>Welcome!</h1>

        <div className={classes.section}>
          <div>My name is Nicole. I’m a writer from Denmark who daylights as a software developer. </div>
        </div>

        <div className={classes.section}>
          <div>Project Sunset is codename for the debut romantasy novel I’ve been writing for over 5 years.</div>
        </div>
      </div>

      <div className={classes.recentPosts}>
        <h4>Recent blog posts</h4>
        <div>
          {/* Blog posts will go here */}
        </div>
      </div>
    </div>
  );
}