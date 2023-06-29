import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`;

const Categories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return
    
    <div className="video"></div>
    
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.categories.map((category) => (
        <a key={category.slug} className="cards-badge cursor-pointer">
          <Link to={`/category/${category.slug}`}>
            <span className="mr-2">{category.name}</span>
          </Link>
        </a>
      ))}
    </>
  );
};


const Body = ({ post }) => {
  return (
    <div className="post-main -mt-16 mb-20">
      <ul className="grid-list">
        <li key={post.id}>
          <div className="recent-post-cards">
            <figure
              className="cards-banner img-holder"
              style={{ '--width': 271, '--height': 258 }}
            >
              <img src={post.featuredImage.url} alt="Featured" />
            </figure>

            <div className="cards-content cursor-pointer">

              <h3 className="headline headline-3 cards-title">
                <p className="link hover-2">
                  <Link to={`/post/${post.slug}`}>{post.title}</Link>
                </p>
              </h3>

              <p className="cards-text">{post.excerpt}</p>
              <div className="cards-wrapper">
                <div className="cards-tag">
                  {post.categories.map((category) => (
                    <a key={category.slug} className="span hover-2">
                      #{category.name}
                    </a>
                  ))}
                </div>

                <div className="wrapper">
<FontAwesomeIcon icon={faClock} />
                  <span className="span">
                    {moment(post.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};


const PostCard = ({ post }) => {
  return (
    <>
      <Body post={post} categories={Categories} />
    </>
  );
};

export default PostCard