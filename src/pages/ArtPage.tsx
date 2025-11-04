
import ArtContainer from '../components/ArtContainer';
import classes from './../css/MainPage.module.scss';


export default function ArtPage() {


    return (
        <div className={classes.container}>

            <ArtContainer
                title="Tayrem - Project Sunset"
                image="src\assets\Tayrem(art).png"
                date="October 2025"
                excerpt="Made by Kostojj"
            />
            <ArtContainer
                title="Tayrem & Elayah"
                image="src\assets\Tayrem & Elayah.png"
                date="November 2025"
                excerpt="Made by Nicole D. Hansen"
            />
            <ArtContainer
                title="Vanadium sigil"
                image="src\assets\Vanadian sigil.png"
                date="October 2025"
                excerpt="Made by Nicole D. Hansen"
            />
            <ArtContainer
                title="First meeting"
                image="src\assets\first meeting.jpg"
                date="2024"
                excerpt="Made by Nicole D. Hansen"
            />
            <ArtContainer
                title="Tayrem ch.7 scene"
                image="src\assets\Tayrem (chained).jpg"
                date="2024"
                excerpt="Made by Nicole D. Hansen"
            />

        </div>
    );
}