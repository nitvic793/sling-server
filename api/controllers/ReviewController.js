"use strict";

/**
 * ReviewController
 * @description :: Server-side logic for ...
 */

const _ = require('lodash');
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

const takeAlias = _.partial(_.map, _, item => item.alias);
const populateAlias = (model, alias) => model.populate(alias);

module.exports = {
    
};
