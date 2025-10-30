import { Link } from "react-router-dom";
import classes from "../css/BlogPost.module.scss";

export default function BlogPostPreview(props: { title: string, image: string; date: string, excerpt: string, link:string }) {
    return (
        <div >
            <Link to={props.link} className={classes.containerPreview}>
                <img src={props.image} alt={props.title} />
                <div className={classes.contentPreview}>
                    <div className={classes.header}>
                        <div>{props.title}</div>
                        <div>{props.date}</div>
                    </div>
                    <div>{props.excerpt}</div>
                </div>
            </Link>

        </div>
    );
}