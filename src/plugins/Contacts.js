'use strict';

angular.module('PhoneGap')
    .factory('Contacts', function ($q, $window, $timeout, $rootScope, PhoneGap) {
        return {
            create: function (properties) {
                PhoneGap.ready().then(function () {
                    $window.navigator.contacts.create(properties);
                });
            },
            find: function (fields, onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.contacts.find(fields, onSuccess, onError, options);
                });
            }
        };
    });