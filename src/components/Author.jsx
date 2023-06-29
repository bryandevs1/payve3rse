import React from 'react';
import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="author-container">
    <div className="author-image">
      <img
        loader={grpahCMSImageLoader}
        alt={author.name}
        className="juio"
        src={author.photo.url}
      />
    </div>
    <h3 className="author-name">{author.name}</h3>
    <p className="author-bio">{author.bio}</p>
  </div>
);

export default Author;
