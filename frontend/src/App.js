import React from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateCustomer from "./components/new";
import EditCustomer from "./components/edit";
import Customers from "./components/customers";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  marginTop: {
    marginTop: 15
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit">
              App Name
            </Link>
          </Typography>
          <Typography className={classes.root}>
            <Link href="/new" color="inherit">
              Add customer
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} className={classes.marginTop}>
          <Grid item xs={12}>
            <Switch>
              <Router>
              <Route exact path="/" component={props => <Customers {...props} />} />
                <Route path="/new" component={props => <CreateCustomer {...props} />} />
                <Route path="/edit/:id" component={props => <EditCustomer {...props} />} />
              </Router>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </div>);
}

export default App;