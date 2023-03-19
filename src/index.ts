import server from './server';

server.listen(
  {
    port: Number(process.env.PORT),
    host: '0.0.0.0',
  },
  (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }

    server.log.info(`Server running on ${address}`);
  },
);
