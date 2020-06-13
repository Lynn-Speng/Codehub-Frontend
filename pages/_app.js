import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../src/theme';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../src/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '85vh',
    marginBottom: theme.spacing(4)
  }
}));

export default function App({ Component, pageProps }) {
  const classes = useStyles();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className={classes.root}>
          <Component {...pageProps} />  
        </div>
        <Footer />          
      </ThemeProvider>
    </Fragment>

  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};