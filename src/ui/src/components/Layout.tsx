import React from 'react';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Footer from './Footer';
import StockPrices from './StockPrices';
import LatestAINews from './LatestAINews';
import { Box, Container, Typography, Paper, Button } from '@mui/material';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif!important', transition: 'all 0.3s ease' }}>
            <Box component="header" sx={{ textAlign: 'center', p: 2, fontSize: '2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: '2px' }}>
           
            </Box>
            
            <Container maxWidth="lg" component="main" sx={{ my: 3 }}>
                {/* Main Content Area */}
                <Box sx={{ mb: 3 }}>
                    {children}
                </Box>

           
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;
