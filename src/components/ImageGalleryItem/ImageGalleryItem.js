import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageGalleryItem.module.css'

ImageGalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onIMGclick: PropTypes.func.isRequired,
}

export default function ImageGalleryItem({
    id,
    webformatURL,
    largeImageURL,
    onIMGclick,
}) {
    return (
        <li className={styles.ImageGalleryItem} key={id} onClick={onIMGclick}>
            <img
                src={webformatURL}
                data-source={largeImageURL}
                alt=""
                className={styles.ImageGalleryItemImage}
            />
        </li>
    )
}
