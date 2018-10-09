/* global fetch */
import Flux from "@4geeksacademy/react-flux-dash";

const HOST = 'https://fierce-mountain-32300.herokuapp.com/api';

export const getAllCategories = () => {
    fetch(HOST + '/category')
      .then(function(response) {
        console.log(response.status);
        return response.json();
      })
      .then(function(incomingObject) {
        Flux.dispatchEvent('categories', incomingObject);
      })
      .catch(function(error){
        console.log(error);
      });
};

export const addContact = (contact) => {
    fetch(HOST+'/contacts', 
    { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }
    )
      .then(function(response) {
        /*console.log("Status Response", response.status);*/
        return response.json();
      })
      .then(function(incomingObject) {
        let contacts = store.getState("contacts");
        contact.id = incomingObject.id;
        if(!contacts) contacts = [contact];
        else contacts.push(contact);
        Flux.dispatchEvent('contacts', contacts);
      })
      .catch(function(error){
        console.log(error);
      });
};


export const deleteContact = (contact) => {
    fetch(HOST+'/contacts'+contact.id, 
    {   method: 'DELETE'}
    )
      .then(function(response) {
        console.log("Status Response", response.status);
        return response.json();
    })
      .then(function(incomingObject) {
        let contacts = store.getState("contacts");
        const newContactsList = contacts.filter((c) => (c.id != contact.id));
        Flux.dispatchEvent('contacts', newContactsList);
      })
      .catch(function(error){
        console.log("Error", error);
      });
};

export const editContact = (contact) => {
      fetch(HOST+"/contacts"+contact.id, 
      {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
      },
          body: JSON.stringify(contact)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(incomingObject) {
          let contacts = store.getState("contacts");
          const newContactsList = contacts.map((c) => {
              if(c.id != contact.id) return contact;
              else return incomingObject;
          });
          Flux.dispatchEvent('contacts', newContactsList);
        })
        .catch(function(error) {
          console.log(error);
        });
};


class MyStore extends Flux.DashStore {
    constructor(){
        super();
        this.addEvent('categories');
    }
}

export const store = new MyStore();