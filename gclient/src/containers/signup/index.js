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
      <Button variant="outlined" href="/login/oauth/github" onClick={createDocument} className={classes.button}>
          Login with GitHub
      </Button>
    </div>
  );
};

export default Signup;