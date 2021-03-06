/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

import util = require('util');
import express = require('express');

declare var sails: any;

export function index(req: any, res: any, next: Function): any {
  console.error('test');
  console.log('index() from TsController.ts');
  res.status(200).send('Hello from Typescript!');
}

export function config(req: express.Request, res: express.Response, next: Function) {
  console.log('config() from TsController.ts');
  res.status(200)
    .send('<h1>sails.config :</h1><pre>' + util.inspect(sails.config) + '<pre>');
}
