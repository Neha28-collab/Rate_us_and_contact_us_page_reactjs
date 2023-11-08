import React from 'react';
import { useState, useEffect } from 'react';
import './CustomerReview.css';
import { FaStar } from 'react-icons/fa';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

function CustomerReview() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleButtonClick = () => {
    const message = document.querySelector('textarea').value;
    setMessages([...messages, { name, message, rating: currentValue }]);
    setName('');
    document.querySelector('textarea').value = '';
    setCurrentValue(0);
  };

  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div style={styles.container}>
        <br />
        <br />
        <br />
        <h2>Rate Us</h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={hoverValue || currentValue > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: 'pointer',
                }}
              />
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={styles.nameInput}
        />
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
        />
        <button style={styles.button} onClick={handleButtonClick}>
          Submit
        </button><br />
        <div className="messages-container">
          <div style={styles.messages}>
            {messages.map((item, index) => (
              <div key={index} style={{ textAlign: 'left', marginBottom: 10 }}>
                <strong>{item.name}:</strong> Rating: {getStars(item.rating)}{' '}
                {item.rating} out of 5
                <br />
                {item.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const getStars = rating => {
  const starSymbols = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  return starSymbols;
};

const styles = {
  container: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    marginTop: '3px',
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
    background: 'green',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  messages: {
    color: 'white',
    width: 300,
    marginTop: 20,
  },
  nameInput: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    width: 300,
  },
};

export default CustomerReview;
