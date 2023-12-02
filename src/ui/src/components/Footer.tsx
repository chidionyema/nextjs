// components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
const Footer = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#004080', 
      color: 'white', 
      padding: '20px', 
      textAlign: 'center',
      width: '100%' // Ensure full width
  }}>
    <footer>
      {/* Add your footer content here */}
      <p>&copy; 2023 LuciferAeo</p>
      <Link href="/services">Features</Link> | <Link href="/services">Pricing</Link> | <Link href="/about">About Us</Link>
    </footer>
    </Box>
  );
};

export default Footer;


