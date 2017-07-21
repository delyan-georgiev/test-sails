/**
 * SecondController
 *
 * @description :: Server-side logic for managing Seconds
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

import e = require('express');

var SecondController = {
	index: function (req: e.Request, res: e.Response, next: Function) {
		res.status(200).send('OK');
	}
};

module.exports = SecondController;
