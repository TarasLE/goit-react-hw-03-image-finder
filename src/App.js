import logo from './logo.svg'
import styles from './App.module.css'
import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'

export default class App extends Component {
    state = {
        SearchData: null,
        status: 'idle',
        page: 1,
        currentSearch: '',
        showModal: false,
        chosenIMG: '',
    }

    apiConfig = {
        API_KEY: '19125806-9a56a48a4edb0ea3b4b1e3bdb',
        BASE_URL: 'https://pixabay.com/api/',
    }

    toggleModal = (event) => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
    }

    chosenIMG = (event) => {
        this.setState({ chosenIMG: event.target.dataset.source })
        this.toggleModal()
    }

    searchRequest = (elementToSearch) => {
        if (this.state.currentSearch === elementToSearch) {
            return
        } else {
            this.resetState()
            this.setState({ status: 'pending' })
            this.setState({ currentSearch: elementToSearch })
        }
    }

    fetchElements = () => {
        fetch(
            `${this.apiConfig.BASE_URL}?key=${this.apiConfig.API_KEY}&q=${this.state.currentSearch}&page=${this.state.page}&per_page=12`
        )
            .then((res) => res.json())
            .then((SearchData) => {
                this.state.SearchData === null
                    ? this.setState({
                          SearchData: SearchData.hits,
                          status: 'idle',
                      })
                    : this.setState((prevState) => ({
                          SearchData: [
                              ...prevState.SearchData,
                              ...SearchData.hits,
                          ],
                          status: 'idle',
                      }))
            })
    }

    windowScroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }

    loadMore = (event) => {
        event.preventDefault()
        this.setState((prevState) => ({
            page: prevState.page + 1,
            status: 'pending',
        }))
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.fetchElements()
        } else if (this.state.currentSearch !== prevState.currentSearch) {
            this.resetState()
            this.fetchElements()
        }
        this.windowScroll()
    }

    resetState = () => {
        this.setState({
            SearchData: null,
            page: 1,
        })
    }

    render() {
        return (
            <div className={styles.App}>
                {this.state.status === 'pending' && (
                    <Loader pageState={this.state.page} />
                )}
                <Searchbar onSubmit={this.searchRequest} />
                {this.state.SearchData && (
                    <div>
                        <ImageGallery
                            searchData={this.state.SearchData}
                            onIMGclick={this.chosenIMG}
                        />
                        {this.state.status === 'idle' && (
                            <Button loadMore={this.loadMore} />
                        )}
                    </div>
                )}
                {this.state.showModal && (
                    <Modal
                        chosenIMG={this.state.chosenIMG}
                        closeModal={this.toggleModal}
                    />
                )}
            </div>
        )
    }
}
