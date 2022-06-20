'use strict';

/**
 * homelab router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::homelab.homelab');
