'use strict';

/**
 * sendmail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sendmail.sendmail');
