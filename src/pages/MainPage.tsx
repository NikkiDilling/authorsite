import { Link } from 'react-router-dom';
import BlogPostPreview from '../components/BlogPostPreview';
import classes from './../css/MainPage.module.scss';

export default function MainPage() {


  return (
    <div className={classes.container}>

      <div className={classes.mainSection}>
        <h1>Welcome!</h1>

        <div className={classes.section}>
          <img src="/assets/\pfp.gif" alt="profile image" className={classes.pfp} />
          <div className={classes.sectionContent}>
            <div>
              <div>My name is Nicole. I’m a writer from Denmark who daylights as a software developer. </div>
              <div>Here on my author site, you can find information about me, my writing journey, and my debut novel, "Of Shadows and Sunsets". ...</div>
            </div>
            <Link to='/About' className={classes.readMoreBtn} >Learn more about me</Link>
          </div>

        </div>

         <img  src="/assets/\divider.png"  className={classes.divider}/>

        <div className={classes.section}>
          <div className={classes.sectionContent}>
            <h3>Of Shadows and Sunsets</h3>
            <div>
              <div>Of Shadows and Sunsets the first book of the Elven Wastelands series. It is my debut romantasy novel I’ve been writing for over 5 years...</div>
            </div>
            <Link to='/Books' className={classes.readMoreBtn}>Read more</Link>
          </div>
        </div>
      </div>

      <div className={classes.recentPosts + " unreleased"}>
         <img  src="/assets/\divider.png"  className={classes.divider}/>
        <h4>Recent blog posts</h4>
        <div>
          {/* Blog posts will go here */}
          <BlogPostPreview 
            title='Author Site Launched!'
            image='/assets/\pfp.jpg'
            date='Octoder 31, 2024'
            excerpt='This is a test excerpt for the blog post preview component.'
            link="/Blog/1"
          />
        </div>
      </div>
    </div>
  );
}