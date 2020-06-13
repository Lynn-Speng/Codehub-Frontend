import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
}));

const CourseCard = ({
  courseId,
  courseTitle,
  courseDescription,
  courseCover,
}) => {

  const classes = useStyles();

  return (
    <Link href={{pathname: '/course', query:{id: courseId}}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={courseCover}
            title={courseTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {courseTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {courseDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CourseCard;
