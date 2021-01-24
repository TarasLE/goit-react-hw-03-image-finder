import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Searchbar.module.css'

export default class Searchbar extends Component {
    state = {
        searchName: '',
    }

    handleInput = (event) => {
        event.preventDefault()
        this.setState({ searchName: event.currentTarget.value })
    }

    handleSubmit = (event) => {
        const currentInput = this.state.searchName.trim()
        if (currentInput) {
            event.preventDefault()
            this.props.onSubmit(this.state.searchName)
        } else {
            event.preventDefault()
            return
        }
    }

    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm}>
                    <button
                        type="submit"
                        className={styles.SearchFormButton}
                        onClick={this.handleSubmit}
                    >
                        <span className={styles.SearchFormButtonLabel}>
                            Search
                        </span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInput}
                    />
                </form>
            </header>
        )
    }
}
