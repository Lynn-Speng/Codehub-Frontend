import NoticeCard from '../components/NoticeCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4)
  }
}));


export default function Notices() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={false} sm={3} />
      <Grid item container justify="center" xs={12} sm={6}>
        <NoticeCard 
          noticeTitle="Welcome" 
          noticeDetail="Tempor adipisicing occaecat nisi proident eu anim reprehenderit in Lorem eiusmod id ea aliquip Lorem. Qui dolore laborum in fugiat ea commodo. Sint eu laboris dolor ipsum commodo incididunt consequat ut occaecat consectetur proident amet elit." 
          noticeDate="2020-06-12 20:03:01"/>

        <NoticeCard 
          noticeTitle="Goodbye"
          noticeDetail="Enim laborum non non dolor qui nulla exercitation. Veniam aute occaecat labore eiusmod qui irure cupidatat in tempor anim laborum nisi cillum velit. Excepteur sint est elit minim culpa cillum sint eiusmod incididunt fugiat consequat. Eiusmod aute eiusmod nulla aliquip id aute elit enim tempor cillum. Nisi enim non cupidatat nisi. Cupidatat cillum eu ipsum officia nostrud dolore laboris proident dolor."
          noticeDate="2020-06-18 20:04:12" />
        
      </Grid>
      <Grid item xs={false} sm={3} />
    </Grid>
  );
}
