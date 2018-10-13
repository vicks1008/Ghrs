/* global fetch */
import Flux from "@4geeksacademy/react-flux-dash";
import {Session} from 'bc-react-session';

const HOST = 'https://whispering-waters-19648.herokuapp.com/api';

export const retrieve = (entity, callback=null) => {
    fetch(HOST + '/'+entity)
      .then(function(response) {
        console.log(response.status);
        return response.json();
      })
      .then(function(incomingObject) {
        Flux.dispatchEvent(entity, incomingObject);
        if(callback) callback();
      })
      .catch(function(error){
        console.log(error);
      });
};

export const login = () => {
  Session.start({
    payload: {
      username: 'victor',
      products: []
    },
    expiration: 86400000 // (optional) defaults to 1 day
  });
};

export const logout = () => {
  Session.destroy();
};

export const addProductToShopingCart = (product) => {
  let session = Session.get();
  Session.setPayload({
    username: session.payload.username,
    products: session.payload.products.concat([product])
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
        this.addEvent('category', function(categories){
          if(!Array.isArray(categories)) return [];
          
          return categories.map((cat) => {
            
            cat.products = cat.products.map((pId) => {
                const allproducts = store.getState('product');
                return allproducts.find(p => p.id == pId );
            });
            
            return cat;
          });
        });
        this.addEvent('product');
    }
}

export const store = new MyStore();