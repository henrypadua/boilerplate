/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true
};

const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
   swcMinify: true,
   experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true
   },
   pwa: {
      dest: 'public',
      disable: !isProd
   }
});

module.exports = nextConfig;
