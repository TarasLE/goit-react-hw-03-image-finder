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

        // console.log(this.state.searchName)
    }

    handleSubmit = (event) => {
        const currentInput = this.state.searchName.trim()
        if (currentInput) {
            event.preventDefault()

            // console.log(event)
            // console.log(this.state.searchName)
            this.props.onSubmit(this.state.searchName)
        } else {
            event.preventDefault()
            return
        }
        // this.clearInput()
    }

    // clearInput = () => {
    //     this.setState({ searchName: '' })
    // }
    // componentDidUpdate(prevProps, prevState) {}

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
