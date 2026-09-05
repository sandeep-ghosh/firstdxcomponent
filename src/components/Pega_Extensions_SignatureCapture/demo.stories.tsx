import type { Meta, StoryObj } from '@storybook/react';
import SignatureCapture from './index';

const configProps = {
  value: '',
  label: 'Signature',
  validatemessage: '',
  hideLabel: false,
  helperText: 'Sign here',
  testId: 'signature-1',
  getPConnect: () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: () => {},
      }),
      getStateProps: () => ({
        value: 'Signature',
      }),
      getLocalizedValue: (val: string) => val,
    } as any),
};

export default {
  title: 'Fields/Signature Capture',
  component: SignatureCapture,
  argTypes: {
    getPConnect: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof SignatureCapture>;

type Story = StoryObj<typeof SignatureCapture>;

export const Default: Story = {
  args: {
    ...configProps,
  },
};
