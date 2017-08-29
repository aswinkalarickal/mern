const mongojs = require('mongojs');
const config = require('./config');
const db = mongojs(config.MONGODB_URL);

const COLLECTIONS = {
    dbTasks: {
        db: 'Tasks',
        indexes: []
    }
};

for(let key in COLLECTIONS) {
    let collection = COLLECTIONS[key];
    if(collection.indexes.length > 0) {
        db.collection(collection.db).ensureIndex(collection.indexes);
    }
}

module.exports = {

    find: (collectionName, query, callback, limit = 0, skip = 0) => {
        if(limit > 0) {
            db.collection(COLLECTIONS[collectionName].db).find(query).limit(limit).skip(skip).toArray(callback);
        } else {
            db.collection(COLLECTIONS[collectionName].db).find(query).skip(skip).toArray(callback);
        }
    },

    findOne: (collectionName, query, callback) => {
        db.collection(COLLECTIONS[collectionName].db).findOne(query, callback);
    },

    save: (collectionName, data, callback) => {
        db.collection(COLLECTIONS[collectionName].db).save(data, callback);
    },

    remove: (collectionName, query, callback) => {
        db.collection(COLLECTIONS[collectionName].db).remove(query, callback);
    },

    findAndModify: (collectionName, query, update, callback) => {
        db.collection(COLLECTIONS[collectionName].db).findAndModify({query: query, update: {$set: update}, new: true}, callback);
    },

    update: (collectionName, query, update, callback) => {
        db.collection(COLLECTIONS[collectionName].db).update(query, update, callback);
    }

};
