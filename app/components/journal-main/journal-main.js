"use strict";

const journalMain = {
    templateUrl: "app/components/journal-main/journal-main.html",
    controller: [function() {
        const vm = this;
    }]
};


angular
    .module("App")
    .component("journalMain", journalMain);