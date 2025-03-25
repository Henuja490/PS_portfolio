import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

// Import images correctly
import authorImage from './assets/Henuja.png';
import Week1 from './assets/week1.jpg';
import Week2 from './assets/week2.jpg';
import Week3 from './assets/week3.png';
import Week4 from './assets/week4.jpg';


type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Introduction to professional skills',
    author: 'Henuja Katuwapitiya',
    date: 'Week 1',
    image: Week1,
    authorImage: authorImage,
  },
  {
    id: 2,
    title: 'CV Writing and Writing Cover Letters',
    author: 'Henuja Katuwapitiya',
    date: 'Week 2',
    image: Week2,
    authorImage: authorImage, 
  },
  {
    id: 3,
    title: 'Portfolio Management',
    author: 'Henuja Katuwapitiya',
    date: 'Week 3',
    image: Week3,
    authorImage: authorImage,
  },
  {
    id: 4,
    title: 'Email Etiquettes and Mettings',
    author: 'Henuja Katuwapitiya',
    date: 'Week 4',
    image: Week4,
    authorImage: authorImage,
  },
  {
    id: 5,
    title: 'Email Etiquette',
    author: 'Henuja Katuwapitiya',
    date: 'Week 4',
    image: 'assets/img/blog/blog-4.jpg',
    authorImage: authorImage,
  },
];

const Assignment: React.FC = () => {
  return (
    <div className="container">
      <div className="row gy-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6">
            <div className="card">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/assignment/${post.id}`}>{post.title}</Link>
                </h5>

                <div className="d-flex align-items-center">
                  <img
                    src={post.authorImage} // Use the author image passed from the blog post
                    alt={post.author}
                    className="img-fluid post-author-img flex-shrink-0"
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  />
                  <div className="post-meta ms-2">
                    <p className="post-author">{post.author}</p>
                    <p className="post-date">
                      <time dateTime={post.date}>{post.date}</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;
