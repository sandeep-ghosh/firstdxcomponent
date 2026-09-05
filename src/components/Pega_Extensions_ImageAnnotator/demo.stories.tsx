import type { Meta, StoryObj } from '@storybook/react';
import ImageAnnotator from './index';

const configProps = {
  value: '[]',
  label: 'Vehicle Damage Annotator',
  imageUrl: 'https://www.w3schools.com/html/img_car.jpg',
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
