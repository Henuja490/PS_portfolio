import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './Assignment.css'; // Add a custom CSS file for additional styling

// Import images correctly
import authorImage from './assets/Henuja.png';
import Week1 from './assets/week1.jpg';
import Week2 from './assets/week2.jpg';
import Week3 from './assets/week3.png';
import Week4 from './assets/week4.jpg';
import Week5 from './assets/10.webp'; // New blog image
import Week6 from './assets/11.webp'; 
import Week7 from './assets/9.webp'; 
import Week8 from './assets/week8.jpg'; 
import Week9 from './assets/holiday_meal_142589503.webp'; 
import Week10 from './assets/1709901302504 (1).png'; 
import Week11 from './assets/Week11.jpeg'; 
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
    title: 'Introduction to Professional Skills',
    author: 'Henuja Katuwapitiya',
    date: 'Week 1',
    image: Week1,
    authorImage: authorImage,
  },{
    id: 6,
    title: 'Food Festival',
    author: 'Henuja Katuwapitiya',
    date: 'Week 2',
    image: Week6, // New blog image
    authorImage: authorImage,
  },
  {
    id: 2,
    title: 'CV Writing and Writing Cover Letters',
    author: 'Henuja Katuwapitiya',
    date: 'Week 3',
    image: Week2,
    authorImage: authorImage, 
  },
  {
    id: 3,
    title: 'Portfolio Management',
    author: 'Henuja Katuwapitiya',
    date: 'Week 4',
    image: Week3,
    authorImage: authorImage,
  }
    ,{
      id: 7,
      title: 'Interview Skills',
      author: 'Henuja Katuwapitiya',
      date: 'Week 5',
      image: Week7, // New blog image
      authorImage: authorImage,
    },{
      id: 4,
      title: 'Email Etiquettes and Meetings',
      author: 'Henuja Katuwapitiya',
      date: 'Week 6',
      image: Week4,
      authorImage: authorImage,
    }
    ,
  
  {
    id: 5,
    title: 'Telephone Etiquettes',
    author: 'Henuja Katuwapitiya',
    date: 'Week 7',
    image: Week5, // New blog image
    authorImage: authorImage,
  },{
      id: 8,
      title: 'Emotional Intelligence',
      author: 'Henuja Katuwapitiya',
      date: 'Week 8',
      image: Week8, // New blog image
      authorImage: authorImage,
    },{
      id: 9,
      title: 'Dinning Etiquettes',
      author: 'Henuja Katuwapitiya',
      date: 'Week 9',
      image: Week9, // New blog image
      authorImage: authorImage,
    },{
      id: 10,
      title: 'Cultivating Effective Research Skills',
      author: 'Henuja Katuwapitiya',
      date: 'Week 10',
      image: Week10, // New blog image
      authorImage: authorImage,
    },{
      id: 11,
      title: 'Effective Negotiation Strategies',
      author: 'Henuja Katuwapitiya',
      date: 'Week 11',
      image: Week11, // New blog image
      authorImage: authorImage,
    }
  
];

const Assignment: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-primary mb-4">Assignments</h1>
      <p className="text-center text-muted fs-5">Explore my weekly assignments and learnings.</p>
      <div className="row gy-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6">
            <div className="card assignment-card shadow-sm border-0">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <Link to={`/assignment/${post.id}`} className="text-decoration-none">
                    {post.title}
                  </Link>
                </h5>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="img-fluid post-author-img flex-shrink-0"
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  />
                  <div className="post-meta ms-2">
                    <p className="post-author mb-0">{post.author}</p>
                    <p className="post-date mb-0">
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
