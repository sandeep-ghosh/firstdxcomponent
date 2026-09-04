import { render } from '@testing-library/react';
import { PegaExtensionsSignatureCapture } from './index';
import { configProps } from './demo.stories';

const testProps = {
  ...configProps,
  getPConnect: () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: jest.fn(),
      }),
      getStateProps: () => ({
        value: 'Signature',
      }),
      getLocalizedValue: (val: string) => val,
    } as any),
};

describe('SignatureCapture Component', () => {
  it('renders without crashing', () => {
    const { getByTestId, getByText } = render(<PegaExtensionsSignatureCapture {...testProps} />);
    expect(getByTestId('signature-1:form-field:')).toBeInTheDocument();
    expect(getByText('Clear', { exact: false })).toBeInTheDocument();
    expect(getByText('Accept', { exact: false })).toBeInTheDocument();
  });
});
