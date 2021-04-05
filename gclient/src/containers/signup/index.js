import React from 'react';
import { useStyles } from './styles';
import {Button} from '@material-ui/core'
import { feathersApp } from '../../utils/feathersApp'


const createDocument = () => {
  feathersApp.service('projects').create({
    text: "helloworld"
  })
}

const Signup = props => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" href="http://localhost:3000/authentication" onClick={createDocument} className={classes.button}>
          Login with Google
      </Button>
    </div>
  );
};

export default Signup;