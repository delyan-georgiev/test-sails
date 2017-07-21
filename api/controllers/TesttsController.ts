/**
 * TesttsController
 *
 * @description :: Server-side logic for managing Testts
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

import e = require('express');

var TesttsController = {
	index: function (req: e.Request, res: e.Response, next: Function) {
		res.status(200).send('OK');
	},

  hello: function (req, res) {
    // Client.create({first_name: 'Minn', state: 'pending'})
    Client.find({where: {id: 3}}).populate('users', {username: 'Minnka'})
      .meta({fetch: true})
      .then(function (createdUser) {
        sails.log('Finn\'s id is:', createdUser.id);
        return res.send(createdUser);
      })
      .catch(function (err) {
        if (err) {
          return res.serverError(err);
        }
      });
  }
};

module.exports = TesttsController;
