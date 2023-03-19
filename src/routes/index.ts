import { FastifyPluginCallback, RouteHandlerMethod } from 'fastify';

const register: FastifyPluginCallback = (server, options, done) => {
  const getStatus: RouteHandlerMethod = async (request, reply) => {
    reply.status(200).send('API is live');
  };

  const successSchema = {};

  server.get('/', {
    schema: {
      response: {
        200: successSchema,
      },
    },
    handler: getStatus,
  });

  done();
};

export default register;
