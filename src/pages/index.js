import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { FeaturedPosts } from '../sections';
import { PostCard, Categories, PostWidget } from '../components';
import styled from 'styled-components';
import './indexcss.css';
import Navbar from '../components/Navbar';

const GET_POSTS = gql`
  query GetPosts {
    postsConnection {
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
          time
        }
      }
    }
  }
`;

const Cont = styled.div`
background-color: #ffd800;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;

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

const SidebarWrapper = styled.div`
  position: relative;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 20px; /* Adjust the top position as needed */
`;


export default function Blog() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
      setPosts(data.postsConnection.edges || []);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="container bg-black fontsm mx-auto px-10 mb-8">
        <FeaturedPosts />
        <Container>
          <MainContent>
            <div className='edch'>
            <h2 className="headline edch1 -mb-5 mt-5 headline-2 section-title">
              <span className="span">Editor's Choice</span>
            </h2>
            <p className="section-text edch2">Don't miss the latest trends</p>
            </div>
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </MainContent>
          <SidebarWrapper>
            <Sidebar>
              <PostWidget />

              <Categories />
              </Sidebar>
          </SidebarWrapper>
        </Container>
      </div>
    </>
  );
}
