import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.closeModal()
        }
    }

    handleOverlayClick = (event) => {
        if (event.currentTarget === event.target) {
            this.props.closeModal()
        }
    }

    render() {
        return (
            <div className={styles.Overlay} onClick={this.handleOverlayClick}>
                <div className={styles.Modal}>
                    <img
                        // src="https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg"
                        src={this.props.chosenIMG}
                        alt=""
                    />
                </div>
            </div>
        )
    }
}
