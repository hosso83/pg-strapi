/**
 * sector controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::sector.sector",
  ({ strapi }) => ({
    async find(ctx) {
      // Populate children relation
      ctx.query = {
        ...ctx.query,
        populate: {
          children: true,
          featuredImage: true,
        },
      };

      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },

    async findOne(ctx) {
      // Populate children relation
      ctx.query = {
        ...ctx.query,
        populate: {
          children: true,
          featuredImage: true,
        },
      };

      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },
  }),
);
