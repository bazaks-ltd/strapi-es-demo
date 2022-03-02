
module.exports = ({ env }) => ({
  connection: {
    // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/auth-reference.html
    node: env('ELASTICSEARCH_HOST', 'http://127.0.0.1:9200'),
  },
  setting: {
    importLimit: 3000,
    removeExistIndexForMigration: false,
  },
  models: [
  {
    "model": "article",
    "index": "article",
    "plugin": null,
    "enabled": true,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
]
});
