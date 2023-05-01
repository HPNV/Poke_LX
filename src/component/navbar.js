import React from 'react';

function Navbar() {
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: 'green', color: 'white' }}>
        <h1 style={{ margin: 0 }}>Pokemon List</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none',fontWeight: 'bold' }}>Home</a>
          <a href="/search" style={{ color: 'white', marginRight: '20px', textDecoration: 'none',fontWeight: 'bold' }}>Search</a>
          <a href="/favorites" style={{ color: 'white', marginRight: '20px', textDecoration: 'none',fontWeight: 'bold' }}>Favorite</a>
        </div>
      </nav>
    );
}

export default Navbar;