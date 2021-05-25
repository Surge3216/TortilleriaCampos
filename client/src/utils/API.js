import axios from "axios";

export default {

    getOrders: function() {
        return axios.get("/api/orders/");
    },

    getOrder: function(userID) {
        return axios.get("/api/orders/" + userID);
    },

    deleteOrder: function(userID) {
        return axios.delete("/api/orders/" + userID);
    },

    saveOrder: function(orderData) {
        return axios.post("/api/orders/", orderData);
    },

    saveClient: function(clientData){
        return axios.post("/api/newclient/", clientData)
    },

    deleteClient: function(clientName){
        return axios.delete("/api/newclient/" + clientName)
    },

    saveEmployee: function( employeeData){
        return axios.post("/api/employee/", employeeData)
    }
};