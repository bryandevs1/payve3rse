import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const AdjacentPostCard = ({ post, position }) => (
  <>
    {post.featuredImage && (
      <div className={`adjacent-post-card ${position === 'LEFT' ? 'left-position' : 'right-position'}`}>
        <div className="image" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
        <div className="overlay" />
        <div className="content">
          <p className="date">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          <p className="title">{post.title}</p>
        </div>
        <Link to={`/post/${post.slug}`}><span className="z-10" /></Link>
        {position === 'LEFT' && (
          <div className="arrow-btn left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
        )}
        {position === 'RIGHT' && (
          <div className="arrow-btn right-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </div>
    )}
  </>
);

export default AdjacentPostCard;