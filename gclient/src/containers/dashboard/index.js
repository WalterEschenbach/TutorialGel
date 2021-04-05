import React from 'react';
import { useStyles } from './styles';
import { feathersApp } from '../../utils/feathersApp'
import {Button} from '@material-ui/core'

const createDocument = () => {
  feathersApp.service('projects').create({
    text: "helloworld"
  })
}

const Dashboard = props => {
const classes = useStyles();

return (
<div>
<Button variant="outlined"  onClick={createDocument} className={classes.button}>
          Create a Project
      </Button>
</div>
);
};

export default Dashboard;