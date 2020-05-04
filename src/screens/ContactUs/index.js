import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Rating from '@material-ui/lab/Rating';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title1: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  section1: {
    margin: theme.spacing(1, 1),
  },
  paper: {
    padding: theme.spacing(2),
    width: theme.spacing(147),
    height: theme.spacing(32),

    color: theme.palette.text.secondary,
  },

  text: {
    textAlign: 'center',
  },

  toolbar: theme.mixins.toolbar,
}));

export default function ContactUs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title1}>
        Contact Us:
      </Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item sm={4}>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <div>
                <Paper className={classes.paper} elevation={2}>
                  {' '}
                  <div className="row">
                    <div className="Column">
                      <Typography
                        variant="h6"
                        component="h2"
                        className="column"
                      >
                        Business Owner:
                        <h4>Carlos Romano, Ryan Betke </h4>
                      </Typography>
                    </div>
                    <div className="Column">
                      <Typography
                        variant="h6"
                        component="h2"
                        className="column"
                      >
                        IT Owner:
                        <h4>Asish Sharma</h4>
                      </Typography>
                    </div>
                  </div>
                  <Typography component="legend" className={classes.text}>
                    For more queries please contact
                    <div>
                      <Link href="https://rivianautomotivellc.atlassian.net/servicedesk/customer/portals">
                        Helpdesk
                      </Link>
                    </div>
                  </Typography>
                </Paper>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Paper className={classes.paper} elevation={3}>
                  <Typography className={classes.title}>
                    <h3>FeedBack</h3>
                  </Typography>
                  <div style={{ textAlign: 'center' }} className="row">
                    <div className="column">
                      <div>Ratings:</div>
                      <div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="padding">
                        <TextField
                          id="Comment"
                          placeholder="Comment"
                          size="medium"
                          multiline
                          rows={3}
                          rowsMax={5}
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <Typography component="legend" className={classes.text}>
                    <Button
                      className="button"
                      variant="contained"
                      size="medium"
                    >
                      Submit
                    </Button>
                  </Typography>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
