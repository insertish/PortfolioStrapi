'use strict';

/**
 *  homelab controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homelab.homelab');
