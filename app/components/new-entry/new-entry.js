"use strict";

const newEntry = {
    templateUrl: "app/components/new-entry/new-entry.html",
    controller: [function() {
        const vm = this;
    }]
};

angular
    .module("App")
    .component("newEntry", newEntry);