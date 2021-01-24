import logo from './logo.svg'
import styles from './App.module.css'
import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'

export default class App extends Component {
    state = {
        SearchData: null,
        status: 'idle',
        page: 1,
        currentSearch: '',
    }

    apiConfig = {
        API_KEY: '19125806-9a56a48a4edb0ea3b4b1e3bdb',
        BASE_URL: 'https://pixabay.com/api/',
    }

    toSearch = (elementToSearch) => {
        if (this.state.currentSearch === elementToSearch) {
            return
        } else {
            this.resetState()
            this.setState({ status: 'pending' })
            this.setState({ currentSearch: elementToSearch })
        }
    }

    fetchElements = () => {
        // this.setState({ status: 'pending' })
        // setTimeout(() => {
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
        // }, 2000)
    }

    // toSearch = (elementToSearch) => {
    //     this.setState({ status: 'pending', currentSearch: elementToSearch })
    //     const API_KEY = '19125806-9a56a48a4edb0ea3b4b1e3bdb'
    //     const currentPage = this.state.page
    //     console.log(`Current page is: ${currentPage}`)
    //     fetch(
    //         `https://pixabay.com/api/?key=${API_KEY}&q=${elementToSearch}&page=${this.state.page}&per_page=12`
    //     )
    //         .then((res) => res.json())
    //         .then((SearchData) => {
    //             this.state.SearchData === null
    //                 ? this.setState((prevState) => ({
    //                       SearchData: SearchData.hits,
    //                       status: 'idle',
    //                   }))
    //                 : this.setState((prevState) => ({
    //                       SearchData: [
    //                           ...prevState.SearchData,
    //                           ...SearchData.hits,
    //                       ],
    //                       status: 'idle',
    //                   }))
    //         })
    // }

    loadMore = (event) => {
        event.preventDefault()
        this.setState((prevState) => ({
            page: prevState.page + 1,
            status: 'pending',
        }))
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState) {
        // if (this.state.currentSearch) {
        //     this.fetchElements()
        // }
        if (this.state.page !== prevState.page) {
            // this.toSearch(this.state.currentSearch)
            this.fetchElements()
            console.log('FROM DID UPDATE')
        } else if (this.state.currentSearch !== prevState.currentSearch) {
            // this.state.SearchData = null
            // console.log('RESET')
            this.resetState()
            this.fetchElements()
        }
        // const scrollrevers = imageContainer.clientHeight(this.state.page - 1)
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }

    resetState = () => {
        this.setState({
            SearchData: null,
            page: 1,
            // currentSearch: '',
            // status: 'idle',
        })
    }

    render() {
        // console.log('FROM RENDER')
        // console.log(this.state.status)
        // console.log(this.state.SearchData)
        return (
            <div className={styles.App}>
                {/* {this.state.status === 'pending' && <Loader />} */}
                {/* {this.state.status === 'pending' && this.state.page === 1 && ( */}
                {this.state.status === 'pending' && (
                    <Loader pageState={this.state.page} />
                )}
                <Searchbar onSubmit={this.toSearch} />
                {this.state.SearchData && (
                    <div>
                        <ImageGallery searchData={this.state.SearchData} />
                        {this.state.status === 'idle' && (
                            <Button
                                loadMore={this.loadMore}
                                // className={styles.Test}
                            />
                        )}
                    </div>
                )}
            </div>
        )
    }
}
