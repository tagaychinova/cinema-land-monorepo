import { composePlugins, withNx } from '@nx/next';
import type { WithNxOptions } from '@nx/next/plugins/with-nx';

const nextConfig: WithNxOptions = {
  nx: {},

  compiler: {
    styledComponents: true,
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
