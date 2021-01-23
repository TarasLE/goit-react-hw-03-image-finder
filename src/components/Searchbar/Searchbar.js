import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Searchbar.module.css'

export default class Searchbar extends Component {
    state = {
        searchName: '',
    }

    handleInput = (event) => {
        // event.preventDefault()
        this.setState({ searchName: event.currentTarget.value })

        // console.log(this.state.searchName)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // console.log(event)
        // console.log(this.state.searchName)
        this.props.onSubmit(this.state.searchName)
        // this.clearInput()
    }

    // clearInput = () => {
    //     this.setState({ searchName: '' })
    // }

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
