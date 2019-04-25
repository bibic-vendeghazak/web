import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// For the slider elements
import colors from 'utils/colors'
import { withTranslation } from 'react-i18next';

export const Loading =  withTranslation("common")(class extends Component {

  state = {isTimedOut: false}

  componentDidMount() {
    this.timeout = setTimeout(this.tick, 10000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  tick = () => this.setState({isTimedOut: true})


  render() {
    const style = this.props.fullPage ? {
      width: "100vw",
      height: "100vh",
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      backgroundColor: colors.light
    } : null

    return (
      // TODO: Add better empty state
      this.state.isTimedOut ?
        <p className="not-available">
          {this.props.t("not-available")}.
        </p> :
        <div style={style}>
          <div className="loading"><div className="spinner"/></div>
        </div>
    )
  }
})

export const Button = ({label, to}) => <Link {...{to}} >{label}</Link>