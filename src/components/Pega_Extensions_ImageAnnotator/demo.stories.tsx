import type { Meta, StoryObj } from '@storybook/react';
import ImageAnnotator from './index';

const configProps = {
  value: '[]',
  label: 'Vehicle Damage Annotator',
  imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  validatemessage: '',
  hideLabel: false,
  helperText: 'Click on the car to drop a damage pin',
  testId: 'annotator-1',
  getPConnect: () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: () => {},
      }),
      getStateProps: () => ({
        value: 'Annotations',
      }),
      getLocalizedValue: (val: string) => val,
    } as any),
};

export default {
  title: 'Fields/Image Annotator',
  component: ImageAnnotator,
  argTypes: {
    getPConnect: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ImageAnnotator>;

type Story = StoryObj<typeof ImageAnnotator>;

export const Default: Story = {
  args: {
    ...configProps,
  },
};
