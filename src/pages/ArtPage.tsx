
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
{/*             <ArtContainer
                title="Vanadium sigil"
                image="C:\Repositories\Test\authorsite\src\assets\Tayrem(art).png"
                date="October 2025"
                excerpt="Made by Nicole D. Hansen"
            /> */}

        </div>
    );
}