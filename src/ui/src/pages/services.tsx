import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ServicesPage: React.FC = () => {
    return (
        <Box sx={{ 
            fontFamily: '"Poppins", sans-serif', 
            minHeight: '100vh', 
            textAlign: 'center', 
            padding: '5% 0',
            backgroundColor: '#f4f4f4' // Adding a subtle background color
        }}>
            <Paper elevation={3} sx={{ margin: 'auto', maxWidth: 800, padding: '2rem', backgroundColor: '#fff' }}>
                <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 3 }}>
                    Our Services
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    At LuciferAeo, we offer a range of services designed to push the boundaries of AI and cognitive science.
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <ServiceItem title="Advanced AI Research" description="Leading-edge research into artificial intelligence, focusing on innovative algorithms and machine learning techniques." />
                    <ServiceItem title="Cognitive Behavioral Analysis" description="Utilizing AI to understand and predict human behavior and cognitive processes." />
                    <ServiceItem title="Data Analytics Solutions" description="Offering advanced data analysis services using AI to provide deep insights into various datasets." />
                </Box>
            </Paper>
        </Box>
    );
};

const ServiceItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
        </Box>
    );
};

export default ServicesPage;
