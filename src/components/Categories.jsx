import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (!loading && !error && data) {
      setCategories(data.categories);
    }
  }, [loading, error, data]);

  return (
    <div className="cards aside-cards">
      <h3 className="headline headline-2 aside-title">
        <span className="span">Categories</span>
      </h3>
      <ul className="comment-list">
        <li>
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.slug}`}>
              <span
                className={`cursor-pointer block ${
                  index === categories.length - 1 ? 'border-b-0' : 'border-b'
                } pb-3 mb-3 border-gray-700 cattext hover:text-blue-600 hover:cursor-pointer`}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Categories;
