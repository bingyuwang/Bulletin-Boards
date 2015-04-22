if (window.ag == null) {
  window.ag = {};
}
window.ag.data = {
  "options": {
    "baseUrl": "https://rest-api.appgyver.com/v2/",
    "headers": {
      "steroidsApiKey": "c35e5b16fbe2f8e34869935f8b62de9e8f6bfefe5deb3fd10eb53605ef998996",
      "steroidsAppId": 55218
    }
  },
  "resources": {
    "TestObject": {
      "schema": {
        "fields": {
          "createdAt": {
            "type": "string"
          },
          "foo": {
            "type": "string"
          },
          "objectId": {
            "type": "string",
            "identity": true
          },
          "updatedAt": {
            "type": "string"
          }
        },
        "identifier": "objectId"
      }
    }
  }
};