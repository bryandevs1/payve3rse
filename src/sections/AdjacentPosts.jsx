import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { AdjacentPostCard } from '../components';

const GET_ADJACENT_POSTS = gql`
  query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
    next: posts(first: 1, orderBy: createdAt_ASC, where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
    previous: posts(first: 1, orderBy: createdAt_DESC, where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { loading, error, data } = useQuery(GET_ADJACENT_POSTS, {
    variables: { createdAt, slug },
  });

  useEffect(() => {
    if (!loading && !error && data) {
      setAdjacentPost(data);
      setDataLoaded(true);
    }
  }, [loading, error, data]);

  return (
    <div className="adj1">
      {dataLoaded && (
        <>
          {adjacentPost?.previous && (
            <div
              className={`${
                adjacentPost.next ? 'adj2' : 'adj1 lg:adj3'
              } adjacent-post rounded-lg relative h-72`}
            >
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost?.next && (
            <div
              className={`${
                adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'adj1 lg:adj3'
              } adjacent-post rounded-full relative h-72`}
            >
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;
