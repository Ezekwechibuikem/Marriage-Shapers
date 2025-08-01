
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './Testimonial.css';

const Testimonial = ({ 
  quote, 
  name, 
  role, 
  image,
  rating = 5
}) => {
  return (
    <Card className="testimonial-card">
      <Card.Body>
        <div className="testimonial-icon">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <Card.Text className="testimonial-quote">
          {quote}
        </Card.Text>
        <div className="testimonial-rating">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`star ${i < rating ? 'filled' : ''}`}
            >
              \u2605
            </span>
          ))}
        </div>
        <div className="testimonial-author">
          {image && (
            <div className="testimonial-image">
              <img src={image} alt={name} />
            </div>
          )}
          <div className="testimonial-info">
            <h5 className="testimonial-name">{name}</h5>
            {role && <p className="testimonial-role">{role}</p>}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;
