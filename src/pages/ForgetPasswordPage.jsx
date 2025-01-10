import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send reset link here
    if (email) {
      setMessage('A reset link has been sent to your email.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" align="center">Forgot Password</Typography>
        {message && <Typography color="success" align="center">{message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" 
            type="email" 
            fullWidth 
            margin="normal" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Button type="submit" variant="contained" fullWidth style={{ marginTop: 16 }}>Send Reset Link</Button>
          <Grid container justifyContent="center" style={{ marginTop: 8 }}>
            <Grid item>
              <Link href="/login">Back to Login</Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordPage;
