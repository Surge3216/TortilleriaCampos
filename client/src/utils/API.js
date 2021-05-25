import axios from "axios";

export default {

    getOrders: function() {
        return axios.get("/api/orders/");
    },

    getOrder: function(userID) {
        return axios.get("/api/orders/" + userID);

    },

    saveClient: function(clientData){
        return axios.post("/api/newclient/", clientData)
    }
};