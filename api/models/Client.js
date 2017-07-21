'use strict';
/**
 * Client.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    first_name: 'string',
    last_name: 'string',
    users: {
      collection: 'user',
      via: 'owner'
    },
    state: {
      type: 'string',
      isIn: ['pending', 'approved', 'denied']
    }
  }
};

