 import React, { Component } from 'react';
 import { Cards, Chart, CountryPicker } from './components';


 import './App.modules.css';
 import {fetchData} from './api/index';

 import coronaImage from './images/image.png';
 
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
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country });
    }

     render() {

        const { data, country } = this.state;
        console.log(data);
         return (
             <div className="container">
                 <img className="image" src={coronaImage} alt="COVID-19"/>
                 <Cards data={data}/>
                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
                 <Chart data={data} country={country}/>
             </div>

         );
     }
 }
 
 export default App;