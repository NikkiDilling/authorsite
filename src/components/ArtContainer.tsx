import classes from '../css/ArtContainer.module.scss';

export default function ArtContainer(props: { title: string, image: string; date: string, excerpt: string, artistLink?: string }) {
    return (
        <div >
            <div className={classes.artContainer}>
                <img src={props.image} alt="" />
                <div>
                    <div>{props.title}</div>
                    <div>{props.date}</div>
                    <div>{props.excerpt}</div>
                </div>
            </div>
        </div>
    )
}