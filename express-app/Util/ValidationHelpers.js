"use strict";

// Exports
module.exports = {
    NotNullOrEmpty: function (param) {
        if(param !== null && param !== "") {
            return true;
        }
        return false;
    }
};