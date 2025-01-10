import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    if (name && email && password && role) {
      // Success logic
      navigate('/login');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" align="center">Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Name" 
            type="text" 
            fullWidth 
            margin="normal" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
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
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="exhibitor">Exhibitor</MenuItem>
              <MenuItem value="attendee">Attendee</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" fullWidth style={{ marginTop: 16 }}>Register</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
