import { render } from '@testing-library/react';
import { PegaExtensionsSignatureCapture } from './index';

const testProps = {
  value: '',
  label: 'Signature',
  validatemessage: '',
  hideLabel: false,
  helperText: 'Sign here',
  testId: 'signature-1',
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
