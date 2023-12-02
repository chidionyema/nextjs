import React from 'react';
import Link from 'next/link';
import ModelTrainingDemo from '../components/ModelTrainingDemo';
import StepsSection from '../components/StepsSection';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InsightsIcon from '@mui/icons-material/Insights';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SecurityIcon from '@mui/icons-material/Security';
import {Facebook, Twitter, LinkedIn } from '@mui/icons-material';


const HomePage: React.FC = () => {
    return (
        <Box sx={{  fontFamily: '"Poppins", sans-serif', 
        // background: 'linear-gradient(135deg, #007BFF 0%, #004080 100%)', // New blue gradient
        minHeight: '100vh', 
        textAlign: 'center', 
        padding: '5% 0'  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 60px' }}>
                <Typography variant="h2" gutterBottom>Explore the Depths of AI and Cognitive Science</Typography>
                <Typography variant="body1" gutterBottom>
                    Luciferaeo is at the forefront of AI and cognitive research, offering insights into the complexities of the human mind and behavior.
                </Typography>
                <Typography variant="body1" gutterBottom>
                Embark on a journey through the psyche with cutting-edge AI technology. Experience transformative insights into the depths of human cognition.
                </Typography>

                <Box sx={{ display: 'flex', gap: '20px', mt: 4 }}>
                    <Link href="/signup" passHref>
                        <Button variant="contained">Join Us</Button>
                    </Link>
                    <Link href="/discover" passHref>
                        <Button variant="contained">Discover More</Button>
                    </Link>
                    <Link href="/insights" passHref>
                        <Button variant="contained">View Insights</Button>
                    </Link>
                </Box>

                <Typography variant="h4" gutterBottom mt={8}>Why Luciferaeo Stands Apart</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', p: 0 }}>
                    <Box>
                        <InsightsIcon fontSize="large" color="action" />
                        Pioneering AI-driven cognitive research.
                    </Box>
                    <Box>
                        <PsychologyIcon fontSize="large" color="action" />
                        Deeper understanding of mental processes.
                    </Box>
                    <Box>
                        <DataUsageIcon fontSize="large" color="action" />
                        Empowering data analysis for accurate insights.
                    </Box>
                    <Box>
                        <SecurityIcon fontSize="large" color="action" />
                        Commitment to ethical standards in AI development.
                    </Box>
                </Box>
                <Typography variant="h4" gutterBottom mt={8}>Follow us on Social Media</Typography>

                <Box sx={{ display: 'flex', gap: '20px', mt: 4 }}>
                 {/* Social Media Links */}
               
                 <Link href="https://twitter.com/LuciferAeo" passHref>
                    <Button variant="contained"><Facebook /></Button>
                </Link>
                <Link href="https://twitter.com/LuciferAeo" passHref>
                    <Button variant="contained"><Twitter /></Button>
                </Link>
                <Link href="https://twitter.com/LuciferAeo" passHref>
                    <Button variant="contained"><LinkedIn /></Button>
                </Link>
                </Box>
              
           
            </Box>
        </Box>
    );
};

export default HomePage;
