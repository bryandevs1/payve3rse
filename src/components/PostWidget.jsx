import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import moment from 'moment';
import { Link } from 'react-router-dom';

const GET_RECENT_POSTS = gql`
  query GetRecentPosts {
    posts(orderBy: createdAt_ASC, last: 3) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;

const GET_SIMILAR_POSTS = gql`
  query GetSimilarPosts($slug: String!, $categories: [String!]) {
    posts(
      where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
`;

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  const { loading: recentPostsLoading, error: recentPostsError, data: recentPostsData } = useQuery(GET_RECENT_POSTS);
  const { loading: similarPostsLoading, error: similarPostsError, data: similarPostsData } = useQuery(GET_SIMILAR_POSTS, {
    variables: { slug, categories },
    skip: !slug,
  });

  useEffect(() => {
    if (slug && !similarPostsLoading && !similarPostsError && similarPostsData) {
      setRelatedPosts(similarPostsData.posts);
    } else if (!recentPostsLoading && !recentPostsError && recentPostsData) {
      setRelatedPosts(recentPostsData.posts);
    }
  }, [slug, similarPostsLoading, similarPostsError, similarPostsData, recentPostsLoading, recentPostsError, recentPostsData]);

  return (
    <div className="cards aside-cards mt-32 mb-8">
      <h3 className="headline headline-2 aside-title">
        <span className="span">{slug ? 'Related Posts' : 'Recent Posts'}</span>
      </h3>

      <ul className="popular-list">
        {relatedPosts.map((post) => (
          <li key={post.slug}>
            <div className="popular-cards">
              <figure className="cards-banner img-holder" style={{ '--width': 64, '--height': 64 }}>
                <img
                  src={post.featuredImage.url}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt={post.title}
                  className="img-cover"
                />
              </figure>

              <div className="cards-content">
                <h4 className="headline headline-4 cards-title">
                  <Link to={`/post/${post.slug}`} className="link hover-2">
                    {post.title}
                  </Link>
                </h4>

                <div className="warpper">
                  <p className="cards-subtitle">{moment(post.createdAt).format('MMM DD, YYYY')}</p>

                  <time className="publish-date" dateTime={post.date}>
                    {moment(post.createdAt).format('h:mm:ss')}
                  </time>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostWidget;
