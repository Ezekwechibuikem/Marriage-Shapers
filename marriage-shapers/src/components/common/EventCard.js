
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './EventCard.css';

const EventCard = ({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  image, 
  registrationLink,
  isVirtual = false,
  isFeatured = false
}) => {
  return (
    <Card className={`event-card ${isFeatured ? 'featured-event' : ''}`}>
      <div className="event-image-container">
        <Card.Img variant="top" src={image} className="event-image" />
        {isVirtual && (
          <Badge bg="info" className="event-badge">
            Virtual Event
          </Badge>
        )}
        {isFeatured && (
          <Badge bg="warning" className="event-badge featured-badge">
            Featured Event
          </Badge>
        )}
      </div>
      <Card.Body>
        <Card.Title className="event-title">{title}</Card.Title>
        <div className="event-details">
          <div className="event-detail">
            <FontAwesomeIcon icon={faCalendarAlt} className="event-icon" />
            <span>{date}</span>
          </div>
          <div className="event-detail">
            <FontAwesomeIcon icon={faClock} className="event-icon" />
            <span>{time}</span>
          </div>
          <div className="event-detail">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="event-icon" />
            <span>{location}</span>
          </div>
        </div>
        <Card.Text className="event-description">{description}</Card.Text>
        {registrationLink && (
          <Button 
            href={registrationLink} 
            variant="primary" 
            className="event-register-btn"
          >
            Register Now
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default EventCard;
