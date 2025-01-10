import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to reset the password using the token
    if (password) {
      setMessage('Your password has been successfully reset.');
      // Redirect to login page after success
      navigate('/login');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" align="center">Reset Password</Typography>
        {message && <Typography color="success" align="center">{message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField 
            label="New Password" 
            type="password" 
            fullWidth 
            margin="normal" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <Button type="submit" variant="contained" fullWidth style={{ marginTop: 16 }}>Reset Password</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ResetPasswordPage;
