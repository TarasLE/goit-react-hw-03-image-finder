import logo from './logo.svg'
import styles from './App.module.css'
import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'

export default class App extends Component {
    state = {
        SearchData: null,
        status: 'idle',
    }
    // apiConfig={
    // API_KEY: '19125806-9a56a48a4edb0ea3b4b1e3bdb'
    // }
    toSearch = (elementToSearch) => {
        this.setState({ status: 'pending' })
        // console.log('FROM_APP_TO_SERCH')
        // console.log(elementToSearch)
        // console.log('FROM_ONSEARCH_FUNCTION')
        const API_KEY = '19125806-9a56a48a4edb0ea3b4b1e3bdb'
        // setTimeout(() => {
        fetch(
            `https://pixabay.com/api/?key=${API_KEY}&q=${elementToSearch}&per_page=12`
        )
            .then((res) => res.json())
            .then((SearchData) => {
                this.setState((prevState) => ({
                    SearchData: SearchData.hits,
                    status: 'idle',
                }))
            })
        // }, 2000)

        // console.log(this.state.SearchData)
        // this.setState({ status: 'idle' })
    }

    componentDidMount() {
        // const API_KEY = '19125806-9a56a48a4edb0ea3b4b1e3bdb'
        // console.log('FROM_COMPONENT_DID_MOUNT')
        // fetch(`https://pixabay.com/api/?key=${API_KEY}&q`)
        //     .then((res) => res.json())
        //     .then(console.log)
    }
    render() {
        console.log('FROM RENDER')
        console.log(this.state.status)
        // console.log(this.state.SearchData)
        return (
            <div>
                {this.state.status === 'pending' && <Loader />}
                <Searchbar onSubmit={this.toSearch} />
                {this.state.SearchData && (
                    <ImageGallery searchData={this.state.SearchData} />
                )}
            </div>
        )
    }
}
