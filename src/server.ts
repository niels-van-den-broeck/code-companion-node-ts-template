import Fastify from 'fastify';
import autoLoad from '@fastify/autoload';
import path from 'path';

const server = Fastify({
  logger: true,
});

server.register(autoLoad, {
  dir: path.join(__dirname, 'routes'),
});

export default server;
