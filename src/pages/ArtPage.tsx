import classes from './../css/ArtPage.module.scss';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ArtPage() {

    const itemData = [
        {
            img: 'src/assets/Tayrem(art).png',
            title: 'Tayrem - Half body',
            author: 'ig: Kostojj',
        },
        {
            img: 'src/assets/Tayrem & Elayah.png',
            title: 'Tayrem & Elayah',
            author: 'Nicole D. Hansen',
        },
        {
            img: 'src/assets/Vanadian sigil.png',
            title: 'Vanadium sigil',
            author: 'Nicole D. Hansen',
        },
        {
            img: 'src/assets/first meeting.jpg',
            title: 'First meeting',
            author: 'Nicole D. Hansen',
        },
        {
            img: 'src/assets/Tayrem (chained).jpg',
            title: 'Tayrem ch.7 scene',
            author: 'Nicole D. Hansen',
        }
    ];
    return (
        <div className={classes.container}>
            <Box className={classes.box}>
                <ImageList variant="masonry" cols={3} gap={2}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.author} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

        </div>
    );
}