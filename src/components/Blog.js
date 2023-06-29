import React, { useState, useEffect } from 'react';
import './Blogcss.css';
import { useQuery, gql } from '@apollo/client';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

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
      excerpt
    }
  }
`;

function BlogSection() {
  const { loading, error, data } = useQuery(GET_FEATURED_POSTS);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [defaultImage, setDefaultImage] = useState({});

  useEffect(() => {
    console.log("loading:", loading);
    console.log("error:", error);
    console.log("data:", data);
    if (!loading && !error && data) {
      setDataLoaded(true);
    }
  }, [loading, error, data]);

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

  return (
    <div className="containerf">
      <h2 className="headline headline-2 section-title font-bold bh">
        <span className="span bh">Payv3rse Blog</span>
      </h2>

      <p className="bh">
        Stay ahead in the world of crypto investments by keeping up-to-date with the latest news, tips, and guides. Make informed and timely decisions to ensure you are making the most of your investments.
      </p>

      {dataLoaded && (
        <Slider {...settings}>
          {data.posts.map((post) => (
            <div key={post.slug} className="card">
              <div className="card-top">
                <img src={post.featuredImage.url} alt={post.title} />
                <h1 className="text-4xl">{post.title}</h1>
              </div>
              <div className="card-bottom py-5">
                <h3 className="px-5">{post.excerpt}</h3>
                <Link to={`/post/${post.slug}`}>
                  <button className="get-started hdbt1 text-white font-bold px-6 md:px-2 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-[#ffcb05] active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Continue Reading
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default BlogSection;
