import BlogPostPreview from '../components/BlogPostPreview';
import classes from './../css/MainPage.module.scss';

export default function MainPage() {


  return (
    <div className={classes.container}>

      <div className={classes.mainSection}>
        <h1>Welcome!</h1>

        <div className={classes.section}>
          <img src="src\assets\pfp.jpg" alt="profile image" className={classes.pfp} />
          <div className={classes.sectionContent}>
            <div>
              <div>My name is Nicole. I’m a writer from Denmark who daylights as a software developer. </div>
              <div>Here on my author site, you can find information about me, my writing journey, and my debut novel, Project Sunset.</div>
            </div>
            <div className={classes.readMoreBtn}>Learn more about me</div>
          </div>

        </div>

        <div className={classes.section}>
          <img src="src\assets\projectSunset(small).png" alt="profile image"  className={classes.projectSunset} />
          <div className={classes.sectionContent}>
            <div>
              <div>Project Sunset is codename for the debut romantasy novel I’ve been writing for over 5 years.</div>
            </div>
            <div className={classes.readMoreBtn}>Raed more</div>
          </div>
        </div>
      </div>

      <div className={classes.recentPosts}>
        <h4>Recent blog posts</h4>
        <div>
          {/* Blog posts will go here */}
          <BlogPostPreview 
            title='Test'
            image='src\assets\pfp.jpg'
            date='June 10, 2024'
            excerpt='This is a test excerpt for the blog post preview component.'
          />
        </div>
      </div>
    </div>
  );
}