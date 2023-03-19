/** @type {import('vite').UserConfig} */
export default {
  test: {
    globals: true,
    deps: {
      inline: ['@fastify/autoload'],
    },
  },
};
