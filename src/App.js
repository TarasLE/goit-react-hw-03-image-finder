import logo from './logo.svg'
import styles from './App.module.css'
import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'

export default class App extends Component {
    state = {
        SearchData: null,
        // SearchData: [
        //     {
        //         largeImageURL:
        //             'https://pixabay.com/get/g54f78ed5cb54f9c99cd3f1ecc248ef601453b29dba704645394f8ad61bcfc3ac722c6ba46444dab70a9158ead3f3e99dfd220c963227087dec832efb463dc4e4_1280.jpg',
        //         webformatURL:
        //             'https://pixabay.com/get/gf4475002ed20ae5303ec1ab43ba9e035fd96e594d112b3554f80c33125ef1fd374d148e679153ed0647e3b20f73309fa4a57a2b21271f1b215b69059598d631b_640.jpg',
        //         id: 2083492,
        //     },
        //     {
        //         largeImageURL:
        //             'https://pixabay.com/get/g46fda85d0c1a3c44d4100a4a736b47764b5072957e26abd1681c46a24cd407e84884d1c9205151fa0faeaec0b60cde972310cb837605d6fad662c461c35e081a_1280.jpg',
        //         webformatURL:
        //             'https://pixabay.com/get/g7754c150344af8e59202000108d16883cbdc1f5310bc8558ea68fc017c6f9d010ba33791fbd713eb7f02afcb84aabf69_640.jpg',
        //         id: 323262,
        //     },
        // ],
    }
    // apiConfig={
    // API_KEY: '19125806-9a56a48a4edb0ea3b4b1e3bdb'
    // }
    toSearch = (elementToSearch) => {
        // console.log('FROM_APP_TO_SERCH')
        // console.log(elementToSearch)
        // console.log('FROM_ONSEARCH_FUNCTION')
        const API_KEY = '19125806-9a56a48a4edb0ea3b4b1e3bdb'
        fetch(
            `https://pixabay.com/api/?key=${API_KEY}&q=${elementToSearch}&per_page=12`
        )
            .then((res) => res.json())
            .then((SearchData) => {
                this.setState((prevState) => ({
                    SearchData: SearchData.hits,
                }))
                // console.log(SearchData)
            })
        // console.log(this.state.SearchData)
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
        console.log(this.state.SearchData)
        return (
            <div>
                <Searchbar onSubmit={this.toSearch} />
                {this.state.SearchData && (
                    <ImageGallery searchData={this.state.SearchData} />
                )}
            </div>
        )
    }
}
