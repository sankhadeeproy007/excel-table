import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

export default function UserGuide() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        User Guide:
      </Typography>

      <Container maxWidth="lg">
        <img
          // eslint-disable-next-line global-require
          src={require('../../assets/images/Userguide.png')}
          alt="pic"
          className="img"
        />

        <div className="ex1">
          <h3> Purchasing Manager:</h3>
          <ul>
            <li>
              Sends a new request by adding Supplier Name, CostCenter Name &
              Equipment Details to the Accounting.
            </li>
            <li>
              Purchasing manager fills out the information and sends it back to
              the Accounting Manager.
            </li>
          </ul>
          <h3>Accounting Manager: </h3>
          <ul>
            <li>
              Verify the details and if required information is sent out to the
              purchasing manager.
            </li>
            <li>
              Verify the details if necessary changes are good to go, and the
              Accounting manager completes the request.
            </li>
            <li>
              If the request is being completed then the Accounting manager
              Archives the request.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
