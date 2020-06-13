import { withRouter } from "next/router";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from "@material-ui/core";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useEffect, useState } from "react";

import API_CONFIG from '../components/api/API_CONFIG';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    width: "100%",
    padding: theme.spacing(0, 10)
  },
  headerArea: {
    padding: theme.spacing(0, 10),
    marginBottom: theme.spacing(4)
  },
  headerCard: {
    width: "100%",
    height: "80px",
    padding: theme.spacing(2, 4)
  },
  mainArea: {
    padding: theme.spacing(0, 10)
  },
  bodyArea: {
    // marginRight: theme.spacing(4)
  },
  bodyCard: {
    padding: theme.spacing(2, 4)

  },
  siderArea: {

  },
  siderCard: {
    padding: theme.spacing(2, 4)

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  divider: {
    width: "100%",
    height: "3px",
    color: "#124332",
    margin: theme.spacing(2, 0)
  }
}))

const Course = ({ router }) => {
  const classes = useStyles();
  const [course, setCourse] = useState({id: 0, title: "", description: "", chapters: [{title: "", description: "", lectures: [{title: "", url: ""}]}]});
  const [courseBody, setCourseBody] = useState(null);

  useEffect(() => {
    fetch(API_CONFIG.course)
    .then(res => res.json())
    .then(res => {
      setCourse(res);
    })
  }, []);


  
  return (
    // <p>{router.query.courseId}</p>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={false} sm={false} md={1} />
      <Grid item container xs={12} sm={12} md={10} spacing={3} className={classes.mainArea}>
        <Grid item container xs={12} justify="center" className={classes.headerArea}>
          <Paper elevation={3} className={classes.headerCard}>
            <Typography variant="h5">
              { course.title }
            </Typography>
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={12} md={8} className={classes.bodyArea}>
          <Paper elevation={3} className={classes.bodyCard}>
            <Typography variant="body2">
              Non minim amet eu Lorem et quis ea. Qui reprehenderit qui nostrud aliquip. Proident dolor id labore ut veniam proident sit commodo minim do exercitation est occaecat deserunt. Nisi culpa tempor elit eu fugiat exercitation eiusmod velit. Irure ad irure ut reprehenderit aliquip culpa. 
            </Typography>
            <Divider className={classes.divider} />
            { (course.chapters).map((chapter, idx) => (
                <div key={idx}>
                <Typography variant="h6">
                  {chapter.title}  
                </Typography>
                <List>
                  { (chapter.lectures).map((lecture, jdx) => (
                    // <div >
                      <ListItem button key={jdx}>
                        <Link href={lecture.url}>
                          <ListItemText primary={lecture.title} />
                        </Link>
                      </ListItem>
                    // </div>
                  ))}
                </List>
              </div>
        ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.siderArea}>
          <Paper elevation={3} className={classes.siderCard}>
            <Typography variant="body2">
              Consectetur sit do eu exercitation adipisicing magna ut nostrud irure sit non voluptate incididunt. Esse sit adipisicing et reprehenderit anim tempor voluptate nisi. Aute fugiat eu officia sint occaecat cillum dolor sint culpa amet et et dolore sunt. Magna irure ex id minim. Amet aute laborum proident laborum ad voluptate. Velit Lorem enim cupidatat nulla dolor quis dolore anim qui consectetur est ex reprehenderit ex. Proident ullamco consequat cillum amet occaecat laborum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={false} md={1} />
    </Grid>
  );
};

export default withRouter(Course);
