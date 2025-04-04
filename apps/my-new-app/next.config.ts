import { composePlugins, withNx } from '@nx/next';
import type { WithNxOptions } from '@nx/next/plugins/with-nx';
const withImages = require('next-images');

const nextConfig: WithNxOptions = {
  nx: {},
  images: {
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true,
  },
};

const plugins = [withNx, withImages];

module.exports = composePlugins(...plugins)(nextConfig);
