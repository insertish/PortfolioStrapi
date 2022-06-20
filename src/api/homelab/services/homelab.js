'use strict';

/**
 * homelab service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homelab.homelab');
