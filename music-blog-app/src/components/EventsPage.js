import React, { useState } from 'react';
import './EventsPage.css';
import Header from './Header';
import axios from 'axios';

const EventsPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        eventDate: '',
        venue: '',
        city: '',
        state: '',
        country: '',
        website: '',
        eventDescription: '',
        budget: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/blog/events/', formData)
            .then(response => {
                alert('Event booked successfully');
            })
            .catch(error => {
                console.error('Error booking event:', error.response.data);
                alert('Error booking event: ' + JSON.stringify(error.response.data));
            });
    };

    return (
        <>
            <Header />
            <div className="eventsPageContainer">
                <div className="eventheroSection">
                    <h1 className="eventheroTitle">BOOKINGS</h1>
                </div>
                <form onSubmit={handleSubmit} className="eventsForm">
                    {[
                        { label: 'Full Name', name: 'fullName', type: 'text' },
                        { label: 'Email', name: 'email', type: 'email' },
                        { label: 'Phone', name: 'phone', type: 'text' },
                        { label: 'Event Date', name: 'eventDate', type: 'date' },
                        { label: 'Venue/Church/Organization', name: 'venue', type: 'text' },
                        { label: 'City/Town', name: 'city', type: 'text' },
                        { label: 'State/Province', name: 'state', type: 'text' },
                        { label: 'Country', name: 'country', type: 'text' },
                        { label: 'Website', name: 'website', type: 'url' },
                        { label: 'Event Description', name: 'eventDescription', type: 'textarea' },
                        { label: 'Budget', name: 'budget', type: 'text' }
                    ].map((field, index) => (
                        <div key={index} className="formGroup">
                            <label htmlFor={field.name}>{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <div className="formGroup">
                        <button type="submit" className="submitButton">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EventsPage;
