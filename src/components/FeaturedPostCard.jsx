import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const FeaturedPostCard = ({ post }) => (
  <div className="featured-post-card">
    <div
      className="image"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="overlay" />
    <div className="content">
      <p className="date">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="title">{post.title}</p>
      <div className="author">
        <img
          alt={post.author.name}
          height="30px"
          width="30px"
          className="avatar"
          src={post.author.photo.url}
        />
        <p className="name">{post.author.name}</p>
      </div>
    </div>
    <Link to={`/post/${post.slug}`}>
      <span className="click-overlay" />
    </Link>
  </div>
);

export default FeaturedPostCard;
