import { render } from '@testing-library/react';
import ImageAnnotator from './index';
import { configProps } from './demo.stories';

const testProps = {
  ...configProps,
  getPConnect: () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: jest.fn(),
      }),
      getStateProps: () => ({
        value: 'Annotations',
      }),
      getLocalizedValue: (val: string) => val,
    } as any),
};

describe('ImageAnnotator Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<ImageAnnotator {...testProps} />);
    expect(getByText('Vehicle Damage Annotator', { exact: false })).toBeInTheDocument();
    expect(getByText('Undo', { exact: false })).toBeInTheDocument();
  });
});
