import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '6rem' }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Box mt={2} p={2} style={{ border: '1px solid #ccc', borderRadius: '8px' }}>
        <TextField label="Your Name" variant="outlined" fullWidth style={{ marginBottom: '1rem' }} />
        <TextField label="Your Email" variant="outlined" fullWidth style={{ marginBottom: '1rem' }} />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} style={{ marginBottom: '1rem' }} />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>
    </Container>
  );
};

export default Contact;

