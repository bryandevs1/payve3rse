import { useEffect, useState, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FeaturedPostCard } from '../components';
import Slider from 'react-slick';

const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    posts(where: { featuredPost: true }) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      title
      slug
      createdAt
    }
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const [dataLoaded, setDataLoaded] = useState(false);

  const { loading, error, data } = useQuery(GET_FEATURED_POSTS);

  useEffect(() => {
    console.log("loading:", loading);
    console.log("error:", error);
    console.log("data:", data);
    if (!loading && !error && data) {
      setDataLoaded(true);
    }
  }, [loading, error, data]);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  };
  
  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  };
  

  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="containert">
        <div className="cards topic-cards">
          <div className="cards-content">
            <h2 className="headline headline-2 section-title cards-title" id="topic-label">
              Featured topics
            </h2>
            <p className="cards-text">
              Don't miss out on the latest news about cryptocurrency trading and other topics.
            </p>
            <div className="btn-group">
              <button className="btn-icon" aria-label="previous" data-slider-prev onClick={handlePrevClick}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className="butfai" />
              </button>
              <button className="btn-icon" aria-label="next" data-slider-next onClick={handleNextClick}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="butfai" />
              </button>
            </div>
          </div>
          <div className="slider" data-slider>
            {/* Render the Carousel component only when data is loaded */}
            {loading || !dataLoaded ? (
              // Render skeleton loading animation while data is loading
                <div className="video"></div>

            ) : (
              <Slider {...settings} className='slider-list' ref={carouselRef}>
                {data.posts.map((post) => (
                  <FeaturedPostCard key={post.slug} post={post} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
