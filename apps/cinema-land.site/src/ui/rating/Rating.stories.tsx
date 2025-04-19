import { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const RatingExample: Story = {
  args: {
    value: 5.5,
  },
  render: (args) => (
    <div>
      <div className="flex primary-text">
        <Rating {...args} />
        <span className="pl-3">{args.value}</span>
      </div>

      <div className="mt-6">
        {[
          0, 0.1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.2, 3,
          3.3, 4, 4.4, 5, 5.5, 6, 6.6, 7, 7.7, 8, 8.8, 9, 9.9, 10,
        ].map((value, index) => (
          <div className="flex primary-text" key={index}>
            <Rating value={value} />
            <span className="pl-3">{value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
