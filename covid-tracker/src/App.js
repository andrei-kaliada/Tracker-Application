 import React, { Component } from 'react';
 import { Cards, Chart, CountryPicker } from './components';

 import styles from './App.modules.css';
 import {fetchData} from './api/index';
 
 class App extends Component {

    state = {
        data: {},
        country:'',
    }

   async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        console.log(country);
    }

     render() {

        const { data } = this.state;
        console.log(data);
         return (
             <div className={styles.container}>
                 <Cards data={data}/>
                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
                 <Chart />
             </div>
         );
     }
 }
 
 export default App;