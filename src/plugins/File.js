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

angular.module('PhoneGap')
    .factory('File', function () {});