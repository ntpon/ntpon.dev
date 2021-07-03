module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};
