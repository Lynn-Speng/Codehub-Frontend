import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@material-ui/lab/Pagination';


import CourseCard from '../components/CoureseCard';
import API_CONFIG from '../components/api/API_CONFIG';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  searchBox: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(6),
    borderBottom: "solid 2px black"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  resultBox: {
    marginBottom: theme.spacing(6)
  },
  paginationBox: {
    
  }
}));
export default function Courses() {
  const classes = useStyles();
  const [courseList, setCourseList] = useState([]);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const pageSize = 8;

  useEffect(() => {
    fetch(API_CONFIG.courses)
    .then(res => res.json())
    .then(res => {
      setCourseList(res);
    })
  }, [])

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8}>
        <Grid item container className={classes.searchBox} xs={12} justify="center">
          <Paper component="form" className={classes.root}>
              <InputBase
                required
                className={classes.input}
                placeholder="Search Courses"
                inputProps={{ 'aria-label': 'search courses' }}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
          </Paper>
        </Grid>

        <Grid item container spacing={3} className={classes.resultBox}>
          { courseList.slice((page -1) * pageSize, page * pageSize).map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard
              courseId={course.id} 
              courseCover={course.cover}
              courseTitle={course.title}
              courseDescription={course.description}
            />
          </Grid>
          ))}
        </Grid>

        <Grid item container className={classes.paginationBox} xs={12} justify="center">
          <Pagination count={Math.ceil(courseList.length / pageSize)} page={page} onChange={(event, value) => {setPage(value)}} color="primary" />
        </Grid>
      </Grid>

      <Grid item xs={false} sm={2} />
    </Grid>
  );
}
