import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import { PostCard, Categories, Loader } from '../../components';

const GET_CATEGORY_POST = gql`
  query GetCategoryPost($slug: String!) {
    postsConnection(where: { categories_some: { slug: $slug } }) {
      edges {
        cursor
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;

const CategoryPost = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_CATEGORY_POST, {
    variables: { slug },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return null; // Handle the error state accordingly
  }

  const posts = data?.postsConnection?.edges;

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;
