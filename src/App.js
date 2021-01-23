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
    // apiConfig={
    // API_KEY: '19125806-9a56a48a4edb0ea3b4b1e3bdb'
    // }
    toSearch = (elementToSearch) => {
        this.setState({ status: 'pending', currentSearch: elementToSearch })
        // console.log('FROM_APP_TO_SERCH')
        // console.log(elementToSearch)
        // console.log('FROM_ONSEARCH_FUNCTION')
        const API_KEY = '19125806-9a56a48a4edb0ea3b4b1e3bdb'
        const currentPage = this.state.page
        console.log(`Current page is: ${currentPage}`)
        // setTimeout(() => {
        fetch(
            `https://pixabay.com/api/?key=${API_KEY}&q=${elementToSearch}&page=${this.state.page}&per_page=12`
        )
            .then((res) => res.json())
            .then((SearchData) => {
                this.state.SearchData === null
                    ? this.setState((prevState) => ({
                          SearchData: SearchData.hits,
                          status: 'idle',
                      }))
                    : this.setState((prevState) => ({
                          SearchData: [
                              ...prevState.SearchData,
                              ...SearchData.hits,
                          ],
                          status: 'idle',
                      }))
            })
        // }, 2000)

        // console.log(this.state.SearchData)
        // this.setState({ status: 'idle' })
    }

    loadMore = (event) => {
        // event.preventDefault()
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }))
        // console.log(this.state.page)
        // this.toSearch(this.state.currentSearch)
        // this.setState({ page: +1 })
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: 'smooth',
        // })
        // console.log('OnLoadMore')
    }

    windowScroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }
    componentDidMount() {
        // const API_KEY = '19125806-9a56a48a4edb0ea3b4b1e3bdb'
        // console.log('FROM_COMPONENT_DID_MOUNT')
        // fetch(`https://pixabay.com/api/?key=${API_KEY}&q`)
        //     .then((res) => res.json())
        //     .then(console.log)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.toSearch(this.state.currentSearch)
        }
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }

    render() {
        console.log('FROM RENDER')
        console.log(this.state.status)
        // console.log(this.state.SearchData)
        return (
            <div className={styles.App}>
                {this.state.status === 'pending' && <Loader />}
                <Searchbar onSubmit={this.toSearch} />
                {this.state.SearchData && (
                    <div>
                        <ImageGallery searchData={this.state.SearchData} />
                        <div className={styles.ButtonContainer}>
                            <Button loadMore={this.loadMore} />
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
