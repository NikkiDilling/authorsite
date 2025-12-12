import { Link } from 'react-router-dom';
import classes from './../css/MainPage.module.scss';
import NewsletterForm from '../components/NewsLetterForm';

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
              <div>Here on my author site, you can find information about me, my writing journey, and my debut novel, "Project Sunset". ...</div>
            </div>
            <Link to='/About' className={classes.readMoreBtn} >Learn more about me</Link>
          </div>

        </div>

        <div className={classes.mobileView}>
          <img src="/assets/\divider.png" className={classes.divider} />
          <h3>Nicole's newsletter</h3>
          <p>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>
          <NewsletterForm />
        </div>

        <img src="/assets/\divider.png" className={classes.divider} />

        <div className={classes.section}>
          <div className={classes.sectionContent}>
            <h3>"Project Sunset"</h3>
            <div>
              <div>"Project Sunset" the first book of the Elven Wastelands series. It is my debut romantasy novel I’ve been writing for over 5 years...</div>
            </div>
            <Link to='/Books' className={classes.readMoreBtn}>Read more</Link>
          </div>
        </div>
      </div>


      <div className={classes.recentPosts}>

        <div className={classes.desktopView}>
          <h3>Sign up to my newsletter</h3>
          <p className={classes.mobileView}>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>

          <NewsletterForm />
        </div>

        <div className=" unreleased">
          <img src="/assets/\divider.png" className={classes.divider} />
          <h4>Recent blog posts</h4>
          <div>
            {/* Blog posts will go here */}

          </div>

        </div>
      </div>
    </div>
  );
}