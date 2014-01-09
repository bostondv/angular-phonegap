'use strict';

angular.module('PhoneGap')
    .factory('Globalization', function ($window, PhoneGap) {
        return {
            getPreferredLanguage: function (successCallback, errorCallback) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
                });
            },
            getLocaleName: function (successCallback, errorCallback) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getLocaleName(successCallback, errorCallback);
                });
            },
            dateToString: function (date, successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.dateToString(date, successCallback, errorCallback, options);
                });
            },
            stringToDate: function (dateString, successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
                });
            },
            getDatePattern: function (successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getDatePattern(successCallback, errorCallback, options);
                });
            },
            getDateNames: function (successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getDateNames(successCallback, errorCallback, options);
                });
            },
            isDayLightSavingsTime: function (date, successCallback, errorCallback) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
                });
            },
            getFirstDayOfWeek: function (successCallback, errorCallback) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
                });
            },
            numberToString: function (number, successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.numberToString(number, successCallback, errorCallback, options);
                });
            },
            stringToNumber: function (string, successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
                });
            },
            getNumberPattern: function (successCallback, errorCallback, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
                });
            },
            getCurrencyPattern: function (currencyCode, successCallback, errorCallback) {
                PhoneGap.ready().then(function () {
                    $window.navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
                });
            }
        }
    });
