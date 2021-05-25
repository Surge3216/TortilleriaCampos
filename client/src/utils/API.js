import axios from "axios";

export defaut {

    getOrders: function() {
        return axios.get("/api/orders/");
    },

    getOrder: function(userID) {
        return axios.get("/api/orders/" + userID);

    }
};