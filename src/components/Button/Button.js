import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

Button.propTypes = {}

export default function Button({ loadMore }) {
    return (
        <div className={styles.ButtonContainer}>
            <button type="submit" className={styles.Button} onClick={loadMore}>
                <span>Load more</span>
            </button>
        </div>
    )
}
