import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-loader-spinner'
import styles from './Loader.module.css'

export default class Loader extends Component {
    render() {
        return (
            <Spinner
                type="Audio"
                color="#39d312"
                height={100}
                width={100}
                timeout={3000} //3 secs
                className={styles.Loader}
            />
        )
    }
}
