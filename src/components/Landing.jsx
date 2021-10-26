import React, { useState, Fragment } from "react";
import "./Stylling.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import Userinfor from "./Userinfor";

const Landing = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phonenumber: "",
    email: "",
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newformData = { ...addFormData };
    newformData[fieldName] = fieldValue;
    setAddFormData(newformData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phonenumber: addFormData.phonenumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <Router>
      <div className="coverpage">
        <form onSubmit={handleAddFormSubmit} className="form1">
          <h2>Register</h2>

            <div className='name'>
                <h5>Name(s):</h5>
                <input
                  type="text"
                  name="fullName"
                  required="required"
                  placeholder="Please enter your name(s)"
                  onChange={handleAddFormChange}
                ></input>
            </div>

            <div className ='name'>
            <h5>Surname:</h5>

            <input
                  type="text"
                  name="address"
                  required="required"
                  placeholder="Please enter your Surname"
                  onChange={handleAddFormChange}
                />
                </div>

                <div className ='name'>
                <h5>Location:</h5>
                <input
                  type="text"
                  name="phonenumber"
                  required="required"
                  placeholder="Please enter your location"
                  onChange={handleAddFormChange}
                />
                </div>

                <div className ='name'>
                <h5>Email:</h5>
                <input
                  type="text"
                  name="email"
                  required="required"
                  placeholder="Please enter your email"
                  onChange={handleAddFormChange}
                />
                </div>


          <button type="submit">Add new user</button>
        </form>

        <div className="boxuser">
          <h2>Added users</h2>

          {contacts.length > 0 ? (
            contacts.map((action) => (
              <Link to={"/UsersInfor/" + action.id}>
                <p>
                  {action.fullName} {action.location} {action.location} {action.email} {" "}
                 
                </p>
              </Link>
            ))
          ) : (
            <div></div>
          )}
        </div>

        <Switch>
          <Route path="/UsersInfor/:id">
            {contacts.map((d) => (
              <Fragment>
                <Userinfor d={d} handleDeleteClick={handleDeleteClick} />
              </Fragment>
            ))}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Landing;