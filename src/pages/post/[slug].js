import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components';
import { AdjacentPosts, FeaturedPosts } from '../../sections';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';

const GET_POST_DETAILS = gql`
  query GetPostDetails($slug: String!) {
    post(where: { slug: $slug }) {
      title
      excerpt
      featuredImage {
        url
      }
      author {
        name
        bio
        photo {
          url
        }
      }
      createdAt
      slug
      content {
        raw
      }
      categories {
        name
        slug
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 12px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  margin-top: 20px;
  margin-bottom: -5px;

  @media (min-width: 1024px) {
    grid-column: 1 / span 1;
  }
`;
const Sid = styled.div`
  @media (min-width: 1024px) {
    display:none;
  }
`

const SidebarWrapper = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: sticky;
  top: 20px; /* Adjust the top position as needed */

  @media (max-width: 1023px) {
    position: relative;
    top: unset;
  }
`;

const SidebarSection = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const PostDetails = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_DETAILS, {
    variables: { slug },
  });

  if (loading) {
    return 
    <div className="video"></div>
  }

  if (error) {
    console.error(error);
    return null; // Handle the error state accordingly
  }

  const post = data?.post;

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <FeaturedPosts />
        <Container>
          <MainContent>
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </MainContent>
          <SidebarWrapper>
            <Sidebar>
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </Sidebar>
          </SidebarWrapper>
          <Sid>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
          </Sid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
