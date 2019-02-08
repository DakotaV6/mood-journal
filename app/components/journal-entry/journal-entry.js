"use strict";

const journalEntry = {
        templateUrl: "app/components/journal-entry/journal-entry.html",
        controller: [function() {
            const vm = this;
        }]
}

angular
    .module("App")
    .component("journalEntry", journalEntry);