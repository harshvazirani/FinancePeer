import React from "react";
import "./common.css";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Stack from "@mui/material/Stack";
import { Input } from "@material-ui/core";
import LoginTab from "./LoginTab.js";
import RegisterTab from "./RegisterTab";
import axios from "axios";

const customStyles = {};
const baseUrl = 'http://localhost:5000';

Modal.setAppElement("#root");

//Header has to be passed 3 important props "loggedIn", "setLoggedIn" and "BaseUrl"
const Header = function (props) {
  const [modalIsOpen, setIsOpen] = React.useState(false); //To be passed as the "isOpen" prop to Modal
  const [selectedTab, setTab] = React.useState(0); //Which Modal Tab is Active 0 for Login, 1 for Register

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    //does nothing
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  async function login(email, password) {

    var details = {
      email: email,
      password: password
  }

    try {
      const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const { data } = await axios.post(
        baseUrl + '/api/users/login', details, config
        )

      if (data) {
        localStorage.setItem("token", data.token)
        props.setLoggedIn(true);
        closeModal();
      } else {
        const error = new Error();
        error.message = "Something went wrong.";
      }
    } catch (e) {
      alert(`Error: ${e.message}`);
    }
  }
  
  async function register(email, password) {

    var details = {
        email: email,
        password: password
    }


    try {
        const config = {
          headers: {
              'Content-Type' : 'application/json'
          }
      }
  
      const { data } = await axios.post(
          baseUrl + '/api/users/register', details, config
          )
  
        if (data) {
          localStorage.setItem("token", data.token)
          props.setLoggedIn(true);
          closeModal();
        } else {
          const error = new Error();
          error.message = "Something went wrong.";
        }
      } catch (e) {
        alert(`Error: ${e.message}`);
      }

}


  // AJAX call to backend server for logout. Implemented.
  async function logout() {
        localStorage.removeItem("token");
        props.setLoggedIn(false);
        window.location = "http://localhost:3000/";
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${localStorage.getItem('token')}`
        },
      };

     await axios.post(baseUrl + "/api/data", file, config);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="header">
        {/*The loggedIn prop decides which Button to show: Login or Logout*/}
        {
          <div>
            <Stack direction="row" spacing={2} className="button-stack">
              {!props.loggedIn && (
                <Button
                  variant="contained"
                  color="primary"
                  className="buttons"
                  onClick={openModal}
                >
                  LOGIN
                </Button>
              )}

              {props.loggedIn && (
                <Button
                  variant="contained"
                  color="default"
                  className="buttons"
                  onClick={logout}
                >
                  LOGOUT
                </Button>
              )}

              <label htmlFor="contained-button-file">
                <Input
                  id="file"
                  type="file"
                  onChange = {uploadFileHandler}
                />
              </label>
            </Stack>
          </div>
        }
      </div>

      {/*Modal called with correct props*/}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal-width"
      >
        <Paper>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            centered
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          {selectedTab === 0 && (
            <LoginTab baseUrl={props.baseUrl} onClickHandler={login} />
          )}

          {selectedTab === 1 && <RegisterTab baseUrl={props.baseUrl} register = {register}/>}
        </Paper>
      </Modal>
    </div>
  );
};

export default Header;
