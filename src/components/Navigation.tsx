
import classes from './../css/Navgation.module.scss';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className={classes.container}>
            <Link to="/Books">Books</Link >
            <Link to="/Blog">Blog</Link >
            <Link to="/Art">Art</Link >
            <Link to="/About">About Author</Link >
            <Link to="/Contact">Contact</Link >
        </div>
    );
}