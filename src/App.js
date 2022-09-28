import './App.css';
import { store } from './redux/store'

import FormControl from '@mui/material/FormControl';

import Autocomplete from "react-google-autocomplete";

import Mdm from "./Mdm";


function App() {

  return (

    <div className="App">
      <FormControl style={{ height: "50px", lineHeight: "200%" }}>
        <Autocomplete
          apiKey="AIzaSyDSKsr1WK1DcCmD49tsJ1nZMgKT8RJC9EE"
          style={{ width: "400px", height: 100, marginBottom: "5px", marginTop: "5px" }}
          onPlaceSelected={(place) => {
           store.dispatch({ type: 'CHANGE_STATE', payload: { place: place } })
          }}
        />

      </FormControl>
      <Mdm
        paperSxStyle={{ width: '100%', overflow: 'hidden' }}
        TableContainerSxStyle={{ maxHeight: 560 }}
      />
    </div>
  );
}

export default App;
