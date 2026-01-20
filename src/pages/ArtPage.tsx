import classes from './../css/ArtPage.module.scss';
import tayremArt from '../assets/Tayrem-commission.webp';
import tayremNElayah from '../assets/Tayrem & Elayah.webp';
import sigil from '../assets/Vanadian sigil.webp';
import firstMeeting from '../assets/first meeting.webp';
import tayremChained from '../assets/Tayrem-chained.webp';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'swiper/swiper-bundle.css';

export default function ArtPage() {

    const itemData = [
        {
            img: tayremArt,
            title: 'Tayrem - Half body',
            author: 'Kostojj',
            ig: "https://www.instagram.com/kostojjn/"
        },
        {
            img: tayremNElayah,
            title: 'Tayrem & Elayah',
            author: 'Nicole D. Hansen',
        },
        {
            img: sigil,
            title: 'Vanadium sigil',
            author: 'Nicole D. Hansen',
        },
        {
            img: firstMeeting,
            title: 'First meeting',
            author: 'Nicole D. Hansen',
        },
        {
            img: tayremChained,
            title: 'Tayrem ch.7 scene',
            author: 'Nicole D. Hansen',
        }
    ];
    return (
        <div className={classes.container}>
            <div>
                Here are some artworks either made by me or commissioned from other artists for my books.
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                grabCursor
                loop={true}
                navigation

                className={classes.swiper}
            >

                {itemData.map((item, index) => (
                    <SwiperSlide>
                        <div className={classes.imageWrapper}>
                            <img
                                key={index}
                                srcSet={item.img}
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />

                        </div>
                        <div className={classes.caption}>
                            <div className={classes.title}>"{item.title}"</div>
                            {item.ig ?
                                (
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className={classes.author}>by: {item.author}</div>
                                        <a href='https://www.instagram.com/ndhansen_' target='_blank' style={{marginLeft: "10px"}}>
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                className={classes.icon}
                                            />
                                        </a>
                                    </div>

                                ) :
                                (
                                    <div className={classes.author}>by: {item.author}</div>

                                )
                            }
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>


        </div>
    );
}