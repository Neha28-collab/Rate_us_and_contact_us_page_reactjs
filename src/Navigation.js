// Navigation.js (or any component with navigation)
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/customer-reviews">Customer Reviews</Link>
        </li>
        {/* Other navigation items */}
      </ul>
    </nav>
  );
}

export default Navigation;
