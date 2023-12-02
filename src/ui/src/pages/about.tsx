import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AboutPage: React.FC = () => {
    return (
        <Box sx={{ 
            fontFamily: '"Poppins", sans-serif', 
            minHeight: '100vh', 
            textAlign: 'center', 
            padding: '5% 0',
            backgroundColor: '#f4f4f4' // Adding a subtle background color
        }}>
            <Paper elevation={3} sx={{ maxWidth: 800, padding: '2rem', textAlign: 'center', backgroundColor: '#fff', margin: 'auto' }}>
                <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold',  mb: 3 }}>
                    About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Founded in 2019, LuciferAeo is dedicated to advancing the fields of AI and cognitive sciences.
                </Typography>

                <Typography variant="body1">
                    Our mission is to create innovative solutions and provide insights through cutting-edge research in artificial intelligence and cognitive behavior analysis. We believe in the power of technology to transform industries and improve lives.
                </Typography>

                {/* More detailed information about the company */}
            </Paper>
        </Box>
    );
};

export default AboutPage;
