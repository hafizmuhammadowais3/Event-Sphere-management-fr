import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    if (email && password) {
      // Success logic
      navigate('/dashboard');  // Redirect to the dashboard or appropriate page
    } else {
      setError('Please enter valid email and password.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" align="center">Login</Typography>
        {error && <Typography color="error" align="center">{error}</Typography>}
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
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            margin="normal" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <Button type="submit" variant="contained" fullWidth style={{ marginTop: 16 }}>Login</Button>
          <Grid container justifyContent="space-between" style={{ marginTop: 8 }}>
            <Grid item>
              <Link href="/register">Don't have an account? Register</Link>
            </Grid>
            <Grid item>
              <Link href="/forgot-password">Forgot Password?</Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
