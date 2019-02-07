"use strict";

const mainComp = {
    templateUrl: "app/components/main-comp/main-comp.html",
    controller: [function() {
        const vm = this;
    }]
};


angular
    .module("App")
    .component("mainComp", mainComp);