import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

Modal.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
}

export default function Modal(props) {
    return (
        <div className="Overlay">
            <div className="Modal">
                <img src="" alt="" />
            </div>
        </div>
    )
}
