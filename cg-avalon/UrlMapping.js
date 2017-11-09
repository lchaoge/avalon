define(function () {
    var isLocalHost = window.location.hostname.toLowerCase() == 'localhost';
    var origin=window.location.protocol + "//" + window.location.host;
    return {
        'GET_CONDITION_LIST':(isLocalHost?'./mokeData':origin) + '/conditions' + (isLocalHost ? '.json' : ''),
        'GET_TABLE_LIST':(isLocalHost?'./mokeData':origin) + '/tabledata' + (isLocalHost ? '.json' : '')
    };
});