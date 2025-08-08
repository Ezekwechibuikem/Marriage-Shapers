
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  //faClock, 
  //faMapMarkerAlt,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import EventCard from '../../common/EventCard';

import './Events.css';

// Placeholder images (in a real project, these would be imported from assets)
const heroImage = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const eventImage1 = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const eventImage2 = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const eventImage3 = 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const eventImage4 = 'https://images.unsplash.com/photo-1469571486292-b53601010376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const eventImage5 = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

const Events = () => {
  // Events data
  const allEvents = [
    {
      id: 'retreat',
      title: 'Marriage Enrichment Weekend Retreat',
      description: 'A two-day retreat focused on deepening your connection and strengthening your marriage through biblical principles and practical exercises.',
      date: 'August 15-16, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Grace Christian Center',
      image: eventImage1,
      registrationLink: '/contact',
      isFeatured: true,
      category: 'Couples',
      isVirtual: false
    },
    {
      id: 'workshop',
      title: 'Communication Workshop for Couples',
      description: 'Learn effective communication techniques based on biblical principles to improve understanding and resolve conflicts in your relationship.',
      date: 'July 25, 2025',
      time: '6:30 PM - 9:00 PM',
      location: 'Online via Zoom',
      image: eventImage2,
      registrationLink: '/contact',
      isFeatured: false,
      category: 'Couples',
      isVirtual: true
    },
    {
      id: 'singles',
      title: 'Singles Conference: Preparing for Marriage',
      description: 'A full-day conference for singles who desire to prepare for a Christ-centered marriage. Topics include biblical principles for relationships, finding the right partner, and personal growth.',
      date: 'August 5, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Faith Community Church',
      image: eventImage3,
      registrationLink: '/contact',
      isFeatured: false,
      category: 'Singles',
      isVirtual: false
    },
    {
      id: 'webinar',
      title: 'Financial Harmony in Marriage Webinar',
      description: 'Join us for this interactive webinar on managing finances as a couple using biblical principles. Learn practical tools for budgeting, saving, and avoiding financial conflicts.',
      date: 'August 12, 2025',
      time: '7:00 PM - 8:30 PM',
      location: 'Online via Zoom',
      image: eventImage4,
      registrationLink: '/contact',
      isFeatured: false,
      category: 'Couples',
      isVirtual: true
    },
    {
      id: 'premarital',
      title: 'Premarital Counseling Group Session',
      description: 'A six-week program for engaged couples to build a strong foundation for their marriage based on biblical principles and practical relationship skills.',
      date: 'Starting September 7, 2025',
      time: '7:00 PM - 8:30 PM (Tuesdays)',
      location: 'Marriage Shapers Office',
      image: eventImage5,
      registrationLink: '/contact',
      isFeatured: false,
      category: 'Engaged',
      isVirtual: false
    }
  ];
  
  // Filter options
  const categories = ['All', 'Couples', 'Singles', 'Engaged'];
  const formats = ['All Formats', 'In-Person', 'Virtual'];
  
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFormat, setActiveFormat] = useState('All Formats');
  
  // Filter events based on category and format
  const filteredEvents = allEvents.filter(event => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesFormat = activeFormat === 'All Formats' || 
                         (activeFormat === 'Virtual' && event.isVirtual) ||
                         (activeFormat === 'In-Person' && !event.isVirtual);
    return matchesCategory && matchesFormat;
  });
  
  // Featured events
  const featuredEvents = allEvents.filter(event => event.isFeatured);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  // Handle format change
  const handleFormatChange = (e) => {
    setActiveFormat(e.target.value);
  };
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Upcoming Events"
        subtitle="Join us for workshops, retreats, and other events designed to strengthen your relationship."
        image={heroImage}
        height="60vh"
      />
      
      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="section featured-events-section">
          <Container>
            <SectionTitle
              title="Featured Events"
              subtitle="Don't miss these special opportunities to grow your relationship."
            />
            
            <Row>
              {featuredEvents.map(event => (
                <Col lg={12} key={event.id}>
                  <EventCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    image={event.image}
                    registrationLink={event.registrationLink}
                    isVirtual={event.isVirtual}
                    isFeatured={event.isFeatured}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
      
      {/* All Events */}
      <section className="section all-events-section bg-light">
        <Container>
          <SectionTitle
            title="All Events"
            subtitle="Browse our upcoming events and register to attend."
          />
          
          {/* Filters */}
          <div className="events-filters mb-4">
            <Row>
              <Col lg={6} className="mb-3 mb-lg-0">
                <div className="category-filters">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={activeCategory === category ? 'primary' : 'outline-primary'}
                      className="category-filter-btn me-2 mb-2"
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </Col>
              <Col lg={6}>
                <div className="format-filter">
                  <Form.Group className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faFilter} className="me-2 text-primary" />
                    <Form.Label className="mb-0 me-3">Format:</Form.Label>
                    <Form.Select 
                      value={activeFormat}
                      onChange={handleFormatChange}
                      className="format-select"
                    >
                      {formats.map((format, index) => (
                        <option key={index} value={format}>{format}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </div>
          
          {/* Events List */}
          {filteredEvents.length > 0 ? (
            <Row>
              {filteredEvents.map(event => (
                <Col lg={6} key={event.id}>
                  <EventCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    image={event.image}
                    registrationLink={event.registrationLink}
                    isVirtual={event.isVirtual}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="no-events-found text-center py-5">
              <h3>No Events Found</h3>
              <p>Try adjusting your filter criteria or check back later for new events.</p>
            </div>
          )}
        </Container>
      </section>
      
      {/* Calendar Section */}
      <section className="section calendar-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="calendar-content">
                <div className="calendar-icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <h2>Stay Updated with Our Events</h2>
                <p>Subscribe to our calendar to receive notifications about upcoming events and never miss an opportunity to strengthen your relationship.</p>
                <div className="calendar-buttons">
                  <Button variant="primary" className="me-3 mb-3">
                    Add to Google Calendar
                  </Button>
                  <Button variant="outline-primary" className="mb-3">
                    Download iCal File
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Host an Event */}
      <section className="section host-event-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="host-event-content">
                <h2>Interested in Hosting an Event?</h2>
                <p>If you'd like to bring Marriage Shapers to your church or organization, we'd love to partner with you to create a customized event for your community.</p>
                <Button href="/contact" variant="primary" size="lg">
                  Contact Us to Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
