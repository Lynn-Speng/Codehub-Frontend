import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="h6">Codehub by Xidian University</Typography>
        <Typography variant="body1">Address: Xi'an, ShaanXi Province</Typography>
        <Typography variant="body1">Post Code: 710126</Typography>
        {'Copyright © '}
        <Link color="inherit" href="https://www.xidian.edu.cn/" target="_blank">
        Xidian University
        </Link>
        {' '}
        { new Date().getFullYear() }
        {'.'}
      </Container>
    </div>
  );
}

export default Footer;