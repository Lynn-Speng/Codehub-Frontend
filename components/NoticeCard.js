import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
  },
  eventHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  eventIcon: {
    marginRight: theme.spacing(2),
  },
  eventBody: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2, 2, 4, 6),
    borderLeft: "solid 5px blue",    
  }
}));

const NoticeCard = ({noticeTitle, noticeDetail, noticeDate}) => {
    const classes = useStyles();
    return (
      <div>
        <Box className={classes.eventHeader}>
          <CheckCircleIcon color="primary" fontSize="large" className={classes.eventIcon}/>
          <Typography variant="h6" component="p">
            {noticeDate}
          </Typography>
        </Box>

        <Box className={classes.eventBody}>
          <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h2">
                {noticeTitle}
                </Typography>
                <Typography variant="body2" component="p">
                {noticeDetail}
                </Typography>
            </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          </Card>
        </Box>
      </div>
    );
}
 
export default NoticeCard;