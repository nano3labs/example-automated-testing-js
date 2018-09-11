import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import logo from './logo.svg'
import './App.css'
import { Grid, TextField, withStyles } from '@material-ui/core'

const styles = (theme) => ({
  field: {
    marginTop: 10
  },
  form: {
    padding: '10px 20px'
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false
    }
  }

  handleSubmit = () => {
    this.setState({ submitted: true })
  }

  render() {
    const { classes } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.submitted && <p>Successfully submitted form</p>}
          <form className={classes.form}>
            <Grid container className={classes.field}>
              <TextField name="full-name" placeholder="Full Name" />
            </Grid>
            <Grid container className={classes.field}>
              <TextField name="email" placeholder="email" />
            </Grid>
            <Grid container className={classes.field}>
              <Button onClick={this.handleSubmit} variant="raised" color="primary">Send</Button>
            </Grid>
          </form>
        </p>
      </div>
    )
  }
}

export default withStyles(styles)(App)
