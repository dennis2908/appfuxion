import './App.css';
import { store } from './redux/store'

import React from 'react';

import FormControl from '@mui/material/FormControl';

import Autocomplete from "react-google-autocomplete";

import Mdm from "./components/Mdm";

import MyComponent from "./components/Map";


function App() {

  const [Coor, setCoor] = React.useState({
    lat: -3.745,
    lng: -38.523
  })
  return (

    <div className="App">
      <FormControl style={{ height: "550px", lineHeight: "200%" }}>
        <Autocomplete
          apiKey={process.env.REACT_APP_API_KEY}
          style={{ width: "300px", height: "50px", marginBottom: "5px", marginTop: "20px" }}
          onPlaceSelected={(place) => {
            setCoor({
              lat:place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            })
            // console.log(4444, place.geometry.location.lng())
            store.dispatch({ type: 'CHANGE_STATE', payload: { place: place } })
          }}
        />

        <MyComponent Coor={Coor} />

      </FormControl>
      <Mdm
        paperSxStyle={{ width: '100%', overflow: 'hidden' }}
        TableContainerSxStyle={{ maxHeight: 500 }}
      />
    </div>
  );
}

export default App;
