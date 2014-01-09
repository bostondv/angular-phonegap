'use strict';
angular.module('PhoneGap', []).factory('PhoneGap', [
  '$q',
  '$rootScope',
  '$document',
  function ($q, $rootScope, $document) {
    var deferred = $q.defer();
    $document.bind('deviceready', function () {
      $rootScope.$apply(deferred.resolve);
    });
    return {
      ready: function () {
        return deferred.promise;
      }
    };
  }
]).run([
  'PhoneGap',
  function (PhoneGap) {
  }
]);
'use strict';
angular.module('PhoneGap').factory('Accelerometer', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    var idCounter = 0;
    var watchMap = {};
    return {
      getCurrentAcceleration: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.accelerometer.getCurrentAcceleration(onSuccess, onError, options);
        });
      },
      watchAcceleration: function (onSuccess, onError, options) {
        var watchId = (++idCounter).toString(10);
        PhoneGap.ready().then(function () {
          watchMap[watchId] = $window.navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        });
        return watchId;
      },
      clearWatch: function (watchId) {
        if (watchMap[watchId]) {
          PhoneGap.ready().then(function () {
            $window.navigator.accelerometer.clearWatch(watchMap[watchId]);
            delete watchMap[watchId];
          });
        }
      }
    };
  }
]);
'use strict';
var Camera = Camera || {
    PictureSourceType: {
      PHOTOLIBRARY: 0,
      CAMERA: 1,
      SAVEDPHOTOALBUM: 2
    },
    DestinationType: {
      DATA_URL: 0,
      FILE_URI: 1,
      NATIVE_URI: 2
    },
    EncodingType: {
      JPEG: 0,
      PNG: 1
    },
    MediaType: {
      PICTURE: 0,
      VIDEO: 1,
      ALLMEDIA: 2
    },
    Direction: {
      BACK: 0,
      FRONT: 1
    }
  };
angular.module('PhoneGap').factory('Camera', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    return {
      getPicture: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.camera.getPicture(onSuccess, onError, options);
        });
      },
      cleanup: function (onSuccess, onError) {
        PhoneGap.ready().then(function () {
          $window.navigator.camera.cleanup(onSuccess, onError);
        });
      },
      PictureSourceType: Camera.PictureSourceType,
      DestinationType: Camera.DestinationType,
      EncodingType: Camera.EncodingType,
      MediaType: Camera.MediaType,
      Direction: Camera.Direction
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Capture', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    return {
      captureAudio: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
        });
      },
      captureImage: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
        });
      },
      captureVideo: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.device.capture.captureVideo(onSuccess, onError, options);
        });
      }
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Compass', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    var idCounter = 0;
    var watchMap = {};
    return {
      getCurrentHeading: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.compass.getCurrentHeading(onSuccess, onError, options);
        });
      },
      watchHeading: function (onSuccess, onError, options) {
        var watchId = (++idCounter).toString(10);
        PhoneGap.ready().then(function () {
          watchMap[watchId] = $window.navigator.compass.watchHeading(onSuccess, onError, options);
        });
        return watchId;
      },
      clearWatch: function (watchId) {
        if (watchMap[watchId]) {
          PhoneGap.ready().then(function () {
            $window.navigator.compass.clearWatch(watchMap[watchId]);
            delete watchMap[watchId];
          });
        }
      }
    };
  }
]);
'use strict';
var ContactFindOptions = ContactFindOptions || function () {
    return undefined;
  };
angular.module('PhoneGap').factory('Contacts', [
  '$q',
  '$window',
  '$timeout',
  '$rootScope',
  'PhoneGap',
  function ($q, $window, $timeout, $rootScope, PhoneGap) {
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
  }
]);
'use strict';
var FileTransfer = FileTransfer || function () {
    return undefined;
  };
var FileUploadOptions = FileUploadOptions || function () {
    return undefined;
  };
var LocalFileSystem = LocalFileSystem || {
    PERSISTENT: 0,
    TEMPORARY: 1
  };
angular.module('PhoneGap').factory('File', function () {
});
'use strict';
angular.module('PhoneGap').factory('Geolocation', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    var idCounter = 0;
    var watchMap = {};
    return {
      getCurrentPosition: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        });
      },
      watchPosition: function (onSuccess, onError, options) {
        var watchId = (++idCounter).toString(10);
        PhoneGap.ready().then(function () {
          watchMap[watchId] = $window.navigator.geolocation.watchPosition(onSuccess, onError, options);
        });
        return watchId;
      },
      clearWatch: function (watchId) {
        if (watchMap[watchId]) {
          PhoneGap.ready().then(function () {
            $window.navigator.geolocation.clearWatch(watchMap[watchId]);
            delete watchMap[watchId];
          });
        }
      }
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Globalization', [
  '$window',
  'PhoneGap',
  function ($window, PhoneGap) {
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
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Notification', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
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
  }
]);
'use strict';
angular.module('PhoneGap').factory('Splashscreen', function () {
});
'use strict';
angular.module('PhoneGap').factory('Storage', function () {
});