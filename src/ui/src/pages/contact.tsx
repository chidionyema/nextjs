import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { toast } from 'react-toastify';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(form.email)) {
      toast.error('Invalid email address');
      return;
    }

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      toast.success("Email sent successfully");
      setForm({ name: '', email: '', message: '' }); // Reset form fields
    } else {
      toast.error("Error sending email");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ fontFamily: '"Poppins", sans-serif', padding: '2rem', textAlign: 'center' }}>
      <Paper elevation={3} sx={{ maxWidth: 800, padding: '2rem', textAlign: 'center', backgroundColor: '#fff', margin: 'auto' }}>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold',  mb: 3 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Have questions or want to collaborate? Get in touch with us.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField 
            name="name" 
            label="Your Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            value={form.name} 
          />
          <TextField 
            name="email" 
            label="Your Email" 
            type="email" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            value={form.email} 
          />
          <TextField 
            name="message" 
            label="Message" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            multiline 
            rows={4} 
            onChange={handleChange} 
            value={form.message} 
          />

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, backgroundColor: '#0056B3' }}>
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactPage;
