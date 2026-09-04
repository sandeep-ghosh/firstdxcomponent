import type { Meta, StoryObj } from '@storybook/react';
import { PegaExtensionsSignatureCapture } from './index';
import { configProps } from './demo.test';

export default {
  title: 'Fields/Signature Capture',
  component: PegaExtensionsSignatureCapture,
  argTypes: {
    getPConnect: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof PegaExtensionsSignatureCapture>;

type Story = StoryObj<typeof PegaExtensionsSignatureCapture>;

export const Default: Story = {
  args: {
    ...configProps,
  },
};
