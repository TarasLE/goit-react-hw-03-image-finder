import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

ImageGallery.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
}

export default function ImageGallery({ searchData, onIMGclick }) {
    return (
        <ul className={styles.ImageGallery}>
            {searchData.map((elem) => (
                <ImageGalleryItem
                    key={elem.id}
                    id={elem.id}
                    webformatURL={elem.webformatURL}
                    largeImageURL={elem.largeImageURL}
                    onIMGclick={onIMGclick}
                />
            ))}
        </ul>
    )
}
