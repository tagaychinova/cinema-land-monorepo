import { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;

// If you have the actions addon,
// you can interact with the links and see the route change events there
export const Example: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: '/movie/[id]',
        asPath: '/movie/1',
        query: {
          id: '1',
        },
      },
    },
  },
};
