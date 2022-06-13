import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-t-l-p">{props.text1}</span>
      <Link to="/page" className="navigation-links-confusion">
        {props.text2}
      </Link>
      <span className="navigation-links-text1">{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Something',
  text: 'Home',
  text1: 'TLP',
  text2: 'Confusion',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
