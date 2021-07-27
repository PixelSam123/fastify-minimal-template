'use strict'

/**
 * @param {import("fastify").FastifyInstance} fastify
 */
module.exports = async (fastify, opts) => {
  fastify.get('/', (request, reply) => {
    reply.send('this is an example')
  })
}
