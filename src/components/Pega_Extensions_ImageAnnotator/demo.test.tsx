import { render } from '@testing-library/react';
import ImageAnnotator from './index';

const testProps = {
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
