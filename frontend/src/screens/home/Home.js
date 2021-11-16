import React, {useState} from "react";
import './Home.css';
import Header from '../../common/Header';
import Button from "@material-ui/core/Button";
import DisplayData from "../../common/DisplayData";
import axios from 'axios'

const Home = function (props) {
    const baseUrl = 'http://localhost:5000';
    const [rows, setRows] = useState([])

    const displayData = async () => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization : `Bearer ${localStorage.getItem('token')}`
            },
          };
    
         const {data} = await axios.get(baseUrl + "/api/data", config);
         console.log(data)
         setRows(data)
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div>
            <div>
                {/*Header called with correct props*/}
                <Header loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
                <Button
                  variant="contained"
                  color="primary"
                  className="buttons"
                  onClick={displayData}
                >
                  DISPLAY DATA
                </Button>
                <DisplayData rows = {rows}/>
            </div>
        </div>
    )
}

export default Home;

