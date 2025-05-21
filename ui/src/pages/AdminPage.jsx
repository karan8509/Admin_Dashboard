import React, { useState } from 'react';
import '../StyleFile/AdminPage.css';

const tabs = [
    { id: 'creates', label: 'Create' },
    { id: 'products', label: 'Products' },
    { id: 'analytics', label: 'Analytics' },
];

const AdminPage = () => {
    const [active, setActive] = useState('creates');

    return (
        <div className="admin-container">
            <h2>Dashboard</h2>
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${active === tab.id ? 'active' : ''}`}
                        onClick={() => setActive(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>



        </div>
    );
};

export default AdminPage;
