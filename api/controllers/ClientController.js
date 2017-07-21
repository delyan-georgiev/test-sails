'use strict';

/**
 * ClientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  hello: function(req, res) {
    // Client.create({first_name: 'Minn', state: 'pending'})
    Client.find({where: {id: 3}}).populate('users', {username: 'Minnka'})
      .meta({fetch: true})
      .then(function(createdUser) {
        sails.log('Finn\'s id is:', createdUser.id);
        return res.send(createdUser);
      })
      .catch(function(err){
        if(err) {
          return res.serverError(err);
        }
      });
  }
};

