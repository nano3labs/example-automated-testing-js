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
      submitted: false,
      seeYouSoon: false
    }
  }

  handleSubmit = () => {
    this.setState({ submitted: true, seeYouSoon: false })
  }

  handleLogout = () => {
    this.setState({ submitted: false, seeYouSoon: true })
  }

  renderWelcome () {
    return (
      <React.Fragment>
        <p>Successfully submitted form</p>
        <Button onClick={this.handleLogout} variant="raised" color="primary">Logout</Button>
      </React.Fragment>
    )
  }

  renderLoginForm () {
    const { classes } = this.props

    return (
      <form className={classes.form}>
        <h1>Login</h1>
        {this.state.seeYouSoon && <p>Goodbye! See you soon!</p>}
        <Grid container className={classes.field}>
          <TextField name="email" placeholder="Email" />
        </Grid>
        <Grid container className={classes.field}>
          <TextField name="password" type="password" placeholder="password" />
        </Grid>
        <Grid container className={classes.field}>
          <Button onClick={this.handleSubmit} variant="raised" color="primary">Login</Button>
        </Grid>
      </form>
    )
  }

  render () {
    const { classes } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.submitted ?
            this.renderWelcome() :
            this.renderLoginForm()
          }
        </p>
      </div>
    )
  }
}

export default withStyles(styles)(App)
