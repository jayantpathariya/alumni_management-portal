import React from 'react';
import './adminCard.scss';

const AdminCard = ({ title, count, active }) => {
  console.log('count', count);

  return (
    <div className={`admin-card ${active ? 'active' : ''}`}>
      <div className="admin-card-header">
        <h3 className="header-title">{title}</h3>
        <div className="header-num">{count}</div>
      </div>
    </div>
  );
};

export default AdminCard;
