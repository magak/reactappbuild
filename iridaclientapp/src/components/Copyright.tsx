import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

export default function Copyright() {
  return (
    <Container>
      <Typography variant="body2" color="textSecondary"  align="center">
        {'Copyright © '}        
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
}