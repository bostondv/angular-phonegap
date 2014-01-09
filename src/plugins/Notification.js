'use strict';

angular.module('PhoneGap')
  .factory('Notification', function ($q, $window, PhoneGap) {
    return {
      alert: function (message, callback, title, buttonName) {
        PhoneGap.ready().then(function () {
          $window.navigator.notification.alert(message, callback, title, buttonName);
        });
      },
      confirm: function (message, callback, title, buttonLabels) {
        PhoneGap.ready().then(function () {
          $window.navigator.notification.confirm(message, callback, title, buttonLabels);
        });
      },
      prompt: function (message, callback, title, buttonLabels, defaultText) {
        PhoneGap.ready().then(function () {
          $window.navigator.notification.prompt(message, callback, title, buttonLabels, defaultText);
        });
      },
      beep: function (times) {
        PhoneGap.ready().then(function () {
          $window.navigator.notification.beep(times);
        });
      },
      virbrate: function (milliseconds) {
        PhoneGap.ready().then(function () {
          $window.navigator.notification.virbrate(milliseconds);
        });
      }
    };
  });
